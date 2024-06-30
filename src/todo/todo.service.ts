import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodoRepository } from './entities/todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}
  async create(createTodoDto: CreateTodoDto) {
    const { title, description, priority } = createTodoDto;
    const todo = this.todoRepository.create({ title, description, priority });
    await this.todoRepository.save(todo);
    return todo;
  }

  async find(){
    return await this.todoRepository.find();
  }
}
