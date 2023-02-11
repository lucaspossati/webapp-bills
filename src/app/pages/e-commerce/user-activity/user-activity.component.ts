import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

import { UserActivityData, UserActive } from '../../../@core/data/user-activity';
import { User } from '../../../models/user';
import { GlobalService } from '../../../services/global.service';
import { SpentInMonthService } from '../../../services/spent-in-month.service';

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  templateUrl: './user-activity.component.html',
})
export class ECommerceUserActivityComponent implements OnDestroy {

  private alive = true;
  spents: any = [];
  loggedUser: User = new User();

  userActivity: UserActive[] = [];
  type = 'month';
  types = ['week', 'month', 'year'];
  currentTheme: string;

  constructor(private themeService: NbThemeService,
              private spentInMonth: SpentInMonthService,
              private globalService: GlobalService,
              private userActivityService: UserActivityData) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
    });

    this.getUserActivity(this.type);
    this.loggedUser = this.globalService.getLoggedUser();

    this.getSpents();
  }

  getUserActivity(period: string) {
    this.userActivityService.getUserActivityData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(userActivityData => {
        this.userActivity = userActivityData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getSpents(){
    this.spentInMonth.getByIdUser(this.loggedUser.id).subscribe((resp: any) => {
      this.spents = resp.data;
    });
  }
  
}
