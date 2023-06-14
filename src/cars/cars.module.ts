import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car, CarSchema } from 'src/models/car.model';

@Module({
  providers: [CarsService],
  controllers: [CarsController],
  imports: [
    MongooseModule.forFeature([
      { name: Car.name, schema: CarSchema, collection: 'cars' },
    ]),
  ],
})
export class CarsModule {}
