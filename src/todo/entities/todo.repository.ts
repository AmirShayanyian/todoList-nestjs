import { Equal, FindOptionsWhere, Repository } from 'typeorm';
import { TodoEntity } from './create-todo.entity';
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
  async findOneByTitle(title: string) {
    let where: FindOptionsWhere<TodoEntity> = {};
    where['title'] = Equal(title);
    const todo = await this.todoRepository.find({
      where,
    });
    console.log(todo);
    return todo;
  }
}
