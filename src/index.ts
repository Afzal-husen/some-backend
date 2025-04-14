import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json({ users });
});

app.post("/", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      name: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15),
    },
  });
  res.json({ user });
});
