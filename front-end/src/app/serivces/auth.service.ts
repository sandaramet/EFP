import { Injectable } from "@angular/core";
import { NewUser } from "../models/NewUser.model";
import { User } from "../models/User.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInStatus: boolean = false;
  constructor(private router: Router) {}
  registerNewUser(user: NewUser) {
    console.log(user.email, user.username, user.confirmPassword, user.password);
  }
  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
  }
  get isLoggedIn() {
    return this.loggedInStatus;
  }
  login(user: User) {
    if (user.username == "admin" && user.password == "admin") {
      this.router.navigateByUrl("/profile");
      this.setLoginStatus(true);
    } else this.setLoginStatus(false);
  }
}
