import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const buildSwaggerModule = (appCore: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('The Todo API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(appCore, options);
  SwaggerModule.setup('api-docs', appCore, document);
};
