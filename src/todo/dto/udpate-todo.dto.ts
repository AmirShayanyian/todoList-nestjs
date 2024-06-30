import { IsString } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  title?: string;

  @IsString()
  description?: string;

  @IsString()
  priority?: string;
}
