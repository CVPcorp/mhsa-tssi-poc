import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';

@Table({
  createdAt: false,
  updatedAt: false,
  tableName: 'REFERENCE_DATA',
})
export class ReferenceData extends Model {
  @PrimaryKey
  @Column({ field: 'REFERENCE_DATA_CODE' })
  code: string;
  @Column({ field: 'REFERENCE_DATA_QUERY' })
  query: string;
}

export default ReferenceData;
