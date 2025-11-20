export type topicQuestionsDetails = {
    question: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    answer: string
}

export interface TopicInitVal {
    topicQuestions: topicQuestionsDetails[]
}

export interface AddQuestionIniValI {
    question: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    answer: string
}