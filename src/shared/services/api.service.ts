import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://api.airtable.com/v0/';
  private readonly baseId = 'appFk4GudnV9OjcWt';
  private readonly apiKey = 'patlptp6S76rS2oCd.afb73fbbcdb98e44025665de4abff1319add6b6c791bbd10f190146e6652fd96'; 

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    });
  }

  getRecords(tableName: string): Observable<any> {
    const url = `${this.baseUrl}${this.baseId}/${tableName}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  createRecord(tableName: string, record: any): Observable<any> {
    const url = `${this.baseUrl}${this.baseId}/${tableName}`;
    return this.http.post(url, { fields: record }, { headers: this.getHeaders() });
  }
}
