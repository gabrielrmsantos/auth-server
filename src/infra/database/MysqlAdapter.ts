import mysql from "mysql2/promise";
import { DatabaseConnection } from "./DatabaseConnection";

export class MysqlAdapter implements DatabaseConnection {

  connection: any;

  constructor () {
    this.connection = mysql.createConnection({
      user: process.env.CONN_USER,
      password: process.env.CONN_PASS,
      database: process.env.CONN_DATABASE,
      host: process.env.CONN_HOST,
      port: parseInt(process.env.CONN_PORT ?? "3306"),
    });
  }

  async query (statement: string, params: any): Promise<any> {
    const [results] = await this.connection.query(statement, params);
    return results;
  }

  async close(): Promise<void> {
    await this.connection.close();
  }
}