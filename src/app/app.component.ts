import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';

//import { environment } from '@env/environment';
//import { Logger, I18nService } from '@app/core';

//const log = new Logger('App');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private translateService: TranslateService
              ) { }
    //private i18nService: I18nService
    //

    links = [
      { path: 'home', title: 'Home', shape: 'home' },
      { path: 'communications', title: 'Communications', shape: 'envelope' },
      { path: 'customers', title: 'Customers', shape: 'users' },
      { path: 'chat-room', title: 'Chat Room', shape: 'talk-bubbles' },
      { path: 'calendar', title: 'Calendar', shape: 'calendar' },
      { path: 'analytics', title: 'Analytics', shape: 'bar-chart' },
      { path: 'products', title: 'Products', shape: 'library' },
      { path: 'invoices', title: 'Invoices', shape: 'list' },
      { path: 'help-center', title: 'Help Center', shape: 'plus-circle' },
      { path: 'settings', title: 'Settings', shape: 'cog' },
    ];

  ngOnInit() {
    // Setup logger
    // if (environment.production) {
    //   Logger.enableProductionMode();
    // }

    //log.debug('init');


    // Setup translations
    //this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);

  const onNavigationEnd = this.router.events.pipe(filter(event => event instanceof NavigationEnd));

  // Change page title on navigation or language change, based on route data
  merge(this.translateService.onLangChange, onNavigationEnd)
    .pipe(
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
    .subscribe(event => {
      const title = event['title'];
      if (title) {
        this.titleService.setTitle(this.translateService.instant(title));
      }
    });
  }

}
