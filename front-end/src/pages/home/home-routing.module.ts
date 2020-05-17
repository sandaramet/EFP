import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { SignupComponent } from "src/app/pages/home/signup/signup.component";
import { LoginComponent } from "src/app/pages/home/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "",
        component: SignupComponent,
      },
      {
        path: "signup",
        redirectTo: "",
      },
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
