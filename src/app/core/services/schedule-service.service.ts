import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schedule } from './../models/schedule';
import {  environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ScheduleServiceService {

  constructor(
    private httpclient: HttpClient
  ) { }

  addSchedule(schedule: Schedule) {
    return this.httpclient.post(`${environment.url}/schedule`, schedule);
  }
  getSchedule() {
    return this.httpclient.get<Schedule[]>(`${environment.url}/schedule`);
  }
}
