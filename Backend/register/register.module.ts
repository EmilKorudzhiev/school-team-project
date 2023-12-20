// user/register/register.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [RegisterService],
  controllers: [RegisterController],
})
export class RegisterModule {}
