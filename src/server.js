import "dotenv/config";
import express from "express";
import { connect } from "./utils/db";
import config from "./config";

const app = express();

const PORT = process.env.PORT || config.port;
const HOST = process.env.HOST || config.host;

export const start = async () => {
  try {
    await connect();
    app.listen(PORT, HOST, () => {
      console.log(`Listening on ${HOST}:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
