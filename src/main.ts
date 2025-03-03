import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { buildSwaggerModule } from './shared/utils/swagger.builder.utility';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  buildSwaggerModule(app);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch(console.error);
