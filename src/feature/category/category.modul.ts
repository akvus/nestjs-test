import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategoryScheme } from './category.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategoryScheme },
    ]),
  ],
  exports: [],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModul {}
