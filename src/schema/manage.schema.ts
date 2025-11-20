import { object, string } from "yup";

export const questionAnswerSchema = object({
    question: string().required(),
    option1: string().required("option A is required"),
    option2: string().required("option B is required"),
    option3: string().required("option C is required"),
    option4: string().required("option D is required"),
    answer: string().required()
})
