import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoComponent } from 'src/app/components/svg/logo/logo.component';
import { FormsModule } from '@angular/forms';
import { OverviewComponent } from './pages/overview/overview.component';
import { VisitorsComponent } from './pages/visitors/visitors.component';
import { MembersComponent } from './pages/members/members.component';
import { UsersComponent } from './pages/users/users.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { DoughutComponent } from './components/charts/doughut/doughut.component';
import { LineComponent } from './components/charts/line/line.component';
import { DateCarouselComponent } from './components/date-carousel/date-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoComponent,
    NavbarComponent,
    OverviewComponent,
    VisitorsComponent,
    MembersComponent,
    UsersComponent,
    MeetingsComponent,
    LayoutComponent,
    DoughutComponent,
    LineComponent,
    DateCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgChartsAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
