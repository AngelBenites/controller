import { IsString, IsNotEmpty, Length, IsNumber, Min, Max, IsOptional, IsDateString } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @IsNotEmpty()
  @Length(8, 8, { message: 'El DNI debe tener exactamente 8 caracteres' })
  dni!: string;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido!: string;

  @IsString()
  @IsNotEmpty()
  cargo!: string;

  @IsNumber()
  @Min(0)
  salario!: number;

  @IsOptional()
  @IsDateString()
  fechaIngreso?: string;
}
