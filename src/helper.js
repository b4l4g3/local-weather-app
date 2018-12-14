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

    return {
        currently: {
          icon: resp.currently.icon,
          temp: resp.currently.temperature,
          type: weatherType[resp.currently.icon],
          isDayLight: isDayLight(resp.daily.data[0].sunriseTime, resp.daily.data[0].sunsetTime)
        },
        nextDays: {
          nextDay1: {
            icon: resp.daily.data[1].icon,
            temp: resp.daily.data[1].temperatureHigh,
            type: weatherType[resp.daily.data[1].icon],
            weekDay: dayOfWeek(resp.daily.data[1].time)
          },
          nextDay2: {
            icon: resp.daily.data[2].icon,
            temp: resp.daily.data[2].temperatureHigh,
            type: weatherType[resp.daily.data[2].icon],
            weekDay: dayOfWeek(resp.daily.data[2].time)
          },
          nextDay3: {
            icon: resp.daily.data[3].icon,
            temp: resp.daily.data[3].temperatureHigh,
            type: weatherType[resp.daily.data[3].icon],
            weekDay: dayOfWeek(resp.daily.data[3].time)
          }
        }
      }
}

export { setStateTemplate }