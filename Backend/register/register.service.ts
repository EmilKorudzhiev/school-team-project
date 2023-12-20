// user/register/register.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { RegisterDto } from './register.dto';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async register(userDto: RegisterDto): Promise<void> {
    const { username, password, email, dateOfBirth } = userDto;

    const existingUser = await this.userRepository.findOne({
      where: [{ username }, { email }],
    });

    if (existingUser) {
      throw new BadRequestException('Username or email already in use');
    }

    const newUser = this.userRepository.create({
      username,
      password, // You should hash the password before saving it (use bcrypt, for example)
      email,
      dateOfBirth,
    });

    await this.userRepository.save(newUser);
  }
}
