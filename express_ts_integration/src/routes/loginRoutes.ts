import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method='POST'>
        <div>
        <label>Email</label>
        <input name="email" />
        </div>
        <div>
        <label>Password</label>
        <input name="password" type="password" />
        </div>
        <button>Submit</button>
    </form>
    
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === "benchov" && password === "secret") {
    req.session = { loggedIn: true };
    res.redirect("/");
    console.log("loggedIn");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/", (req: RequestWithBody, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
        <div>
            <p>You are logged in</p>
            <a href='/logout'>Logout</a>
        </div>
      `);
  } else {
    res.send(`
    <div>
        <p>You are not logged in</p>
        <a href='/login'>Login</a>
    </div>
  `);
  }
});

router.get("/logout", (req: RequestWithBody, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});
export { router };
