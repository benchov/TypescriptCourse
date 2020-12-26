import { Router, Request, Response } from "express";

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

router.post("/login", (req: Request, res: Response) => {
  console.log("req.body", req.body);
  const { email, password } = req.body;

  res.send(email + password);
});

export { router };
