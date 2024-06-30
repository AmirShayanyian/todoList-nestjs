import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodoRepository } from './entities/todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}
  async create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);
    await this.todoRepository.save(todo);
    return todo;
  }
}
