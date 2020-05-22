import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-edit-word-card",
  templateUrl: "./edit-word-card.component.html",
  styleUrls: ["./edit-word-card.component.scss"],
})
export class EditWordCardComponent implements OnInit {
  id: string;
  constructor(
    private route: ActivatedRoute,
    public alertController: AlertController,
    private router: Router
  ) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Դուք թարմացրեցիք տվյալները",
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

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  update() {
    this.presentAlert();
  }
}
