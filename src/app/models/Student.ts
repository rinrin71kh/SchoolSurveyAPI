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
import { User } from './User';
import { Class } from './Class';

@Table({ tableName: 'students', timestamps: false })
export class Student extends Model<Student> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column(DataType.STRING)
  status!: string;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  created_at!: Date;

  @HasMany(() => Class)
  classes!: Class[];
}
