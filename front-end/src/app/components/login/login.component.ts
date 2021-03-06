import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User.model";
import { AuthService } from "src/app/serivces/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user: User = {
    username: "",
    password: "",
  };
  constructor(private auth: AuthService,private router:Router) {}

  ngOnInit() {}
  login() {
    this.auth.login(this.user);

  }
}
