import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://api.airtable.com/v0/';
  private readonly baseId = 'appstC6ZmjoUde6p2'; // Substitua pelo ID da base
  private readonly apiKey = 'patl26py7PnXrIsB0.62be93f4402749d3bdbe9c4e5ce4d592346f14deb28a3eefee98bf392d64d9f6'; // Substitua pelo seu PAT

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
