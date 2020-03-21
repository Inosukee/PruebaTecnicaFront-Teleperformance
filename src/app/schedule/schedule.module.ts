import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetSchedulesComponent } from './components/get-schedules/get-schedules.component';

@NgModule({
  declarations: [ScheduleComponent, GetSchedulesComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ScheduleModule { }
