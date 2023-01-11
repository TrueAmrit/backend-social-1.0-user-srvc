import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from 'src/submodules/backend-social-1.0-dtos/src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDto) {
    try {
      const createdUser = await this.userService.createUser(user);
      return createdUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  @Get()
  async findUser() {
    try {
      const fetchedUser = await this.userService.findAll();
      return fetchedUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Put()
  async updateUser(@Body() user: UserDto) {
    try {
      const updatedUser = await this.userService.updateUser(user);
      return updatedUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: number) {
    try {
      const deletedUser = await this.userService.deleteUser(userId);
      return deletedUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
