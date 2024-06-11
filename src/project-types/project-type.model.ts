import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({
  createdAt: false,
  updatedAt: false,
  tableName: 'TS_PROJECT_TYPE_CODES',
})
export class ProjectType extends Model {
  @PrimaryKey
  @Column({ field: 'TS_PROJECT_TYPE_CODE' })
  code: string;
  @Column({ field: 'TS_PROJECT_TYPE_DESC' })
  description: string;
}

export default ProjectType;
