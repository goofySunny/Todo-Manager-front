import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoListData } from 'src/app/pages/todo-list/todo-list.component';



@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: HttpClient) { }

  public retrieveAllTodos(username: string) {
    return this.http.get<TodoListData[]>(`http://localhost:8080/users/${username}/todos`)
  }

  public deleteTodo(id: number, username: string) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
