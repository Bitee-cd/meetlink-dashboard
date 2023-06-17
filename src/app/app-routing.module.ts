import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { VisitorsComponent } from './pages/visitors/visitors.component';
import { UsersComponent } from './pages/users/users.component';
import { MembersComponent } from './pages/members/members.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'visitors', component: VisitorsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
