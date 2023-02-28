import { PartialType } from "@nestjs/mapped-types";// lib instalada a parte
import { CreateCourseDto } from "./create-course.dto";

export class UpdateCourseDto extends PartialType(CreateCourseDto){}

//PartialType é para não ter que repetir o CreateCourseDto e que os dados sao opcionais