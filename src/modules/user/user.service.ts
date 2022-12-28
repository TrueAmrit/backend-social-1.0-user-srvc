import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/submodules/backend-social-1.0-dtos/src/dtos/user.dto';
import { User } from 'src/submodules/backend-social-1.0-entities/src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepsitory: Repository<User>,
  ) {}

  async createUser(user: UserDto) {
    try {
      let userEntity = this.userRepsitory.create(user);
      let createdUser = await this.userRepsitory.save(userEntity);
      return createdUser;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    try {
      let retrievedUser = await this.userRepsitory.find();
      return retrievedUser;
    } catch (err) {
      throw err;
    }
  }
  async updateUser(user: UserDto) {
    try {
      let updatedUser = await this.userRepsitory.update(user.id, user);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  async deleteUser(userId: number){
    try {
      let deletedUser = await this.userRepsitory.delete(userId);
      return deletedUser;
    } catch (err) {
      throw err;
    }
  }
}
