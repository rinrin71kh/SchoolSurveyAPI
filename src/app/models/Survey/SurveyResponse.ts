import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  ForeignKey as FKType,
  NonAttribute,
} from 'sequelize';

import { Survey } from './Survey';
import { User } from '../User';
import { SurveyAnswer } from './SurveyAnswer';

@Table({ tableName: 'survey_responses', timestamps: false })
export class SurveyResponse extends Model<
  InferAttributes<SurveyResponse>,
  InferCreationAttributes<SurveyResponse>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @ForeignKey(() => Survey)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare survey_id: FKType<number>;

  @BelongsTo(() => Survey)
  declare survey: NonAttribute<Survey>;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare user_id: FKType<number>;

  @BelongsTo(() => User)
  declare user: NonAttribute<User>;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare submitted_at: CreationOptional<Date>;

  @HasMany(() => SurveyAnswer)
  declare answers: NonAttribute<SurveyAnswer[]>;
}
