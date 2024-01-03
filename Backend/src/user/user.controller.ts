import { Controller, Get, NotFoundException, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    const user = this.userService.getUserById(userId);

    if (!user) {
      throw new NotFoundException(`User with id ${userId} not found`);
    }

    return user;
  }

  @Post('register')
  registerUser(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.registerUser(username, password);
  }

  @Post('login')
  loginUser(@Body('username') username: string, @Body('password') password: string) {
    return this.userService.loginUser(username, password);
  }
}
