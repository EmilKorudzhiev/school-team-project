import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },

  ];

  getAllUsers() {
    return this.users.map(({ id, username }) => ({ id, username }));
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return { id: user.id, username: user.username };
  }

  registerUser(username: string, password: string) {
    const existingUser = this.users.find((user) => user.username === username);

    if (existingUser) {
      throw new ConflictException(`Username ${username} already exists`);
    }

    const newUser = {
      id: this.users.length + 1,
      username,
      password,
    };

    this.users.push(newUser);

    return { id: newUser.id, username: newUser.username };
  }

  loginUser(username: string, password: string) {
    const user = this.users.find((u) => u.username === username && u.password === password);

    if (!user) {
      throw new NotFoundException('Invalid username or password');
    }

    return { id: user.id, username: user.username };
  }
}
