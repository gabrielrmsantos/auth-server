import express from "express";
import mysql, { ConnectionOptions } from "mysql2/promise";
import { randomUUID } from "crypto";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import "dotenv/config";

const createConnection = async () => {
  const connectionOptions: ConnectionOptions = {
    user: process.env.CONN_USER,
    password: process.env.CONN_PASS,
    database: process.env.CONN_DATABASE,
    host: process.env.CONN_HOST,
    port: parseInt(process.env.CONN_PORT ?? "3306"),
  };
  return await mysql.createConnection(connectionOptions);
}

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  return res.send({ message: "hello express" });
});

app.post("/auth/login", (req, res) => {
  
});

app.get("/user", async (req, res) => {
  const connection = await createConnection();
  const users = await connection.query("SELECT * FROM user");
  return res.send(users[0]);
});

app.post("/user", async (req, res) => {
  const { username, password, email } = req.body;
  const id = randomUUID();
  const connection = await createConnection();
  const users = await connection.query("INSERT INTO user (id, username, password, email) VALUES (%s, %s, %s, %s)", [id, username, password, email]);
  return res.send(users);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
})