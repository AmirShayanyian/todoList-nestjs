import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class TodoRepository extends Repository<TodoEntity> {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>
  ) {
    super(
      todoRepository.target,
      todoRepository.manager,
      todoRepository.queryRunner
    );
  }
}
