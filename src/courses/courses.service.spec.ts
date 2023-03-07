import { NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';




describe('CoursesService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService()
    id = '16191206-ab36-4937-b52b-14a348216751'
    date = new Date()
  })

    it('should be defined', () => {	 
        expect(service).toBeDefined();
    });

    ////////////////////////////////////////////////////
    it('should creates a course',async () => {	 
        const expectOutPutTags = [{
            id,
            name:'java',
            created_at: date,
        }]

        const expectOutPutCourse = {
            id,
            name: 'teste',
            description: 'Test description',
            created_at: date,
            tags: expectOutPutTags
        }

        const mockCourseRepository = {
            create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
            save: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
        }

        const mockTagRepository = {
            create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutTags)),
            findOne: jest.fn()
        }

        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository
        //@ts-expect-error defined part of methods
        service['tagRepository'] = mockTagRepository

        const createCourseDto: CreateCourseDto = {
            name: 'teste',
            description: 'Test description',
            tags:['java']
        }
        const newCourse = await service.create(createCourseDto)
        expect(mockCourseRepository.save).toHaveBeenCalled();
        expect(expectOutPutCourse).toStrictEqual(newCourse);

    });

////////////////////////////////////////////////////////////////////////////
    it('should list course',async () => {	 
        const expectOutPutTags = [{
            id,
            name:'java',
            created_at: date,
        }]

        const expectOutPutCourse = [{
            id,
            name: 'teste',
            description: 'Test description',
            created_at: date,
            tags: expectOutPutTags
        }]

        const mockCourseRepository = {
            findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
            find: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
        }

        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository
        
        const courses = await service.findAll()
        expect(mockCourseRepository.find).toHaveBeenCalled();
        expect(expectOutPutCourse).toStrictEqual(courses);

    });

    ////////////////////////////////////////////////////////////////////////////
    it('should gets a course',async () => {	 
        const expectOutPutTags = [{
            id,
            name:'java',
            created_at: date,
        }]

        const expectOutPutCourse = [{
            id,
            name: 'teste',
            description: 'Test description',
            created_at: date,
            tags: expectOutPutTags
        }]

        const mockCourseRepository = {
            findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
            
        }

        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository
        
        const course = await service.findOne(id)
        expect(mockCourseRepository.findOne).toHaveBeenCalled();
        expect(expectOutPutCourse).toStrictEqual(course);

    });

    /////////////////////////////////////////////////////////////
    it('should update a course',async () => {	 
        const expectOutPutTags = [{
            id,
            name:'java',
            created_at: date,
        }]

        const expectOutPutCourse = {
            id,
            name: 'teste',
            description: 'Test description',
            created_at: date,
            tags: expectOutPutTags
        }

        const mockCourseRepository = {
            updatee: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
            save: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
            preload: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
        }

        const mockTagRepository = {
            create: jest.fn().mockReturnValue(Promise.resolve(expectOutPutTags)),
            findOne: jest.fn()
        }

        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository
        //@ts-expect-error defined part of methods
        service['tagRepository'] = mockTagRepository

        const updateCourseDto: UpdateCourseDto = {
            name: 'teste',
            description: 'Test description',
            tags:['java']
        }
        const course = await service.update(id, updateCourseDto)
        expect(mockCourseRepository.save).toHaveBeenCalled();
        expect(expectOutPutCourse).toStrictEqual(course);

    });

    ////////////////////////////////////////////////////////////////////////////
    it('should remove a course',async () => {	 
        const expectOutPutTags = [{
            id,
            name:'java',
            created_at: date,
        }]

        const expectOutPutCourse = [{
            id,
            name: 'teste',
            description: 'Test description',
            created_at: date,
            tags: expectOutPutTags
        }]

        const mockCourseRepository = {
            findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
            remove: jest.fn().mockReturnValue(Promise.resolve(expectOutPutCourse)),
        }

        //@ts-expect-error defined part of methods
        service['courseRepository'] = mockCourseRepository
        
        const course = await service.remove(id)
        expect(mockCourseRepository.remove).toHaveBeenCalled();
        expect(expectOutPutCourse).toStrictEqual(course);

    });









//     describe('findOne', () => {	 
//         describe('buscar curso pelo id', () =>{
//             it('deve retornar o objeto Course', async () => {	 
//                 const courseId = '1'
//                 const expectCourse = {}

//                 courseRepository.findOne.mockReturnValue(expectCourse)
//                 const course = await service.findOne(courseId)
//                 expect(course).toEqual(expectCourse)
//             });
//             it('deve retornar un NotFoundException', async () => {	 
//                 const courseId = '1'
                
//                 courseRepository.findOne.mockReturnValue(undefined)
//                 try {
//                     const course = await service.findOne(courseId)
                
//                 } catch (error) {
//                     expect(error).toBeInstanceOf(NotFoundException)
//                     expect(error.message).toEqual(`Course ID ${courseId} not found`)
//                 }
//             });
//         });
//     });
 });