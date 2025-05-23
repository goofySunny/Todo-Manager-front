import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from './services/routeGuard/route-guard.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';
import { HttpInterceptorService } from './services/httpIntercepter/http-interceptor.service';
import { RegisterComponent } from './pages/register/register.component';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { ExpenseEditComponent } from './pages/expense-edit/expense-edit.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'todos/:username', component: TodoListComponent , canActivate:[AuthGuard]},
  {path: 'expenses/:username', component: ExpenseListComponent, canActivate:[AuthGuard]},
  { path: 'expenses/:username/:id', component: ExpenseEditComponent, canActivate:[AuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'todo/:id', component: TodoEditComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: '**', component: ErrorComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    TodoListComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoEditComponent,
    RegisterComponent,
    ExpenseListComponent,
    ExpenseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
