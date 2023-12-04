import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [];

  getAllUsers() {
    return this.users;
  }
}
