import { getRepository } from "typeorm";
import Student from "../models/Student";
import AppError from "../errors/AppError";

class FindStudentService {
  public async execute(id: string): Promise<Student> {
    const studentRepository = getRepository(Student);

    const student = await studentRepository.findOne({
      where: { id },
    });

    if (!student) {
      throw new AppError("Não há aluno matriculado com esse ID.");
    }

    return student;
  }
}

export default FindStudentService;
