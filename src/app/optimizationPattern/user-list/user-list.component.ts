import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../users.service";
import memo from 'memo-decorator';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];
  @Output() add = new EventEmitter<string>();
  userFullName: string = '';
  addUser() {
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
  
  fibo(n: number): number { 
    const fib = this.fibonnaci(n);
    return fib;
  }

  @memo()
  fibonnaci(n: number): number {
    if (n==1 || n==0) {
      return 1;
    }
    
    const f=this.fibonnaci(n-1) + this.fibonnaci(n-2);
    console.log(f)
    return f
  }
}
