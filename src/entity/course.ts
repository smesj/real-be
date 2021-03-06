import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';
import { CourseSection } from "./course-section";
import { CourseSession } from './course-session';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => CourseSection, section => section.course)
    courseSections: CourseSection[];

    @OneToMany(() => CourseSession, session => session.course)
    courseSessions: CourseSession[];
}