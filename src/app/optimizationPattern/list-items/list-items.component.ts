import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../users.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListItemsComponent {
  @Input() users:User[]=[]

}
