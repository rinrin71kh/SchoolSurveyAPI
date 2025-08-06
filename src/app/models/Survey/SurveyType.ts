import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Survey } from './Survey';

@Table({ tableName: 'survey_types', timestamps: false })
export class SurveyType extends Model<SurveyType> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @HasMany(() => Survey)
  surveys!: Survey[];
}
