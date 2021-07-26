import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Company  extends Document {
  @Prop()
  firmaad: string;

  @Prop()
  mail: string;

  @Prop()
  parola: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);