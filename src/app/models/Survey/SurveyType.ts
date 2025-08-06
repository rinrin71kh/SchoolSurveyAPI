import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from 'sequelize';

import { Survey } from './Survey';

@Table({ tableName: 'survey_types', timestamps: false })
export class SurveyType extends Model<
  InferAttributes<SurveyType>,
  InferCreationAttributes<SurveyType>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare name: string;

  @HasMany(() => Survey)
  declare surveys: NonAttribute<Survey[]>;
}
