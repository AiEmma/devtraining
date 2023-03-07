import { DataSource } from 'typeorm';
import { CreateCoursesTable1678156001076 } from './migrations/1678156001076-CreateCoursesTable';
import { CreateTagsTable1678156483842 } from './migrations/1678156483842-CreateTagsTable';
import { CreateCoursesTagsTable1678157565327 } from './migrations/1678157565327-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1678158514246 } from './migrations/1678158514246-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1678158658639 } from './migrations/1678158658639-AddTagsIdToCoursesTagsTable';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'postgres',
        entities: [__dirname + '/../**/*.entity.js'],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    CreateCoursesTable1678156001076,
    CreateTagsTable1678156483842,
    CreateCoursesTagsTable1678157565327,
    AddCoursesIdToCoursesTagsTable1678158514246,
    AddTagsIdToCoursesTagsTable1678158658639
  ]
})