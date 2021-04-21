import { Component, OnInit } from '@angular/core';
import { LeaderService } from "../services/leader.service";
import { leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
},
animations: [
  flyInOut(),
  expand()
]
})
export class AboutComponent implements OnInit {
   leaders : leader[];
  constructor(private leaderservice : LeaderService) { }

  ngOnInit() {
   this.leaderservice.getLeaders()
   .then((Leader) => this.leaders = Leader);
  }

}
