import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/users.json'; 
  private usersSubject = new BehaviorSubject<user[]>([]);
  users$ = this.usersSubject.asObservable(); 
  httpClient: any;

  constructor(private http: HttpClient) {
    // Load initial user data from JSON file
    this.loadUsers();
  }

  // Fetch users from the JSON file
  private loadUsers(): void {
    this.http.get<user[]>(this.usersUrl).subscribe(
      (users) => {
        this.usersSubject.next(users);
      },
      (error) => {
        console.error('Failed to load users from JSON', error);
      }
    );
  }

  // Check if a user exists based on username
  checkUserExistence(username: string): boolean {
    const users = this.usersSubject.getValue(); 
    return users.some(user => user.username === username);
  }

  // Add a new user to the list 
  // addUser(newUser: user): void {
  //   const users = this.usersSubject.getValue(); // Get current users
  //   users.push(newUser); // Add the new user to the array
  //   this.usersSubject.next(users); 
  // }
 //Get all users
getUsers() {
   return this.httpClient.get('/assets/users');
 }
 }
