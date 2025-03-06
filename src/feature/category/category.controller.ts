import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Category[] {
    return this.categoryService.findAll();
  }

  @Post()
  create(@Body() body: Category): Category {
    return this.categoryService.create(body);
  }
}
