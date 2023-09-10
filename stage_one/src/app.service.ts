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
      utc_time: currentDate.toISOString().split('.')[0] + 'Z',
      track,
      github_file_url:
        'https://github.com/Akingbade675/hngx_internship/blob/main/stage_one/src/app.service.ts',
      github_repo_url: 'https://github.com/Akingbade675/hngx_internship',
      status_code: 200,
    };
  }
}
