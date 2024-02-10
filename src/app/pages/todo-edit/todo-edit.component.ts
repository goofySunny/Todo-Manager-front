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
      this.id = this.router.snapshot.params['id']
      // console.log(this.id)
      this.todo = new TodoListData(1, '', new Date(), false);
      this.dataService.retrieveTodo('Najafer', this.id).subscribe(
        data => this.todo = data
      )
  }

  updateData() {
    this.dataService.updateTodo("najafer", this.todo.id, this.todo).subscribe(
      data => {
        this.todo = data
        this.route.navigate(['/todos'])
      }
    );
  }

}
