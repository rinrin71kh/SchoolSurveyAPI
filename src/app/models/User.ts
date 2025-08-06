import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
  HasOne,
  HasMany,
} from 'sequelize-typescript';

import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
  ForeignKey as FKType, // ✅ rename to avoid decorator conflict
} from 'sequelize';

import { Student } from './Student';
import { Survey } from './Survey/Survey';
import { SurveyResponse } from './Survey/SurveyResponse';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: CreationOptional<number>;

  @Column({ type: DataType.STRING, allowNull: false })
  declare username: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare role: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare password: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  declare email: string;

  @Column(DataType.STRING)
  declare avatar?: string;

  @Column(DataType.STRING)
  declare phone?: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  declare is_student: boolean;

  @Default('pending')
  @Column(DataType.STRING)
  declare approval_status: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  declare approved_by?: FKType<number>;

  @BelongsTo(() => User, 'approved_by')
  declare approvedBy?: NonAttribute<User>;

  @Column(DataType.DATE)
  declare approved_at?: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  declare created_at: CreationOptional<Date>;

  @HasOne(() => Student)
  declare student?: NonAttribute<Student>;

  @HasMany(() => Survey)
  declare surveys?: NonAttribute<Survey[]>;

  @HasMany(() => SurveyResponse)
  declare responses?: NonAttribute<SurveyResponse[]>;
}
