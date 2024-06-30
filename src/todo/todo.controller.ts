import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  async create(@Body(new ValidationPipe()) createTodoDto: CreateTodoDto) {
    const { title, description, priority } = createTodoDto;
    const todo = await this.todoService.create({
      title,
      description,
      priority,
    });
    return todo;
  }

  @Get()
  async find() {
    return await this.todoService.find();
  }

  @Get()
  findOne() {}

  @Put()
  updateOne() {}

  @Delete()
  remove() {}
}
