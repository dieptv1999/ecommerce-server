import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { Post } from './post.entity';
import { PostCreateDto } from './post-create.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository,
  ) {}

  findOne(id: number): Promise<Post> {
    return this.postRepository.findOne({
      where: { id: id },
    });
  }

  find(params): Promise<[Post[], number]> {
    return this.postRepository.findAndCount({
      skip: params.start | 0,
      take: params.limit | 10,
    });
  }

  create(post: PostCreateDto): Promise<Post> {
    return this.postRepository.createPost(post);
  }

  hide(id: number): Promise<Post> {
    return this.postRepository.save({
      id,
    });
  }

  ids(): Promise<[number[], number]> {
    return new Promise<[number[], number]>((resolve, reject: any) => {
      this.postRepository
        .findAndCount({ select: ['id'] })
        .then(([result, total]) => {
          resolve([result.map((r: Post) => r.id), total]);
        });
    });
  }
}
