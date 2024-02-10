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
import { RouteGuardService } from './services/routeGuard/route-guard.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodoEditComponent } from './pages/todo-edit/todo-edit.component';
import { TodoAddComponent } from './pages/todo-add/todo-add.component'



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home/:name', component: HomeComponent, canActivate:[RouteGuardService] },
  { path: 'todos', component: TodoListComponent , canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todo/:id', component: TodoEditComponent, canActivate: [RouteGuardService] },
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
    TodoAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
