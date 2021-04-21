/**
 * The MESSAGE_ID values for accessing the localized messages in the messages.<locale>.ts files in an unified way.
 * <br />
 * As an example, the value MESSAGE_ID.BUTTONS.PLAY_QUIZ should include exactly the name of the exported value of the
 * BUTTONS.PLAY_QUIZ attribute in the messages.<locale>.ts file.
 */
export const MESSAGE_ID = {
  BUTTONS: {
    // start
    PLAY_QUIZ: 'BUTTONS.PLAY_QUIZ',
    MANAGE_PREDEFINED_QUIZZES: 'BUTTONS.MANAGE_PREDEFINED_QUIZZES',
    MANAGE_QUESTIONS: 'BUTTONS.MANAGE_QUESTIONS'
  },

  ERRORS: {
    NOT_EMPTY_ALL: 'ERRORS.NOT_EMPTY_ALL',
    ADMIN_TOKEN: 'ERRORS.ADMIN_TOKEN'
  },

  HEADERS: {
    // questions
    EDIT_QUESTION: 'HEADERS.EDIT_QUESTION',
    DELETE_QUESTION: 'HEADERS.DELETE_QUESTION',
    ADD_QUESTION: 'HEADERS.ADD_QUESTION',
    MANAGE_QUESTIONS: 'HEADERS.MANAGE_QUESTIONS',

    // predefined quizzes
    EDIT_QUIZ: 'HEADERS.EDIT_QUIZ',
    DELETE_QUIZ: 'HEADERS.DELETE_QUIZ',
    MANAGE_PREDEFINED_QUIZZES: 'HEADERS.MANAGE_PREDEFINED_QUIZZES'
  },

  ATTRIBUTE_NAMES: {
    // common
    ID: 'ATTRIBUTE_NAMES.ID',

    // questions
    QUESTION_TEXT: 'ATTRIBUTE_NAMES.QUESTION_TEXT',
    CORRECT_ANSWER: 'ATTRIBUTE_NAMES.CORRECT_ANSWER',
    WRONG_ANSWER_1: 'ATTRIBUTE_NAMES.WRONG_ANSWER_1',
    WRONG_ANSWER_2: 'ATTRIBUTE_NAMES.WRONG_ANSWER_2',
    WRONG_ANSWER_3: 'ATTRIBUTE_NAMES.WRONG_ANSWER_3',
    ADMIN_TOKEN: 'ATTRIBUTE_NAMES.ADMIN_TOKEN',

    // predefined quizzes
    QUIZ_NAME: 'ATTRIBUTE_NAMES.QUIZ_NAME',
    QUESTION_COUNT: 'ATTRIBUTE_NAMES.QUESTION_COUNT',
    QUESTIONS: 'ATTRIBUTE_NAMES.QUESTIONS'
  },

  ACTION_LABELS: {
    ACTIONS: 'ACTION_LABELS.ACTIONS',
    EDIT: 'ACTION_LABELS.EDIT',
    DELETE: 'ACTION_LABELS.DELETE',
    CANCEL: 'ACTION_LABELS.CANCEL',
    SAVE: 'ACTION_LABELS.SAVE',
    SHOW_ANSWERS: 'ACTION_LABELS.SHOW_ANSWERS',
    HIDE_ANSWERS: 'ACTION_LABELS.HIDE_ANSWERS',
    EDIT_ANSWERS: 'ACTION_LABELS.EDIT_ANSWERS',
    NO_EDIT_ANSWERS: 'ACTION_LABELS.NO_EDIT_ANSWERS',
    ADD_QUESTION: 'ACTION_LABELS.ADD_QUESTION',
    ADD_PREDEFINED_QUIZ: 'ACTION_LABELS.ADD_PREDEFINED_QUIZ',
    REMOVE: 'ACTION_LABELS.REMOVE'
  },

  CONFIRMATION: {
    DELETE_QUESTION: 'CONFIRMATION.DELETE_QUESTION',
    DELETE_QUIZ: 'CONFIRMATION.DELETE_QUIZ'
  },

  SUCCESS: {
    QUESTION_CREATED: 'SUCCESS.QUESTION_CREATED'
  }
}
