import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Planilla {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  empleadoId: string;

  @Column()
  mes: number;

  @Column()
  año: number;

  @Column('decimal', { precision: 10, scale: 2 })
  sueldoBruto: number;

  @Column('decimal', { precision: 10, scale: 2 })
  descuentos: number;

  @Column('decimal', { precision: 10, scale: 2 })
  aportes: number;

  @Column('decimal', { precision: 10, scale: 2 })
  sueldoNeto: number;

  @Column({ type: 'date' })
  fechaPago: Date;
}
