import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 4942,
      username: 'root',
      password: '',
      database: 'todoapp',
      autoLoadEntities: true,
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
