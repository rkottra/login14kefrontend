import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-belso-oldal',
  templateUrl: './belso-oldal.component.html',
  styleUrls: ['./belso-oldal.component.css']
})
export class BelsoOldalComponent implements OnInit {

  public fontosdolog :string = "";

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }
  
  
  fontos() {
    this.loginService.fontos().subscribe((data)  => 
    {
      this.fontosdolog = data;
    });
  }
}
