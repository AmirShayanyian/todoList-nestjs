import { isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString({ message: 'Title should be the type of string.' })
  @IsNotEmpty()
  title: string;

  @IsString({ message: 'Description should be the type of string.' })
  description: string;

  @IsNotEmpty({ message: 'Priority cannot be empty.' })
  priority: priorityEnum;
}

type priorityEnum = 'High' | 'Medium' | 'Low';
