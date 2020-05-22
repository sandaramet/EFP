import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-word-card",
  templateUrl: "./add-word-card.component.html",
  styleUrls: ["./add-word-card.component.scss"],
})
export class AddWordCardComponent implements OnInit {
  constructor(
    public alertController: AlertController,
    private router: Router
  ) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Դուք ավելացրիք նոր բառ",
      message: "Գնալ բառերի աղյուսակ",
      buttons: [
        {
          text: "Գնալ",
          handler: () => {
            this.router.navigateByUrl("/admin/dashboard");
          },
        },
      ],
    });

    await alert.present();
  }
  addNewWordCard(){
    this.presentAlert()
  }
  ngOnInit() {}
}
