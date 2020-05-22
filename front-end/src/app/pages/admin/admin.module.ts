import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AdminPageRoutingModule } from "./admin-routing.module";

import { AdminPage } from "./admin.page";
import { ComponentsModule } from "src/app/components/components.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddWordCardComponent } from './dashboard/add-word-card/add-word-card.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { WordsTableComponent } from './dashboard/words-table/words-table.component';
import {MatNativeDateModule} from '@angular/material/core';
import { MaterialModule } from '../../material-module';
import { EditWordCardComponent } from './dashboard/edit-word-card/edit-word-card.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    ComponentsModule,
    MatNativeDateModule,
    MaterialModule
  ],

  declarations: [AdminPage, DashboardComponent,AddWordCardComponent,SidebarComponent,WordsTableComponent,EditWordCardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPageModule {}
