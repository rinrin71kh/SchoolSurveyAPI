import { Sequelize } from 'sequelize-typescript';
import { AppConfig } from './config.module';
import { User } from '../app/models/User';
export const sequelize = new Sequelize({
  ...AppConfig.db,
  dialect: AppConfig.db.dialect as 'postgres', // ✅ fix here
  models: [User],
  logging: false,
});
