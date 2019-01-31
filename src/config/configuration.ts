import { IConfig } from "./IConfig";
import { config } from "dotenv";
config();
const configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  mongo: process.env.MONGO_URL
});
export default configuration;
