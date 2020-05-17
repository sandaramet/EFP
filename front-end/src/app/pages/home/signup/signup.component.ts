import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/serivces/auth.service";
import { NewUser } from "src/app/models/NewUser.model";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  user: NewUser = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  onSubmit() {
    console.log(this.user)
    this.auth.registerNewUser(this.user);
    // this.router.navigateByUrl("/home/login");
  }
  ngOnInit() {}
}
