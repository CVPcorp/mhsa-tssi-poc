import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import ReferenceData from './reference-data.model';
import ReferenceDataService from './reference-data.service';
import ReferenceDataController from './reference-data.controller';

@Module({
  imports: [SequelizeModule.forFeature([ReferenceData])],
  exports: [SequelizeModule],
  providers: [ReferenceDataService],
  controllers: [ReferenceDataController],
})
export class ReferenceDataModule {}

export default ReferenceDataModule;
