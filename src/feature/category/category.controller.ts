import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Post()
  async create(@Body() body: Category): Promise<Category> {
    return this.categoryService.create(body);
  }
}
