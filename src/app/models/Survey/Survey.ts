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

import { SurveyType } from './SurveyType';
import { User } from '../User';
import { SurveyQuestion } from './SurveyQuestion';
import { SurveyResponse } from './SurveyResponse';

@Table({ tableName: 'surveys', timestamps: false })
export class Survey extends Model<
  InferAttributes<Survey>,
  InferCreationAttributes<Survey>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  declare description: string;

  @ForeignKey(() => SurveyType)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare type_id: FKType<number>;

  @BelongsTo(() => SurveyType)
  declare type: NonAttribute<SurveyType>;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare created_by: FKType<number>;

  @BelongsTo(() => User)
  declare creator: NonAttribute<User>;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  declare created_at: CreationOptional<Date>;

  @HasMany(() => SurveyQuestion)
  declare questions: NonAttribute<SurveyQuestion[]>;

  @HasMany(() => SurveyResponse)
  declare responses: NonAttribute<SurveyResponse[]>;
}
