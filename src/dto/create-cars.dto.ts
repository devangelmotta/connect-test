import { IsString, IsIn } from 'class-validator';
import { IsValidMake } from 'src/validators/car-validator';

const variantsCarsPermitted = ['Acura', 'BMW'];

export class CreateCarDto {
  @IsString()
  year: number;

  @IsIn(['Acura', 'BMW'])
  @IsValidMake()
  make: string;

  @IsString()
  model: string;

  @IsString()
  color: string;

  @IsString()
  plate: string;

  @IsString()
  vin: string;
}
