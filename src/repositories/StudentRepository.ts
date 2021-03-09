import { EntityRepository, Repository } from "typeorm";
import Student from "../models/Student";

@EntityRepository(Student)
class StudentRepository extends Repository<Student> {
  findByEmail(email: string): Promise<Student | undefined> {
    return this.findOne({
      where: { email },
    });
  }

  findByRA(ra: string): Promise<Student | undefined> {
    return this.findOne({
      where: { ra },
    });
  }
}

export default StudentRepository;
