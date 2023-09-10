import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApi(slack_name: string, track: string) {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();

    const currentDay = currentDate.getDay();

    return {
      slack_name,
      current_day: daysOfWeek[currentDay],
      utc_time: currentDate.toISOString(),
      track,
      github_file_url: '',
      github_repo_url: '',
      status_code: 200,
    };
  }
}
