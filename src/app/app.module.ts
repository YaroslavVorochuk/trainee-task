import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AddressListComponent } from './address-list/address-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AddressListComponent,
    NavigationComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDg6Sr7Qvx35qzI_9sLHkkBbJ-AtxFxxKg'
    }),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
