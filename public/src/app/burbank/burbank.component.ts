import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./../app.component.css']
})
export class BurbankComponent implements OnInit {
  url: string
  city: string
  info: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    this.city = "Burbank";
    this.url = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},us&APPID=89de76ce32d5e55ffe399e122402c142`;
    console.log(this.url);
   }
  ngOnInit() {
    this.getAPIFromService();
  }
   getAPIFromService() {
      let observable = this._httpService.getAPI(this.url);
      observable.subscribe(data => {
        console.log("Got our tasks!", data);
        this.info = data;
        this.info['main'].temp = Math.floor((this.info['main'].temp-273) * 1.8) + 32;
        this.info['image'] = './images/burbank.png'
      });
   }
}
