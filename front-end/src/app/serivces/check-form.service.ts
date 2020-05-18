import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CheckFormService {
  checkUsername(name: string) {
    if (name == undefined || name == "") return false;
    return true;
  }
  checkPassword(password: string, confirmPassword: string) {
    if (password.length < 8) return false;
    if (password != confirmPassword) return false;
    return true;
  }
  checkEmail(email: string) {
    if (email.search("@") == -1) return false;
    return true;
  }
}
