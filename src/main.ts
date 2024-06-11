import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AppConfig, DbConfig } from './config/config';

async function bootstrap() {
  const SWAGGER = 'swagger';
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const dbConfig: DbConfig = configService.get<DbConfig>('database', {
    infer: true,
  });
  const appConfig: AppConfig = configService.get<AppConfig>('app', {
    infer: true,
  });

  const docBuilder = new DocumentBuilder()
    .setTitle('MSHA TSSI API Services')
    .setDescription('Collection of service endpoints for TSSI')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, docBuilder);
  SwaggerModule.setup(SWAGGER, app, document);

  await app.listen(appConfig.port);

  if (appConfig.debug) {
    console.log('db config: ', dbConfig);
    console.log('app config: ', appConfig);
    console.log(`Application is running on: ${await app.getUrl()}/${SWAGGER}`);
  }
}

bootstrap();
