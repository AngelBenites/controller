
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('empleados')
export class Empleado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 8, unique: true })
  dni: string;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column()
  cargo: string;

  @Column('decimal', { precision: 10, scale: 2 })
  salario: number;

  @Column({ type: 'date', nullable: true })
  fechaIngreso?: Date;
}
