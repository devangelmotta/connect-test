import { Controller, Body, Post, Get } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from 'src/dto/create-cars.dto';
import { Car } from 'src/models/car.model';
import { IsValidMakeConstraint } from 'src/validators/car-validator';

@Controller('cars')
export class CarsController {
  constructor(private readonly carService: CarsService) {}

  @Post()
  async createCar(@Body() createCarDto: CreateCarDto): Promise<Car> {
    // Verificar la validación personalizada del campo "make"
    const isValidMake = new IsValidMakeConstraint().validate(createCarDto.make);
    if (!isValidMake)
      throw new Error('El valor proporcionado para "make" no está permitido.');

    const newCar = await this.carService.createCar(createCarDto);
    return newCar;
  }

  @Get()
  async getAllCars(): Promise<Car[]> {
    return this.carService.getAllCars();
  }
}
