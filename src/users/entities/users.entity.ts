import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') //this shit is name of database tables for users
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ad: string;

  @Column()
  soyad: string;

  @Column()
  mail: string;

  @Column()
  parola: string;

  @Column()
  telefon: string;

  @Column()
  okul: string;

  @Column()
  bolum: string;

  @Column()
  sehir: string;
  
  @Column()
  cv: string;
}
