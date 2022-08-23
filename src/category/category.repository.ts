import { EntityRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryCreateDto } from './category-create.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository extends Repository<Category> {
  createCategory(categoryCreateDto: CategoryCreateDto): Promise<Category> {
    const cate = this.create();

    const { name, description, thumbnail, userId, background } =
      categoryCreateDto;

    cate.name = name;
    cate.userId = userId;
    cate.background = background;
    cate.description = description;
    cate.thumbnail = thumbnail;

    try {
      return this.save(cate);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
