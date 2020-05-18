import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/User.model";
import { AuthService } from "src/app/serivces/auth.service";
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
  constructor(private auth: AuthService) {}

  ngOnInit() {}
  login() {
    this.auth.login(this.user);
  }
}
