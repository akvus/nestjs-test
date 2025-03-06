import { Injectable } from '@nestjs/common';
import { Category } from './category.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  create(body: Category): Promise<Category> {
    return this.categoryModel.create(body);
  }
}
