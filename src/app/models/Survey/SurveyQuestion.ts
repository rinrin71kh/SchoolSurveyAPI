import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { Survey } from './Survey';
import { SurveyQuestionOption } from './SurveyQuestionOption';
import { SurveyAnswer } from './SurveyAnswer';

@Table({ tableName: 'survey_questions', timestamps: false })
export class SurveyQuestion extends Model<SurveyQuestion> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  survey_id!: number;

  @BelongsTo(() => Survey)
  survey!: Survey;

  @Column({ type: DataType.TEXT, allowNull: false })
  question!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  type!: string; // e.g., text, multiple_choice, rating

  @Default(true)
  @Column(DataType.BOOLEAN)
  is_required!: boolean;

  @HasMany(() => SurveyQuestionOption)
  options!: SurveyQuestionOption[];

  @HasMany(() => SurveyAnswer)
  answers!: SurveyAnswer[];
}
