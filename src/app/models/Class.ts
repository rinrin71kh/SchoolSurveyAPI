import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Student } from './Student';

@Table({ tableName: 'classes', timestamps: false })
export class Class extends Model<Class> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @ForeignKey(() => Student)
  @Column({ type: DataType.INTEGER, allowNull: false })
  student_id!: number;

  @BelongsTo(() => Student)
  student!: Student;

  @Column(DataType.STRING)
  class_name!: string;

  @Column(DataType.STRING)
  academic_year!: string;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
