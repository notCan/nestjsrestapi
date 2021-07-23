import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  create(createUserDTO: CreateUserDto) {
    const user = this.usersRepository.create(createUserDTO);
    return this.usersRepository.save(user);
  }

  async update(id: number, updateUserDTO: UpdateUserDto) {
    const user = await this.usersRepository.preload({
      id: +id,
      ...updateUserDTO,
    });
    if (!user) {
      throw new NotFoundException(`User ${id} not found dude`);
    }
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.usersRepository.remove(user);
  }
}
