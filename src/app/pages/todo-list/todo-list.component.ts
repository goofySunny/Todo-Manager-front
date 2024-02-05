import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/data/todo-list.service';
import { LoginComponent } from '../login/login.component';
import { DataExchangeService } from 'src/app/services/data/data-exchange.service';



export class TodoListData {
  constructor(public id: number,
    public desc: string,
    public date: Date,
    public done: boolean) { }
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    alert:string= '';
    username: string =  'najafer';
    alertStatus: boolean = false;
    todos: TodoListData[] = [];

  // todos = [
  //   new Todo(1, "Learn Angular", new Date(), false),
  //   new Todo(2, "Learn JavaSpringBoot", new Date(), false),
  //   new Todo(3, "Love Mahsa", new Date(), false),
  //   new Todo(4, "Train coding skills", new Date(), false)
  //   // {id : 1, desc: "Learn Angular"},
  //   // {id : 2, desc: "Learn JavaSpringBoot"},
  //   // {id : 3, desc: "Love Mahsa"},
  //   // {id : 4, desc: "Train coding skills"}
  // ]

  constructor(private dataService: TodoListService,
    private dataExchangeService: DataExchangeService) { }


  ngOnInit(): void {
    this.dataService.retrieveAllTodos('sunny').subscribe(
      response => {
        console.log(response)
        this.todos = response;
      },
      error => console.log(error)
    );
    this.username = this.dataExchangeService.signedInUser;
  }

  deleteTodo(id: number, username:string) {
    this.dataService.deleteTodo(id, username).subscribe(
      response => { 
        this.alert = 'successful'
        this.alertStatus = true;
      },
      error => {
        this.alert = 'failed'
        this.alertStatus = false;
      }
      
    )
  }
}
