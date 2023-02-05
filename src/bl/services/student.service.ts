import axios from "axios";
import { IStudent } from "../../models/student.model";

export const addStudent = async (
  student: IStudent
): Promise<IStudent | undefined> => {
  try {
    let response = await axios.post(
      "http://localhost:3001/api/student",
      student
    );

    if (response.status === 200 && response.data) {
      return response.data as IStudent;
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const getStudents = async (): Promise<IStudent[] | undefined> => {
  try {
    let response = await axios.get("http://localhost:3001/api/student");

    if (response.status === 200 && response.data) {
      return response.data as IStudent[];
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

interface IStudentService {
  addStudent: (student: IStudent) => Promise<IStudent | undefined>;
  getStudents: () => Promise<IStudent[] | undefined>;
}

export const StudentService = {
  addStudent: addStudent,
  getStudents: getStudents,
} as IStudentService;
