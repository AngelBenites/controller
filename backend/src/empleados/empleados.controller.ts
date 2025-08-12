import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { Empleado } from './entities/empleado.entity';

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

  import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

@Post()
create(@Body() empleadoData: CreateEmpleadoDto): Promise<Empleado> {
  return this.empleadosService.create(empleadoData);
}

@Put(':id')
update(@Param('id') id: string, @Body() updateData: UpdateEmpleadoDto): Promise<Empleado> {
  return this.empleadosService.update(id, updateData);
}

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.empleadosService.remove(id);
  }
}
