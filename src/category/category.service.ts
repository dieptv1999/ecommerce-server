import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { CategoryCreateDto } from './category-create.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  findOne(id: number): Promise<Category> {
    return this.categoryRepository.findOne({
      where: { id: id },
    });
  }

  find(params): Promise<[Category[], number]> {
    return this.categoryRepository.findAndCount({
      skip: params.start | 0,
      take: params.limit | 10,
    });
  }

  create(post: CategoryCreateDto): Promise<Category> {
    return this.categoryRepository.createCategory(post);
  }

  hide(id: number): Promise<Category> {
    return this.categoryRepository.save({
      id,
    });
  }

  ids(): Promise<[number[], number]> {
    return new Promise<[number[], number]>((resolve, reject: any) => {
      this.categoryRepository
        .findAndCount({ select: ['id'] })
        .then(([result, total]) => {
          resolve([result.map((r: Category) => r.id), total]);
        });
    });
  }
}
