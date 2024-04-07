import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { FilterPipe } from './filter.pipe';
import { ProductsService } from './products.service';
import { Form1Component } from './form1/form1.component';
import { FormHWComponent } from './form-hw/form-hw.component';

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
    UsersComponent,
    FilterPipe,
    Form1Component,
    FormHWComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
