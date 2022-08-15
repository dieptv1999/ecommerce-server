import { Module } from '@nestjs/common';
import * as Redis from 'redis';

import { REDIS } from './redis.constants';

@Module({
  providers: [
    {
      provide: REDIS,
      useFactory: async () => {
        const client = Redis.createClient({
          url: 'redis://default:yvrV6y8XqwG5TfaAnn4Lj5QXoNsWKN9D@redis-11240.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:11240',
          legacyMode: true,
        });
        await client.connect();
        return client;
      },
    },
  ],
  exports: [REDIS],
})
export class RedisModule {}
