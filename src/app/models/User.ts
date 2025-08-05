import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  username!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  role!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column(DataType.STRING)
  avatar?: string;

  @Column(DataType.STRING)
  phone?: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  is_student!: boolean;

  @Default('pending')
  @Column(DataType.STRING)
  approval_status!: string;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  approved_by?: number;

  @BelongsTo(() => User, 'approved_by')
  approvedBy?: User;

  @Column(DataType.DATE)
  approved_at?: Date;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;
}
