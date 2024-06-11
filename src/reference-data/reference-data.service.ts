import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Injectable, NotFoundException } from '@nestjs/common';

import { ReferenceData } from './reference-data.model';

@Injectable()
export class ReferenceDataService {
  constructor(
    private sequelize: Sequelize,
    @InjectModel(ReferenceData)
    private model: typeof ReferenceData,
  ) {}

  async listReferenceData() {
    const results = await this.model.findAll();
    return results.map((e: ReferenceData) => e.code);
  }

  async getReferenceData(code: string) {
    const result = await this.model.findOne({
      where: { code },
    });

    if (!result) {
      throw new NotFoundException();
    }

    return this.sequelize.query(result.query);
  }
}

export default ReferenceDataService;
