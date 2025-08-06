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
  NonAttribute,
  ForeignKey as FKType,
} from 'sequelize';

import { User } from './User';
import { Class } from './Class';

@Table({ tableName: 'students', timestamps: false })
export class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  declare user_id: FKType<number>;

  @BelongsTo(() => User)
  declare user: NonAttribute<User>;

  @Column(DataType.STRING)
  declare status: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  declare created_at: CreationOptional<Date>;

  @HasMany(() => Class)
  declare classes: NonAttribute<Class[]>;
}
