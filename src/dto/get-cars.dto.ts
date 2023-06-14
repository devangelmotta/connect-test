import { IsString, IsNumber } from 'class-validator';

export class GetAllCarsDto {
  @IsNumber()
  year?: number;

  @IsString()
  make?: string;

  @IsString()
  model?: string;

  @IsString()
  color?: string;

  @IsString()
  plate?: string;

  @IsString()
  vin?: string;
}
