import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PlanillasService } from './planillas.service';
import { Planilla } from './entities/planilla.entity';
import { CreatePlanillaDto } from './dto/create-planilla.dto';
import { UpdatePlanillaDto } from './dto/update-planilla.dto';

@Controller('planillas')
export class PlanillasController {
  constructor(private readonly planillasService: PlanillasService) {}

  @Get()
  findAll(): Promise<Planilla[]> {
    return this.planillasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Planilla> {
    return this.planillasService.findOne(id);
  }

  @Post()
  create(@Body() createPlanillaDto: CreatePlanillaDto): Promise<Planilla> {
    return this.planillasService.create(createPlanillaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlanillaDto: UpdatePlanillaDto): Promise<Planilla> {
    return this.planillasService.update(id, updatePlanillaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.planillasService.remove(id);
  }
}

