import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegisterDto } from '../_models/registerDto';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'https://localhost:5001/api/';

  private currentUserSource = new BehaviorSubject<User | null>(null);

  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }


  login(model: any) {
    return this.http.post<User>(this.baseUrl + "account/login", model).subscribe({
      next: (res: User) => {
        if (res) {
          localStorage.setItem("user", JSON.stringify(res));
          this.currentUserSource.next(res);

          this.router.navigateByUrl("/")
        }
      },
      error: error => this.toastr.error(error.error)
    })
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }


  logout() {
    localStorage.removeItem("user");
    this.currentUserSource.next(null)
  }


  register(registerDto: RegisterDto) {
    return this.http.post<User>(this.baseUrl + "account/register", registerDto).subscribe({
      next: (res: User) => {
        localStorage.setItem("user", JSON.stringify(res));
        this.currentUserSource.next(res);
      }
    })
  }
}
