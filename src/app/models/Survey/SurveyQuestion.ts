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

import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey as FKType,
  NonAttribute,
} from 'sequelize';

import { Survey } from './Survey';
import { SurveyQuestionOption } from './SurveyQuestionOption';
import { SurveyAnswer } from './SurveyAnswer';

@Table({ tableName: 'survey_questions', timestamps: false })
export class SurveyQuestion extends Model<
  InferAttributes<SurveyQuestion>,
  InferCreationAttributes<SurveyQuestion>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare survey_id: FKType<number>;

  @BelongsTo(() => Survey)
  declare survey: NonAttribute<Survey>;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare question: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare type: string; // e.g., text, multiple_choice, rating

  @Default(true)
  @Column(DataType.BOOLEAN)
  declare is_required: boolean;

  @HasMany(() => SurveyQuestionOption)
  declare options: NonAttribute<SurveyQuestionOption[]>;

  @HasMany(() => SurveyAnswer)
  declare answers: NonAttribute<SurveyAnswer[]>;
}
