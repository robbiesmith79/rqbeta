import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CommunicationsComponent } from './communications/communications.component';
import { ProductsComponent } from './products/products.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CustomersComponent } from './customers/customers.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  // Fallback when no prior route is matched
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'RealQuik' }
  },
  {
    path: 'analytics',
    component: AnalyticsComponent,
    data: { title: 'Analytics' }
  },
  {
    path: 'communications',
    component: CommunicationsComponent,
    data: { title: 'Communications' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products' }
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: { title: 'Invoices' }
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: { title: 'Customers' }
  },
  {
    path: 'chat-room',
    component: ChatRoomComponent,
    data: { title: 'Chat Room' }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    data: { title: 'Calendar' }
  },
  {
    path: 'help-center',
    component: HelpCenterComponent,
    data: { title: 'Help Center' }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }