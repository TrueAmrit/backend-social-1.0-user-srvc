import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { Content } from './submodules/backend-social-1.0-entities/src/entities/content.entity';
import { Group } from './submodules/backend-social-1.0-entities/src/entities/group.entity';
import { Option } from './submodules/backend-social-1.0-entities/src/entities/option.entity';
import { Reaction } from './submodules/backend-social-1.0-entities/src/entities/reaction.entity';
import { User } from './submodules/backend-social-1.0-entities/src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-soft-star-756347.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'amritgupta1018',
      password: 'XOMjT6aq3Ibp',
      database: 'neondb',
      entities: [User, Content, Option, Group, Reaction],
      synchronize: false,
      logging: true,
      ssl: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
