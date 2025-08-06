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
import { SurveyType } from './SurveyType';
import { User } from '../User';
import { SurveyQuestion } from './SurveyQuestion';
import { SurveyResponse } from './SurveyResponse';

@Table({ tableName: 'surveys', timestamps: false })
export class Survey extends Model<Survey> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description!: string;

  @ForeignKey(() => SurveyType)
  @Column({ type: DataType.INTEGER, allowNull: false })
  type_id!: number;

  @BelongsTo(() => SurveyType)
  type!: SurveyType;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  created_by!: number;

  @BelongsTo(() => User)
  creator!: User;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  created_at!: Date;

  @HasMany(() => SurveyQuestion)
  questions!: SurveyQuestion[];

  @HasMany(() => SurveyResponse)
  responses!: SurveyResponse[];
}
