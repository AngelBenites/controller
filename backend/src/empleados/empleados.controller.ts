import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './entities/empleado.entity';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Get()
  findAll(): Promise<Empleado[]> {
    return this.empleadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Empleado> {
    return this.empleadosService.findOne(id);
  }

  @Post()
create(@Body() empleadoData: CreateEmpleadoDto): Promise<Empleado> {
  const empleadoToCreate: Partial<Empleado> = {
    ...empleadoData,
    fechaIngreso: empleadoData.fechaIngreso ? new Date(empleadoData.fechaIngreso) : undefined,
  };
  return this.empleadosService.create(empleadoToCreate);
}

@Put(':id')
update(@Param('id') id: string, @Body() updateData: UpdateEmpleadoDto): Promise<Empleado> {
  const empleadoToUpdate: Partial<Empleado> = {
    ...updateData,
    fechaIngreso: updateData.fechaIngreso ? new Date(updateData.fechaIngreso) : undefined,
  };
  return this.empleadosService.update(id, empleadoToUpdate);
}

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.empleadosService.remove(id);
  }
}
