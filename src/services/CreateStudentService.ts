import { getRepository } from "typeorm";
import Student from "../models/Student";

interface Request {
  name: string;
  email: string;
  ra: string;
  cpf: string;
}

class CreateStudentService {
  public async execute({ name, email, ra, cpf }: Request): Promise<Student> {
    const studentRepository = getRepository(Student);

    const student = studentRepository.create({
      name,
      email,
      ra,
      cpf,
    });

    await studentRepository.save(student);

    return student;
  }
}

export default CreateStudentService;
