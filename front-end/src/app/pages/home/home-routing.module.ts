import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";
import { SignupComponent } from "src/app/components/signup/signup.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { WordCardComponent } from 'src/app/components/word-card/word-card.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "",
        component: FeedComponent,
      },
      {
        path: "signup",
        component: SignupComponent,
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
