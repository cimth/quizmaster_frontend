import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from '../../constants/web-requests';
import {PredefinedQuiz, PredefinedQuizWithResolvedQuestions} from '../../model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  /*======================================*
   * CONSTRUCTOR
   *======================================*/

  constructor(private httpClient: HttpClient) { }

  /*======================================*
   * CREATE PREDEFINED QUIZ
   *======================================*/

  /**
   * Adds the given predefined quiz to the backend.
   * Returns an Observable for this request which contains the created quiz.
   * <br/>
   * Needs the Admin Token from the backend console to work.
   *
   * @param quizName the name of the created quiz
   * @param adminToken the Admin Token from the backend console
   *
   * @return an Observable for the created question
   */
  addQuiz(quizName: string, adminToken: string): Observable<PredefinedQuiz> {

    // prepare request
    const url = URL.QUIZ_ENDPOINT;

    const body = {
      quizName: quizName
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': adminToken    // admin token from backend console
      })
    }

    // do request and return Observable
    return this.httpClient.post<PredefinedQuiz>(url, body, httpOptions);
  }

  /*======================================*
   * READ PREDEFINED QUIZZES
   *======================================*/

  /**
   * Requests a random quiz with the given question count from the server and returns an Observable for this request.
   * The optional array of already used question can be used for trying to avoid questions inside this quiz that were
   * already been asked in a previous quiz game in this session.
   *
   * @param questionCount the question count for the random quiz
   * @param alreadyUsedQuestions optional array of question ids that were already used in this session
   */
  public getRandomQuiz(questionCount: number, alreadyUsedQuestions: number[] = []): Observable<number[]> {

    // prepare request
    const url = `${URL.QUIZ_ENDPOINT}/random`;

    const body = {
      questionCount: questionCount,
      alreadyUsedQuestions: alreadyUsedQuestions
    }

    // do request and return Observable
    return this.httpClient.post<number[]>(url, body);
  }

  /**
   * Requests all predefined quizzes from the server and returns an Observable for this request.
   */
  public getAllPredefinedQuizzes(): Observable<PredefinedQuiz[]> {
    const url = `${URL.QUIZ_ENDPOINT}/predefined`;
    return this.httpClient.get<PredefinedQuiz[]>(url);
  }

  /**
   * Requests the question ids of the predefined quiz given by its id from the server and returns an Observable
   * for this request.
   *
   * @param quizId the id of the predefined quiz
   */
  public getQuestionIdsOfPredefinedQuiz(quizId: number): Observable<number[]> {
    const url = `${URL.QUIZ_ENDPOINT}/${quizId}`;
    return this.httpClient.get<number[]>(url);
  }

  /*======================================*
   * UPDATE PREDEFINED QUIZ
   *======================================*/

  /**
   * Saves the given predefined quiz at the backend.
   * Returns an Observable for the success message.
   * <br/>
   * Needs the Admin Token from the backend console to work.
   *
   * @param quiz the updated quiz
   * @param adminToken the Admin Token from the backend console
   *
   * @return an Observable for the success message
   */
  saveUpdatedQuiz(quiz: PredefinedQuizWithResolvedQuestions, adminToken: string): Observable<string> {

    // prepare request
    const url = `${URL.QUIZ_ENDPOINT}/${quiz.quizId}`;

    const questionIds = [];
    quiz.resolvedQuestions.forEach(q => {
      questionIds.push(q.id);
    });

    const body = {
      quizName: quiz.quizName,
      quizQuestions: questionIds
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': adminToken       // admin token from backend console
      }),
      responseType: 'text' as const       // necessary for processing the response correctly
    }

    // do request and return Observable
    return this.httpClient.put(url, body, httpOptions);
  }

  /*======================================*
   * DELETE PREDEFINED QUIZ
   *======================================*/

  /**
   * Deletes the predefined quiz given by its id.
   * Returns an Observable for the success message.
   * <br/>
   * Needs the Admin Token from the backend console to work.
   *
   * @param quizId the id of the predefined quiz to be deleted
   * @param adminToken the Admin Token from the backend console
   *
   * @return an Observable for the success message
   */
  public deletePredefinedQuiz(quizId: number, adminToken: string) {

    // prepare request
    const url = `${URL.QUIZ_ENDPOINT}/${quizId}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': adminToken  // admin token from backend console
      }),
      responseType: 'text' as const  // necessary for processing the response correctly
    }

    // do request and return Observable
    return this.httpClient.delete(url, httpOptions);
  }
}
