import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/todo.dto';
import { TodoService } from './todo.service';
import { title } from 'process';

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
  @Get('/by-title')
  async findOneByTitle(@Query() title: string) {
    console.log(title);
    console.log('sad');
    return await this.todoService.findOneByTitle(title);
  }
  @Get()
  findOne() {}

  @Put()
  updateOne() {}

  @Delete()
  remove() {}
}
