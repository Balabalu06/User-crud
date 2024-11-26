import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  [x: string]: any;
  users: user[] = [];
  newUser = {
    username: '',
    password: '',
    email: '',
    SNO: 0,
  };
  private userUrl = 'assets/users.json';
  isEditing: any;
  editingIndex: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers(): void {
    this.http.get<user[]>(this.userUrl).subscribe((user) => {
      this.users = user;
    });
  }

  addUser(): void {
    if (this.newUser.username && this.newUser.email && this.newUser.password) {
      if (this.isEditing) {
        // Update the user in the list
        this.users[this.editingIndex] = { ...this.newUser };
        this.isEditing = false; // Reset edit mode
        this.editingIndex = -1;
      } else {
        // Add a new user
        this.newUser.SNO = this.users.length + 1;
        this.users.push({ ...this.newUser });
      }

    
      this.newUser = { SNO: 0, username: '', email: '', password: '' };
    } else {
      alert('Please fill all fields.');
    }
  }
  editUser(index: number): void {
    this.isEditing = true;
    this.editingIndex = index;
    this.newUser = { ...this.users[index] };
  }
  deleteUser(index: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users.splice(index, 1);
    }
  }

}
