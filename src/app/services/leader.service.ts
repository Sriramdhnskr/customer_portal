import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Promise<leader[]> {
    
    return new Promise(resolve => { setTimeout(() =>  resolve(LEADERS), 2000
      )});

  }

  getFeaturedLeader(): Promise<leader> {
    return new Promise(resolve => { setTimeout(() =>  resolve(LEADERS.filter((l) => l.featured)[0]),2000)});
  }
  

  constructor() { }
}
