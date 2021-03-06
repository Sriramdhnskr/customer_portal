import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes : Dish[];
  constructor(private dishservice : DishService) { }

  selectedDish : Dish;

  onselect(dish:Dish)
  {
    this.selectedDish = dish;
  }

  ngOnInit() {
    this.dishservice.getDishes()
    .then((dishes) => this.dishes = dishes);
  }

}
