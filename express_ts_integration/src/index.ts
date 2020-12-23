import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(
    `
    <div>
        <h1>Hello Stranger</h1>
    </div>
    `
  );
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
