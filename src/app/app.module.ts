import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Bootstrap Modules
import { AlertModule } from 'ng2-bootstrap';

// Components
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';

// Services

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
