import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseURL = 'http://dkatec-ts2.corp.lego.com:8983/solr/books/select?q=';

  constructor(private http: HttpClient) { }

  getDocuments(text: string) {
    return this.http.get(this.baseURL + text);
  }


}
