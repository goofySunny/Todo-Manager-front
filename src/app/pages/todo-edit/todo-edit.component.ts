import { Component, OnInit } from '@angular/core';
import { TodoListData } from '../todo-list/todo-list.component';
import { TodoListService } from 'src/app/services/data/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: TodoListData;
  id : number = 0;
  
  
  constructor(private dataService: TodoListService,
    private router: ActivatedRoute,
    private route: Router) {

  }

  ngOnInit(): void {
      this.id = this.router.snapshot.params['id'];
      this.todo = new TodoListData(this.id, '', new Date(), false);
      // console.log(this.id)
      if (this.todo.id != -1) {
      this.dataService.retrieveTodo('Najafer', this.id).subscribe(
        data => this.todo = data
      )
      }
  }

  updateData() {
    if (this.id !== -1) {
    this.dataService.updateTodo("najafer", this.todo.id, this.todo).subscribe(
      data => {
        this.todo = data
        this.route.navigate(['/todos'])
      }
    );
    } else {
      this.dataService.saveTodo("najafer", this.todo).subscribe(
        data => {
          this.todo = data
          this.route.navigate(['/todos'])
        },
        error => console.log('help')
      );
    }
  }

}
