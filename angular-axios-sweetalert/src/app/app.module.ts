import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './item/overview/overview.component';
import { CreateComponent } from './item/create/create.component';
import { DetailComponent } from './item/detail/detail.component';
import { EditComponent } from './item/edit/edit.component';
import { ItemModule } from './item/item.module';

@NgModule({
  declarations: [
    AppComponent,
    // OverviewComponent,
    // CreateComponent,
    // DetailComponent,
    // EditComponent // ALREADY REGISTERED IN ITEM MODULE Now no need
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
