import { Component } from '@angular/core';


export class Todo {
  constructor(
    public id: number,
    public desc: string,
    public date: Date,
    public isDone: boolean
  ){}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todos = [
    new Todo(1, "Learn Angular", new Date(), false),
    new Todo(2, "Learn JavaSpringBoot", new Date(), false),
    new Todo(3, "Love Mahsa", new Date(), false),
    new Todo(4, "Train coding skills", new Date(), false)
    // {id : 1, desc: "Learn Angular"},
    // {id : 2, desc: "Learn JavaSpringBoot"},
    // {id : 3, desc: "Love Mahsa"},
    // {id : 4, desc: "Train coding skills"}
  ]

}
