import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { WordCardComponent } from "./word-card/word-card.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WordCardComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent
  ],
  exports: [
    HeaderComponent,
    WordCardComponent,
    LoginComponent,
    SignupComponent,
    FeedComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
