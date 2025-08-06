import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { SurveyQuestion } from './SurveyQuestion';

@Table({ tableName: 'survey_question_options', timestamps: false })
export class SurveyQuestionOption extends Model<SurveyQuestionOption> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => SurveyQuestion)
  @Column({ type: DataType.INTEGER, allowNull: false })
  question_id!: number;

  @BelongsTo(() => SurveyQuestion)
  question!: SurveyQuestion;

  @Column(DataType.STRING)
  label!: string;

  @Column(DataType.STRING)
  value!: string;
}
