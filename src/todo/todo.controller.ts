import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
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
  @Get('/by-title')
  async findOneByTitle(@Query() title: string) {
    console.log(title);
    console.log('sad');
    return await this.todoService.findOneByTitle(title);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.todoService.findOne(+id);
  }

  @Put(':id')
  updateOne(@Param('id')id:string,@Body() ) {}

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.todoService.deleteOne(+id);
  }
}
