import { getRepository } from "typeorm";
import Student from "../models/Student";

interface Request {
  id: string;
  name: string;
  email: string;
  ra: string;
  cpf: string;
}

class UpdateStudentService {
  public async execute({
    id,
    name,
    email,
    ra,
    cpf,
  }: Request): Promise<Student> {
    const studentRepository = getRepository(Student);

    const partialStudent = studentRepository.create({
      id,
      name,
      email,
      ra,
      cpf,
    });

    await studentRepository.update(id, partialStudent);

    const student = await studentRepository.findOneOrFail(id);

    return student;
  }
}

export default UpdateStudentService;
