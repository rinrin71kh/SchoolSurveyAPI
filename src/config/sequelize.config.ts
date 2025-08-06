import { Sequelize } from 'sequelize-typescript';
import { AppConfig } from './config.module';
import { User } from '../app/models/User';
import { Student } from '../app/models/Student';
import { Class } from '../app/models/Class';
import { SurveyType } from '../app/models/Survey/SurveyType';
import { Survey } from '../app/models/Survey/Survey';
import { SurveyQuestionOption } from '../app/models/Survey/SurveyQuestionOption';
import { SurveyQuestion } from '../app/models/Survey/SurveyQuestion';
import { SurveyResponse } from '../app/models/Survey/SurveyResponse';
import { SurveyAnswer } from '../app/models/Survey/SurveyAnswer';
export const sequelize = new Sequelize({
  ...AppConfig.db,
  dialect: AppConfig.db.dialect as 'postgres', // ✅ fix here
  models: [
  User,
  Student,
  Class,
  SurveyType,
  Survey,
  SurveyQuestion,
  SurveyQuestionOption,
  SurveyResponse,
  SurveyAnswer,
],
  logging: false,
});
