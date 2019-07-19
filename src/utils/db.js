import mongoose from "mongoose";
import config from "../config";

export const connect = (url = config.dbUrl, options = {}) => {
  return mongoose
    .connect(url, { ...options, useNewUrlParser: true })
    .then(() => console.log("MongoDB connected"));
};
