import { Component, computed, signal, Input, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input() name?: string;
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter();
  // avatar = input.required<string>()
  // name = input.required<string>()
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
   }
  // imagePath = computed(() =>
  //   'assets/user/' + this.avatar())

  onSelectedUser() {
    this.select.emit(this.user.id); 
  }

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(() =>
  //   'assets/user/' + this.selectedUser().avatar)
  //  get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  //  }

  //  onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  //   this.selectedUser = DUMMY_USERS[randomIndex]
  //  }
}
