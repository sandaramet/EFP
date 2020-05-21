import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminPageRoutingModule } from "./admin-routing.module";

import { AdminPage } from "./admin.page";
import { ComponentsModule } from "src/app/components/components.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddWordCardComponent } from './dashboard/add-word-card/add-word-card.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    ComponentsModule,
  ],

  declarations: [AdminPage, DashboardComponent,AddWordCardComponent,SidebarComponent],
})
export class AdminPageModule {}
