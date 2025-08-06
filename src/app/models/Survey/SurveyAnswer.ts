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

import { SurveyResponse } from './SurveyResponse';
import { SurveyQuestion } from './SurveyQuestion';

@Table({ tableName: 'survey_answers', timestamps: false })
export class SurveyAnswer extends Model<
  InferAttributes<SurveyAnswer>,
  InferCreationAttributes<SurveyAnswer>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @ForeignKey(() => SurveyResponse)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare response_id: FKType<number>;

  @BelongsTo(() => SurveyResponse)
  declare response: NonAttribute<SurveyResponse>;

  @ForeignKey(() => SurveyQuestion)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare question_id: FKType<number>;

  @BelongsTo(() => SurveyQuestion)
  declare question: NonAttribute<SurveyQuestion>;

  @Column(DataType.STRING)
  declare selected_option: string;

  @Column(DataType.TEXT)
  declare answer_text: string;
}
