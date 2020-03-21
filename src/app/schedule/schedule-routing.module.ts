import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleModule } from './schedule.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { GetSchedulesComponent } from './components/get-schedules/get-schedules.component';


const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent
  },
  {
    path: 'list',
    component: GetSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
