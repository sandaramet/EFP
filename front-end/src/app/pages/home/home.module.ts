import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { HomePageRoutingModule } from "./home-routing.module";

import { HomePage } from "./home.page";
import { ComponentsModule } from "src/app/components/components.module";
import { SignupComponent } from "../../components/signup/signup.component";
import { LoginComponent } from "../../components/login/login.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, SignupComponent, LoginComponent],
})
export class HomePageModule {}
