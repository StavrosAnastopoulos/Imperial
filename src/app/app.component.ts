import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Imperial';
  constructor(private traslateService: TranslateService) {
    this.traslateService.setDefaultLang('en');
    this.traslateService.use('en');
  }
}
