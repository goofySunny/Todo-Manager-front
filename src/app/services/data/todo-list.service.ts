import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoListData } from 'src/app/pages/todo-list/todo-list.component';



@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  public retrieveAllTodos(username: string) {
    return this.http.get<TodoListData[]>(`http://localhost:8080/users/${username}/todos`);
  }

  public deleteTodo(id: number, username: string) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  public retrieveTodo(username:string, id: number) {
    return this.http.get<TodoListData>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  public updateTodo(username: string, id: number, todo: TodoListData) {
    return this.http.put<TodoListData>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  public saveTodo(username: string, todo: TodoListData) {
    return this.http.post<TodoListData>(`http://localhost:8080/users/${username}/todos`, todo);
  }

}
