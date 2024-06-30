import { FindOptionsWhere, Repository } from 'typeorm';
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
  async findOneByTitle(title: string) {
    let where: FindOptionsWhere<TodoEntity> = {};
    where['title'] = title;
    console.log(title);
    const todo = await this.todoRepository.find({
      where: { title },
    });
    console.log(todo);
    return todo;
  }
}
