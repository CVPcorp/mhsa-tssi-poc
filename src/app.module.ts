import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import Routes from './routes';
import config from './config/config';
import SequelizeConfigService from './config/sequelize.config';
//import ProjectTypesModule from './project-types/project-types.module';
import ReferenceDataModule from './reference-data/reference-data.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    RouterModule.register(Routes),
    //ProjectTypesModule,
    ReferenceDataModule,
  ],
})
export class AppModule {}
