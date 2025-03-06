import { Injectable } from '@nestjs/common';
import { Category } from './category.model';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectConnection()
    private connection: Connection,
  ) {}

  findAll(): Category[] {
    return [];
  }

  create(body: Category): Category {
    return body;
  }
}
