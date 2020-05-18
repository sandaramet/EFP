import { Injectable } from "@angular/core";
import { NewUser } from "../models/NewUser.model";
import { User } from "../models/User.model";
import { Router } from "@angular/router";
import { CheckFormService } from "./check-form.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loggedInStatus: boolean = false;
  constructor(private router: Router, private checkForm: CheckFormService) {}
  registerNewUser(user: NewUser) {
  

    this.router.navigateByUrl("/home/login");
  }
  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
  }
  get isLoggedIn() {
    return this.loggedInStatus;
  }
  login(user: User) {
    // if (user.username == "admin" && user.password == "admin") {
    //   this.router.navigateByUrl("/profile");
    //   this.setLoginStatus(true);
    // } else {
    //   this.setLoginStatus(false);
    // }
  }
}
