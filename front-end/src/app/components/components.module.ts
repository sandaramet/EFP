import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { WordCardComponent } from "./word-card/word-card.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  declarations: [
    HeaderComponent,
    WordCardComponent,
    LoginComponent,
    SignupComponent,
  ],
  exports: [
    HeaderComponent,
    WordCardComponent,
    LoginComponent,
    SignupComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
