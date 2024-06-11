import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import ProjectType from './project-type.model';
import ProjectTypesService from './project-types.service';
import ProjectTypesController from './project-types.controller';

@Module({
  imports: [SequelizeModule.forFeature([ProjectType])],
  exports: [SequelizeModule],
  providers: [ProjectTypesService],
  controllers: [ProjectTypesController],
})
export class ProjectTypesModule {}

export default ProjectTypesModule;
