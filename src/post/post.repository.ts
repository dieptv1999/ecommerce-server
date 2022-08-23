import { DataSource, EntityRepository, Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostCreateDto } from './post-create.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostRepository extends Repository<Post> {
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }

  createPost(postCreateDto: PostCreateDto): Promise<Post> {
    const post = this.create();

    const { name, description, type, userId, background, avatar, content } =
      postCreateDto;

    post.name = name;
    post.userId = userId;
    post.avatar = avatar;
    post.background = background;
    post.description = description;
    post.type = type;
    post.content = content;

    try {
      return this.save(post);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
