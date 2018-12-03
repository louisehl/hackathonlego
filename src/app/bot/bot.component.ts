import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  search: string;
  result = [];
  numFound: number;
  submitted = false;

  ngOnInit() {} 

  sendQuery(text: string) {
    this.submitted = true;
    this.httpService.getDocuments(text).subscribe(data => {
      console.log(data);
      this.numFound = data['response']['numFound'];
      this.result = [];
      for ( let i = 0; i < data['response']['docs'].length; i++) {
        if (data['response']['docs'][i]['id']) {
          this.result.push(data['response']['docs'][i]['id']);
        }
      }
    });
  }

  replaceName(text: string) {
    return text.replace('d:', "\\\\dkatec-ts2");
  }

}
