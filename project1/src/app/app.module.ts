import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ProviderComponent } from './provider/provider.component';
import { ViewComponent } from './view/view.component';
import { EditorComponent } from './editor/editor.component';
import { IphoneComponent } from './iphone/iphone.component';
import { BookComponent } from './book/book.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PetparentComponent } from './petparent/petparent.component';
import { PetchildComponent } from './petchild/petchild.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ProviderComponent,
    ViewComponent,
    EditorComponent,
    IphoneComponent,
    BookComponent,
    ParentComponent,
    ChildComponent,
    PetparentComponent,
    PetchildComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
