import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModul } from './feature/category/category.modul';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    CategoryModul,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
