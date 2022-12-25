import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './submodules/backend-social-1.0-entities/src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db-socialmedia.covmrskhmzs0.ap-south-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'amrit1234',
      database: 'backend-socialmedia',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
