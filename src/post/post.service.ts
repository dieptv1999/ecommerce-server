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
      relations: ['roles'],
    });
  }

  create(post: PostCreateDto): Promise<Post> {
    console.log(post);
    return this.postRepository.createPost(post);
  }

  hide(id: number): Promise<Post> {
    return this.postRepository.save({
      id,
    });
  }
}
