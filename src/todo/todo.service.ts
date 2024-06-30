import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoRepository } from './entities/todo.repository';
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}
  async create(createTodoDto: CreateTodoDto) {
    const { title, description, priority } = createTodoDto;
    const todo = this.todoRepository.create({ title, description, priority });
    await this.todoRepository.save(todo);
    return todo;
  }

  async find() {
    return await this.todoRepository.find();
  }
  async findOneByTitle(title: string) {
    return await this.todoRepository.findOneByTitle(title);
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findOneBy({ id });
    if (todo) return todo;
    throw new Error('Todo not found');
  }
  async deleteOne(id: number) {
    return await this.todoRepository.delete({ id });
  }
}
