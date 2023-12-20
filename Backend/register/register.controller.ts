// user/register/register.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from './register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async register(@Body() userDto: RegisterDto): Promise<void> {
    await this.registerService.register(userDto);
  }
}
