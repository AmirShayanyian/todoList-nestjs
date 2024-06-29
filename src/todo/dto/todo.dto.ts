export class CreateTodoDto {
  title: string;
  description: string;
  priority: priorityEnum;
}

type priorityEnum = 'High' | 'Medium' | 'Low';
