import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey as FKType,
  NonAttribute,
} from 'sequelize';

import { SurveyQuestion } from './SurveyQuestion';

@Table({ tableName: 'survey_question_options', timestamps: false })
export class SurveyQuestionOption extends Model<
  InferAttributes<SurveyQuestionOption>,
  InferCreationAttributes<SurveyQuestionOption>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @ForeignKey(() => SurveyQuestion)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare question_id: FKType<number>;

  @BelongsTo(() => SurveyQuestion)
  declare question: NonAttribute<SurveyQuestion>;

  @Column(DataType.STRING)
  declare label: string;

  @Column(DataType.STRING)
  declare value: string;
}
