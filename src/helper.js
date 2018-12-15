const setStateTemplate = (resp) => {
    const dayOfWeek = (time) => {
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
        const day = new Date(time*1000).getDay();
        return days[day];
    }
    
    const weatherType = {
        'clear-day': 'Clear',
        'clear-night': 'Clear',
        'cloudy': 'Cloudy',
        'fog': 'Foggy',
        'partly-cloudy-day': 'Partly cloudy',
        'partly-cloudy-night': 'Partly cloudy',
        'rain': 'Rainy',
        'snow': 'Snow',
        'sleet': 'Sleet',
        'wind': 'Windy'
    }

    const isDayLight = (sunrise, sunset) => {
      if (( Date.now() > (sunrise*1000) ) && ( Date.now() < (sunset*1000) )) {
        return true
      } else {
        return false
      }
    };

    const { currently, daily } = resp;
    const dailyData = daily.data;

    return {
        currently: {
          icon: currently.icon,
          temp: currently.temperature,
          type: weatherType[currently.icon],
          isDayLight: isDayLight(dailyData[0].sunriseTime, dailyData[0].sunsetTime)
        },
        nextDays: {
          nextDay1: {
            icon: dailyData[1].icon,
            temp: dailyData[1].temperatureHigh,
            type: weatherType[dailyData[1].icon],
            weekDay: dayOfWeek(dailyData[1].time)
          },
          nextDay2: {
            icon: dailyData[2].icon,
            temp: dailyData[2].temperatureHigh,
            type: weatherType[dailyData[2].icon],
            weekDay: dayOfWeek(dailyData[2].time)
          },
          nextDay3: {
            icon: dailyData[3].icon,
            temp: dailyData[3].temperatureHigh,
            type: weatherType[dailyData[3].icon],
            weekDay: dayOfWeek(dailyData[3].time)
          }
        }
      }
}

export { setStateTemplate }