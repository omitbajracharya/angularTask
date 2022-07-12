import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashpage',
  templateUrl: './dashpage.component.html',
  styleUrls: ['./dashpage.component.scss']
})
export class DashpageComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
this.auth.logout();
  }
}
