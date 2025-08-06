import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { SurveyResponse } from './SurveyResponse';
import { SurveyQuestion } from './SurveyQuestion';

@Table({ tableName: 'survey_answers', timestamps: false })
export class SurveyAnswer extends Model<SurveyAnswer> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => SurveyResponse)
  @Column({ type: DataType.INTEGER, allowNull: false })
  response_id!: number;

  @BelongsTo(() => SurveyResponse)
  response!: SurveyResponse;

  @ForeignKey(() => SurveyQuestion)
  @Column({ type: DataType.INTEGER, allowNull: false })
  question_id!: number;

  @BelongsTo(() => SurveyQuestion)
  question!: SurveyQuestion;

  @Column(DataType.STRING)
  selected_option!: string;

  @Column(DataType.TEXT)
  answer_text!: string;
}
