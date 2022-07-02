import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-libnav',
  templateUrl: './libnav.component.html',
  styleUrls: ['./libnav.component.scss']
})
export class LibnavComponent implements OnInit {
  constructor(private translate: TranslateService){
    translate.setDefaultLang('english');
  }

  changeLocale(locale: string){
    this.translate.use(locale);
  }
  ngOnInit(): void {
  }

}
