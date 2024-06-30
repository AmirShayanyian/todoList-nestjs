import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  title: string;

  @Column('varchar', { length: 250 })
  description: string;

  @Column({ nullable: true })
  priority: string;

  @CreateDateColumn()
  created_at: Date;
}
