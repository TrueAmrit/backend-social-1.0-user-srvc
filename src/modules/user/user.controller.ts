import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from 'src/submodules/backend-social-1.0-dtos/src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: UserDto) {
    try {
      // let createUser = await this.userService.createUser(user);
      console.log('hello', user);
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
