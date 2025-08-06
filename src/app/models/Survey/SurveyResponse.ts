import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Survey } from './Survey';
import { User } from '../User';
import { SurveyAnswer } from './SurveyAnswer';

@Table({ tableName: 'survey_responses', timestamps: false })
export class SurveyResponse extends Model<SurveyResponse> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  survey_id!: number;

  @BelongsTo(() => Survey)
  survey!: Survey;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  submitted_at!: Date;

  @HasMany(() => SurveyAnswer)
  answers!: SurveyAnswer[];
}
