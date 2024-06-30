import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  async create(createTodoDto: CreateTodoDto) {
    const todo = await this.todoService.create(createTodoDto);
    return todo;
  }

  @Get()
  find() {}

  @Get()
  findOne() {}

  @Put()
  updateOne() {}

  @Delete()
  remove() {}
}
