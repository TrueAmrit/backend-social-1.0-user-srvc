import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/submodules/backend-social-1.0-entities/src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
