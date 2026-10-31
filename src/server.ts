/**
 * Node modules
 */
import express from "express";
import cors from "cors";
import session from "express-session";
import helmet from "helmet";
import cookieParser from "cookie-parser";

/**
 * Custom modules
 */

/**
 * Routes
 */

/**
 * Config
 */
import { common } from "@/config";

/**
 * Initial express
 */
const app = express();

/**
 * Middlewares
 */

app.listen(() => {
  console.log(`server listening at http://localhost:${common.PORT}`);
});
