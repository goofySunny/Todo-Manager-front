import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { TodoListData } from 'src/app/shared/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  public retrieveAllTodos(username: string) {
    return this.http.get<TodoListData[]>(`${API_URL}/users/${username}/todos`);
  }

  public deleteTodo(id: number, username: string) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  public retrieveTodo(username:string, id: number) {
    return this.http.get<TodoListData>(`${API_URL}/users/${username}/todos/${id}`);
  }

  public updateTodo(username: string, id: number, todo: TodoListData) {
    return this.http.put<TodoListData>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  public saveTodo(username: string, todo: TodoListData) {
    return this.http.post<TodoListData>(`${API_URL}/users/${username}/todos`, todo);
  }

}
