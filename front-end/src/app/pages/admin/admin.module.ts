import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminPageRoutingModule } from "./admin-routing.module";

import { AdminPage } from "./admin.page";
import { ComponentsModule } from "src/app/components/components.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    ComponentsModule,
  ],

  declarations: [AdminPage, DashboardComponent],
})
export class AdminPageModule {}
