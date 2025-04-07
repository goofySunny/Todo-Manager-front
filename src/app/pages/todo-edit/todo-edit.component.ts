import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/data/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtAuthService } from 'src/app/services/JwtAuth/jwt-auth.service';
import { TodoListData } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  username: any;
  todo: TodoListData;
  id : number = 0;
  
  
  constructor(private dataService: TodoListService,
    private router: ActivatedRoute,
    private jwtService: JwtAuthService,
    private route: Router) {

  }

  ngOnInit(): void {
      this.username = this.jwtService.getUsername()
      this.id = this.router.snapshot.params['id'];
      this.todo = new TodoListData(this.id, '', new Date(), false);
      // console.log(this.id)
      if (this.todo.id != -1) {
      this.dataService.retrieveTodo(this.username, this.id).subscribe(
        data => this.todo = data
      )
      }
  }

  updateData() {
    if (this.id !== -1) {
    this.dataService.updateTodo(this.username, this.todo.id, this.todo).subscribe(
      data => {
        console.log('im success')
        this.todo = data
        this.route.navigate([`/todos/${this.username}`])
      }
    );
    } else {
      this.dataService.saveTodo(this.username, this.todo).subscribe(
        data => {
          this.todo = data
          this.route.navigate([`/todos/${this.username}`])
        },
      );
    }
  }

}
