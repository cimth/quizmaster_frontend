import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {StartComponent} from './pages/start/start.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ManageQuestionsComponent} from './pages/manage-questions/manage-questions.component';
import {EditQuestionComponent} from './pages/manage-questions/edit-question/edit-question.component';
import {FormsModule} from '@angular/forms';
import {DeleteQuestionComponent} from './pages/manage-questions/delete-question/delete-question.component';
import {AddQuestionComponent} from './pages/manage-questions/add-question/add-question.component';
import {ManagePredefinedQuizzesComponent} from './pages/manage-predefined-quizzes/manage-predefined-quizzes.component';
import {DeletePredefinedQuizComponent} from './pages/manage-predefined-quizzes/delete-predefined-quiz/delete-predefined-quiz.component';
import {EditPredefinedQuizComponent} from './pages/manage-predefined-quizzes/edit-predefined-quiz/edit-predefined-quiz.component';
import {AddPredefinedQuizComponent} from './pages/manage-predefined-quizzes/add-predefined-quiz/add-predefined-quiz.component';
import {SelectQuizFormatComponent} from './pages/select-quiz-format/select-quiz-format.component';
import {SelectPredefinedQuizComponent} from './pages/select-quiz-format/select-predefined-quiz/select-predefined-quiz.component';
import {SelectRandomQuizComponent} from './pages/select-quiz-format/select-random-quiz/select-random-quiz.component';
import {PlayQuizComponent} from './pages/play-quiz/play-quiz.component';
import {FinishQuizComponent} from './pages/play-quiz/finish-quiz/finish-quiz.component';
import {BackendNotReachableComponent} from './pages/backend-not-reachable/backend-not-reachable.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ManageQuestionsComponent,
    EditQuestionComponent,
    DeleteQuestionComponent,
    AddQuestionComponent,
    ManagePredefinedQuizzesComponent,
    DeletePredefinedQuizComponent,
    EditPredefinedQuizComponent,
    AddPredefinedQuizComponent,
    SelectQuizFormatComponent,
    SelectPredefinedQuizComponent,
    SelectRandomQuizComponent,
    PlayQuizComponent,
    FinishQuizComponent,
    BackendNotReachableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
