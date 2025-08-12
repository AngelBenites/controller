import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  findAll(): Promise<Empleado[]> {
    return this.empleadoRepository.find();
  }

  async findOne(id: string): Promise<Empleado> {
    const empleado = await this.empleadoRepository.findOneBy({ id });
    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
    return empleado;
  }

  create(empleadoData: Partial<Empleado>): Promise<Empleado> {
    const empleado = this.empleadoRepository.create(empleadoData);
    return this.empleadoRepository.save(empleado);
  }

  async update(id: string, updateData: Partial<Empleado>): Promise<Empleado> {
    const empleado = await this.findOne(id);
    Object.assign(empleado, updateData);
    return this.empleadoRepository.save(empleado);
  }

  async remove(id: string): Promise<void> {
    const result = await this.empleadoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
  }
}
