import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Planilla } from './entities/planilla.entity';
import { CreatePlanillaDto } from './dto/create-planilla.dto';
import { UpdatePlanillaDto } from './dto/update-planilla.dto';

@Injectable()
export class PlanillasService {
  constructor(
    @InjectRepository(Planilla)
    private readonly planillaRepository: Repository<Planilla>,
  ) {}

  findAll(): Promise<Planilla[]> {
    return this.planillaRepository.find();
  }

  async findOne(id: string): Promise<Planilla> {
    const planilla = await this.planillaRepository.findOneBy({ id });
    if (!planilla) {
      throw new NotFoundException(`Planilla con id ${id} no encontrada`);
    }
    return planilla;
  }

  create(createPlanillaDto: CreatePlanillaDto): Promise<Planilla> {
    const planilla = this.planillaRepository.create(createPlanillaDto);
    return this.planillaRepository.save(planilla);
  }

  async update(id: string, updatePlanillaDto: UpdatePlanillaDto): Promise<Planilla> {
    const planilla = await this.findOne(id);
    Object.assign(planilla, updatePlanillaDto);
    return this.planillaRepository.save(planilla);
  }

  async remove(id: string): Promise<void> {
    const result = await this.planillaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Planilla con id ${id} no encontrada`);
    }
  }
}
