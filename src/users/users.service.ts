import { Injectable, NotFoundException } from '@nestjs/common';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      ad: 'can',
      soyad: 'deve',
      mail: 'devecann@gmail.com',
      telefon: '5368259986',
      parola: 'parola123',
      okul: 'Süleyman Demirel Üniversitesi',
      bolum: 'Bilgisayar Mühendisliği',
      sehir: 'ISPARTA',
      cv: './documents/cv.pdf',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === +id);
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  create(createUserDTO: any) {
    this.users.push(createUserDTO);
  }

  update(id: number, updateUserDTO: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
    }
  }

  remove(id: number) {
    const userIndex = this.users.findIndex((item) => item.id === +id);
    if (userIndex >= 0) {
      this.users.splice(userIndex, 1);
    }
  }
}
