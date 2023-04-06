import connectMongo from "@/database/connection";
import Users from "@/model/Schema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // Only POST method is accepted
  if (req.method === "POST") {
    //ถ้าไม่มี user input
    if (!req.body)
      return res.status(400).json({ error: "Don't have form data...!F" });

    // ถ้ามี user input Destructuring ค่าออกมา
    const { username, email, password } = req.body;

    //Check duplicate users
    const check_existing = await Users.findOne({ email });
    if (check_existing)
      return res.status(422).json({ message: "User Already Exists...!" });

    // Hash password
    Users.create({
      username,
      email,
      password: await hash(password, 12),
    })
      .then((user) => {
        res.status(201).json({ message: "User created successfully", status: true, user });
      })
      .catch((err) => {
        res.status(404).json({ err });
      });
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
