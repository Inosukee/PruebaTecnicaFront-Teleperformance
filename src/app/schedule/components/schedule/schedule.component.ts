import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScheduleServiceService } from 'src/app/core/services/schedule-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  createSchedule: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private scheduleService: ScheduleServiceService
  ) {
    this.createSchedule = this.formBuilder.group({
      document: ['', [Validators.required]],
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      starSchedule: ['', [Validators.required]],
      endSchedule: ['', [Validators.required]],
      startExtraSchedule: ['', [Validators.required]],
      endExtraSchedule: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  addSchedule(event: Event) {
    event.preventDefault();
    const schedule = this.createSchedule.value;
    this.scheduleService.addSchedule(schedule)
      .subscribe(res => {
        const convert = JSON.stringify(res);
        const addedschedule = JSON.parse(convert);
        alert(addedschedule.body);
      });
  }

}
