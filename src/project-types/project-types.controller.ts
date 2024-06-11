import { Controller, Get } from '@nestjs/common';

import ProjectType from './project-type.model';
import ProjectTypesService from './project-types.service';

@Controller('project-types')
export class ProjectTypesController {
  constructor(private readonly service: ProjectTypesService) {}

  @Get()
  findAll(): Promise<ProjectType[]> {
    return this.service.findAll();
  }
}

export default ProjectTypesController;
