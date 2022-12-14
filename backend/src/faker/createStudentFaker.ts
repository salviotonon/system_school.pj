import {faker} from '@faker-js/faker';
import { StudentRepository } from '../modules/student/repository/StudentRepository';

export async function createStudentFaker(gang:string){
  
  const studentFaker = new StudentRepository();

  for (let i = 0; i < 30; i++) {
    const createStudentFaker = await studentFaker.createStudent({
      name: faker.internet.userName(),
      gang,
      email: faker.internet.email(),
      phone: faker.phone.number(),
      father: faker.internet.userName(),
    });
    console.log(createStudentFaker);
  }
}