export = {
  type: 'postgres',
  host: 'ec2-52-204-157-26.compute-1.amazonaws.com',
  port: 5432,
  username: 'hqnyjhthpspyws',
  password: '10630681a2d37b38a4d0f188cc4e4bbd68839e918f8b4a2fb5c2fbe290e6acb1',
  database: 'd9moh8f5mputmb',
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: ['dist/src/database/migrations/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  entities: ['dist/**/*.entity.{ts,js}'],
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};

// export default typeormConfig;
