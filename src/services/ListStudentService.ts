import { getRepository } from "typeorm";
import Student from "../models/Student";
import AppError from "../errors/AppError";

class ListStudentService {
  public async execute(): Promise<Student[]> {
    const studentRepository = getRepository(Student);

    const students = await studentRepository.find();

    if (!students || students.length < 1) {
      throw new AppError("Não há alunos matriculados!");
    }

    return students;
  }
}

export default ListStudentService;
