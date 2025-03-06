import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(@Req() request: Request): Promise<Category[]> {
    console.log(request.url);
    return this.categoryService.findAll();
  }

  @Post()
  async create(@Body() body: Category): Promise<Category> {
    return this.categoryService.create(body);
  }
}
