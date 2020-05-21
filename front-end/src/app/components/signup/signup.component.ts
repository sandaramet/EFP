import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/serivces/auth.service";
import { NewUser } from "src/app/models/NewUser.model";
import { CheckFormService } from "src/app/serivces/check-form.service";
import { AlertController } from "@ionic/angular";
import { async } from "@angular/core/testing";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private checkForm: CheckFormService,
    private alertCtrl: AlertController
  ) {}
  newUser: NewUser = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  async presentAlert(message: string) {
    const alert = await this.alertCtrl.create({
      header: "There were problems creating your account.",
      message: message,
      buttons: ["OK"],
    });

    await alert.present();
  }

  onSubmit() {
    const { username, email, password, confirmPassword } = this.newUser;
    if (!this.checkForm.checkUsername(username)) {
      this.presentAlert("Enter valid username");
      return false;
    }
    if (!this.checkForm.checkEmail(email)) {
      this.presentAlert("Enter valid email");
      return false;
    }
    if (!this.checkForm.checkPassword(password, confirmPassword)) {
      this.presentAlert("Enter valid password");
      return false;
    }

    this.auth.registerNewUser(this.newUser);
  }

  ngOnInit() {}
}
