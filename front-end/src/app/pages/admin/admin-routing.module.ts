import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AdminPage } from "./admin.page";
import { LoginComponent } from "src/app/components/login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddWordCardComponent } from "./dashboard/add-word-card/add-word-card.component";
import { WordsTableComponent } from "./dashboard/words-table/words-table.component";
import { EditWordCardComponent } from "./dashboard/edit-word-card/edit-word-card.component";

const routes: Routes = [
  {
    path: "",
    component: AdminPage,
    children: [
      {
        path: "",
        component: LoginComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        children: [
          {
            path: "",
            component: WordsTableComponent,
          },
          {
            path: "add-word-card",
            component: AddWordCardComponent,
          },
          {
            path: "edit-word-card/:id",
            component: EditWordCardComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
