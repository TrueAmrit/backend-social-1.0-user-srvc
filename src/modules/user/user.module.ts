import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from 'src/submodules/backend-social-1.0-entities/src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from 'src/submodules/backend-social-1.0-entities/src/entities/content.entity';
import { Option } from 'src/submodules/backend-social-1.0-entities/src/entities/option.entity';
import { Group } from 'src/submodules/backend-social-1.0-entities/src/entities/group.entity';
import { Reaction } from 'src/submodules/backend-social-1.0-entities/src/entities/reaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Content, Option, Group, Reaction])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
