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
    if (empleadoData.fechaIngreso) {
      empleadoData.fechaIngreso = new Date(empleadoData.fechaIngreso);
    }
    // Convertimos a Partial<Empleado> para evitar error de tipo
    return this.empleadosService.create(empleadoData as unknown as Partial<Empleado>);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: UpdateEmpleadoDto): Promise<Empleado> {
    if (updateData.fechaIngreso) {
      updateData.fechaIngreso = new Date(updateData.fechaIngreso);
    }
    return this.empleadosService.update(id, updateData as unknown as Partial<Empleado>);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.empleadosService.remove(id);
  }
}
