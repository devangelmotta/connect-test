// restaurant.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongoose } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  year: number;

  @Prop()
  make: string;

  @Prop()
  model: string;

  @Prop()
  color: string;

  @Prop()
  plate: string;

  @Prop()
  vin: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
