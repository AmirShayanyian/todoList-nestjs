import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    @Post()
    create(){}

    @Get()
    find(){}

    @Get()
    findOne(){}

    @Put()
    updateOne(){}

    @Delete()
    remove(){}
}
