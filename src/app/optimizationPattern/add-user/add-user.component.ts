import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddUserComponent {
  
  userFullName: string = '';
  @Output() add = new EventEmitter<string>();
  addUser() {
    this.add.emit(this.userFullName);
    this.userFullName = '';
  }
}
