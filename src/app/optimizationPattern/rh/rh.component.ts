import {ApplicationRef, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild} from '@angular/core';
import {User, UsersService} from "../users.service";
import { BehaviorSubject, Observable, observable, tap } from 'rxjs';
@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css'],
})
export class RhComponent  {
 /* nb$:BehaviorSubject<number>=new BehaviorSubject<number>(2)
 n$=this.nb$.asObservable()*/
  oddUsers: User[];
  evenUsers: User[];
  
  
  constructor(private userService: UsersService) {
    this.oddUsers = this.userService.getOddOrEven(true);
    this.evenUsers = this.userService.getOddOrEven();
  }

 
  addUser(odd:boolean, newUser: string) {
    /*this.nb$.next(10)
    this.n$=this.n$.pipe(tap  (val=>{console.log(val) ; return val}))*/
    if (odd) 
    this.oddUsers=this.userService.addUser(this.oddUsers, newUser);
  else
    this.evenUsers=this.userService.addUser(this.evenUsers, newUser);
  console.log(this.oddUsers.length)
  }
}
