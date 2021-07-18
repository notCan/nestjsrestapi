import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly ad: string;

  @IsString()
  readonly soyad: string;

  @IsString()
  readonly mail: string;

  @IsString()
  readonly parola: string;

//   @IsString()
//   readonly telefon: string;

//   @IsString()
//   readonly okul: string;

//   @IsString()
//   readonly bolum: string;

//   @IsString()
//   readonly sehir: string;

//   @IsString()
//   readonly cv: string;
}
