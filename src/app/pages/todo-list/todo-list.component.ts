import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/data/todo-list.service';
import { Router } from '@angular/router';



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
  alert: string = '';
  username: string = 'najafer';
  alertStatus: boolean = false;
  todos: TodoListData[] = [];
  toSave: TodoListData;
  saveResponse: string = '';

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
    private router: Router,
    private cdRef: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.toSave = new TodoListData(0, '', new Date(), false);
    this.dataService.retrieveAllTodos('sunny').subscribe(
      response => {
        // console.log(response)
        this.todos = response;
      },
      error => console.log(error)
    );
  }

  // deleteTodo(id: number, username:string) {
  //   this.dataService.deleteTodo(id, username).subscribe(
  //     response => { 
  //       this.alert = 'successful'
  //       this.alertStatus = true;
  //     },
  //     error => {
  //       this.alert = 'failed'
  //       this.alertStatus = false;
  //     }

  //   )
  // }
  deleteTodo(id: number, username: string) {
    this.dataService.deleteTodo(id, username).subscribe(
      response => {
        // Assuming todos is your local array that holds all todo items
        // and each todo item has an id property
        this.todos = this.todos.filter(todo => todo.id !== id);

        // Update alert messages
        this.alert = 'Deletion successful';
        this.alertStatus = true;
      },
      error => {
        this.alert = 'Deletion failed';
        this.alertStatus = false;
      }
    );
  }

  updateTodo(id: number) {
    console.log(id);
    this.router.navigate(['todo', id])
  }

  addTodoHandler() {
    document.getElementById("overlay")!.style.display = "block";
  }

  saveTodoHandler() {
    this.toSave.done = false;
    this.dataService.saveTodo('najafer', this.toSave).subscribe(
      response => {
        this.saveResponse = 'success'
        
      },
      error => this.saveResponse = error
    )
    this.todos.push(this.toSave)
    this.cancelHandler()
  }

  cancelHandler() {
    document.getElementById("overlay")!.style.display = "none"
  }
}
