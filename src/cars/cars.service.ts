import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from 'src/models/car.model';
import { GetAllCarsDto } from 'src/dto/get-cars.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectModel(Car.name) private readonly carModel: Model<CarDocument>,
  ) {}

  async createCar(payload: Partial<Car>): Promise<Car> {
    const car = new this.carModel(payload);
    const newCar = await car.save();

    return newCar;
  }

  async getAllCars(): Promise<Car[]> {
    const cars = await this.carModel.find().exec();

    return cars;
  }
}
