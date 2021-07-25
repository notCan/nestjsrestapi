import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Users extends Document {
  @Prop()
  ad: string;

  @Prop()
  soyad: string;

  @Prop()
  mail: string;

  @Prop()
  parola: string;

  @Prop()
  telefon: string;

  @Prop()
  okul: string;

  @Prop()
  bolum: string;

  @Prop()
  sehir: string;

  @Prop()
  cv: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
