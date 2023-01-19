import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/submodules/backend-social-1.0-dtos/src/dtos/user.dto';
import { Group } from 'src/submodules/backend-social-1.0-entities/src/entities/group.entity';
import { User } from 'src/submodules/backend-social-1.0-entities/src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Group)
    private groupRepository: Repository<Group>,
  ) {}

  async createUser(user: UserDto) {
    try {
      const userEntity = this.userRepository.create(user);
      const createdUser = await this.userRepository.save(userEntity);
      return createdUser;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    try {
      const retrievedUser = await this.userRepository.find();
      return retrievedUser;
    } catch (err) {
      throw err;
    }
  }
  async updateUser(user: UserDto) {
    try {
      const updatedUser = await this.userRepository.update(user.id, user);
      return updatedUser;
    } catch (err) {
      throw err;
    }
  }

  async deleteUser(userId: number) {
    try {
      const deletedUser = await this.userRepository.delete(userId);
      return deletedUser;
    } catch (err) {
      throw err;
    }
  }

  async getGroupsByUser(userId: number) {
    const fetchedGroups = await this.groupRepository.find({
      where: {
        users: { id: userId },
      },
    });
    return fetchedGroups;
  }
}
