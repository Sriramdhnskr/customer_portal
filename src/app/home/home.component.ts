import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
  
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  Leader: leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService) { }

  ngOnInit() {
     this.dishservice.getFeaturedDish()
    .then((dish) => this.dish = dish);
    this.promotionservice.getFeaturedPromotion()
    .then((promotion) => this.promotion = promotion);;
    this.leaderservice.getFeaturedLeader()
    .then((Leader) => this.Leader = Leader);
  }

}
