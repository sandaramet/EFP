import { Injectable } from "@angular/core";
import { NewUser } from "../models/NewUser.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
  registerNewUser(user: NewUser) {
    console.log(user.email, user.username, user.confirmPassword, user.password);
  }
}
