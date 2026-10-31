/**
 * Node modules
 */
import dotenv from "dotenv";

dotenv.config();

export const common = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: (process.env.CLIENT_URL as string) ?? "https://localhost:5173",
};
