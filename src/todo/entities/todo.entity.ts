import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('todo')
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 ,default:'some title'})
  title: string;

  @Column('varchar', { length: 250,default:'some description' })
  description: string;

  @Column({ nullable: true ,default:'High'})
  priority: string;

  @CreateDateColumn()
  created_at: Date;
}
