import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesController } from './courses.controller';
import { courseProviders } from './courses.providers';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';
import { Tag } from './entities/tag.entity';

@Module({
    imports:[DatabaseModule],
    controllers: [CoursesController],
    providers:[
        ...courseProviders,
        CoursesService]
})
export class CoursesModule {}
