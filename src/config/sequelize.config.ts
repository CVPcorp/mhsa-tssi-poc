import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  SequelizeOptionsFactory,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';

import { DbConfig } from './config';
import ProjectType from '../project-types/project-type.model';
import ReferenceData from '../reference-data/reference-data.model';

@Injectable()
export class SequelizeConfig implements SequelizeOptionsFactory {
  private dbConfig: DbConfig;

  constructor(private readonly configService: ConfigService) {
    this.dbConfig = configService.get<DbConfig>('database', {
      infer: true,
    });
  }

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'oracle',
      host: this.dbConfig.host,
      port: this.dbConfig.port,
      username: this.dbConfig.user,
      password: this.dbConfig.password,
      database: this.dbConfig.name,
      synchronize: false,
      models: [ProjectType, ReferenceData],
    };
  }
}

export default SequelizeConfig;
