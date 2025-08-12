import { IsString, IsInt, Min, Max, IsDateString, IsNumber, Min as MinNumber } from 'class-validator';

export class CreatePlanillaDto {
  @IsString()
  empleadoId: string;

  @IsInt()
  @Min(1)
  @Max(12)
  mes: number;

  @IsInt()
  año: number;

  @IsNumber()
  @MinNumber(0)
  sueldoBruto: number;

  @IsNumber()
  @MinNumber(0)
  descuentos: number;

  @IsNumber()
  @MinNumber(0)
  aportes: number;

  @IsNumber()
  @MinNumber(0)
  sueldoNeto: number;

  @IsDateString()
  fechaPago: string;
}
