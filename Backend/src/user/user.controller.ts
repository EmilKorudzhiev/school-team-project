import {Controller, Get, NotFoundException, Param} from '@nestjs/common';
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
}