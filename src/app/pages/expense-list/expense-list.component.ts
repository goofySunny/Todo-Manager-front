import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseData } from 'src/app/shared/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  @ViewChild("parent")
  parentDiv : HTMLDivElement;

  expenses : ExpenseData[] = [
    new ExpenseData(1, "Milk, Ice Cream", 100000, "Grocery"),
    new ExpenseData(2, "Pack of Cigarettes", 55000, "Addiction"),
    new ExpenseData(3, "Gold", 52000000, "RelationShip"),
    new ExpenseData(4, "Benzene", 45000, "Fuel")
  
  ];


  constructor(private router: Router) {}

  edit(e : ExpenseData) {
    this.router.navigate(["/expenses/ali", e.id])
  }

  delete(e : ExpenseData) {
    let index = this.expenses.indexOf(e);
    if (index != -1) {
      this.expenses.splice(index, 1);
    } else {
      this.emitError("Something went Wrong!")
    }
  }

  add() {

  }

  emitError(message: string) {
    let errorDiv = new HTMLDivElement();
    errorDiv.className = "errorDiv";
    this.parentDiv.prepend(errorDiv);
  }

}
