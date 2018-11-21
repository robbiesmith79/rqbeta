import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CommunicationsComponent } from './communications/communications.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CustomersComponent } from './customers/customers.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { CalendarDirective } from './home/calendar.directive';
import { InboxSnippetComponent } from './communications/inbox-snippet/inbox-snippet.component';
import { GaugeModule } from 'angular-gauge';
import { GuageComponent } from './home/guage/guage.component';
import { CalendarMiniModule } from './calendar/mini/mini.component';
import { ChartsModule } from 'ng2-charts';
import { ApiComponent } from './api/api.component';
import { RealQuikService } from './api/realquik.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    //SharedModule,
    ClarityModule,
    BrowserAnimationsModule,
    ChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
    GaugeModule.forRoot()
  ],
  declarations: [
      AppComponent, 
      HomeComponent, 
      SettingsComponent, 
      AnalyticsComponent, 
      CommunicationsComponent, 
      ProductsComponent, 
      InvoicesComponent, 
      CustomersComponent, 
      ChatRoomComponent, 
      CalendarComponent, 
      HelpCenterComponent, 
      CalendarDirective, 
      InboxSnippetComponent, 
      GuageComponent, 
      CalendarMiniModule, 
      ApiComponent
  ],
  exports: [
    CalendarMiniModule
  ],
  providers: [ // services
    RealQuikService,
    ApiComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }