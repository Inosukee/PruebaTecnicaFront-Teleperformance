import { Component, OnInit } from '@angular/core';
import { Schedule } from './../../../core/models/schedule';
import { ScheduleServiceService } from 'src/app/core/services/schedule-service.service';
@Component({
  selector: 'app-get-schedules',
  templateUrl: './get-schedules.component.html',
  styleUrls: ['./get-schedules.component.scss']
})
export class GetSchedulesComponent implements OnInit {

  schedule: Schedule[] = [];
  displayedColumns: string[] = ['document', 'name',
    'startDate', 'endDate', 'strartSchedule', 'endSchedule', 'startExtraSchedule', 'endExtraSchedule', 'description'];
  constructor(
    private scheduleServices: ScheduleServiceService
  ) { }

  ngOnInit() {
    this.fetchSchedules();
  }
  fetchSchedules() {
    this.scheduleServices.getSchedule()
      .subscribe(res => {
        const convert = JSON.stringify(res);
        const schedule = JSON.parse(convert);
        this.schedule = schedule.body;
      });
  }
}
