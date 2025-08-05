import dotenv from 'dotenv';
dotenv.config();

export const AppConfig = {
  port: process.env.PORT || 3000,
  db: {
    dialect: 'postgres',
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!),
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
    timezone: process.env.DB_TIMEZONE || '+07:00',
  },
  jwtSecret: process.env.JWT_SECRET!,
};
