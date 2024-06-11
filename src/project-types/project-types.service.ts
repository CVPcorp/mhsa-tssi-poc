import { InjectModel } from '@nestjs/sequelize';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ProjectType } from './project-type.model';

@Injectable()
export class ProjectTypesService {
  constructor(
    @InjectModel(ProjectType)
    private model: typeof ProjectType,
  ) {}

  async findAll(): Promise<ProjectType[]> {
    return this.model.findAll();
  }

  async findOne(code: string): Promise<ProjectType> {
    const result = await this.model.findOne({
      where: { code },
    });

    if (!result) {
      throw new NotFoundException();
    }

    return result;
  }
}

export default ProjectTypesService;
