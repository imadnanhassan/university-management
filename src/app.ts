import express, { Application, Request, Response } from "express";
import cors from "cors";
import userService from "./app/modules/user/user.service";
const app: Application = express();


app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response) => {
  await userService.createUser({
    id: "222",
    password: "1234",
    role: "student",
  });
  
  res.send("Hello World!");
});

export default app;
