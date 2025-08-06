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

import { Student } from './Student';

@Table({ tableName: 'classes', timestamps: false })
export class Class extends Model<
  InferAttributes<Class>,
  InferCreationAttributes<Class>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @ForeignKey(() => Student)
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare student_id: FKType<number>;

  @BelongsTo(() => Student)
  declare student: NonAttribute<Student>;

  @Column(DataType.STRING)
  declare class_name: string;

  @Column(DataType.STRING)
  declare academic_year: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare created_at: CreationOptional<Date>;
}
