import { Component } from '@angular/core';
import { ExpenseData } from 'src/app/shared/models/expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {

  expenses : ExpenseData[] = [
    new ExpenseData(1, "Milk, Ice Cream", 100000, "Grocery"),
    new ExpenseData(2, "Pack of Cigarettes", 55000, "Addiction"),
    new ExpenseData(3, "Gold", 52000000, "RelationShip"),
    new ExpenseData(4, "Benzene", 45000, "Fuel")
  
  ];

}
