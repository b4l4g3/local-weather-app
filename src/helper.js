const setStateTemplate = (resp) => {
  const dayOfWeek = (time) => {
    const days = [
      'SUN',
      'MON',
      'TUE',
      'WED',
      'THU',
      'FRI',
      'SAT',
    ];
    const day = new Date(time * 1000).getDay();
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
    if ((Date.now() > (sunrise * 1000)) && (Date.now() < (sunset * 1000))) {
      return true
    } else {
      return false
    }
  };

  const { currently, daily } = resp;
  const dailyData = daily.data;

  return {
    currently: {
      today: {
        icon: currently.icon,
        temp: currently.temperature,
        type: weatherType[currently.icon],
        isDayLight: isDayLight(dailyData[0].sunriseTime, dailyData[0].sunsetTime)
      }
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

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let strTime = `${hours}:${minutes}${ampm}`;
  return strTime;
}

const getPaths = (DayOrNight) => {
  const reqDayImgs = require.context('./Components/Background/Day', true, /\.jpg$/)
  const reqNightImgs = require.context('./Components/Background/Night', true, /\.jpg$/)

  const dayImgs = reqDayImgs
    .keys()
    .reduce((images, path) => {
      images[path] = reqDayImgs(path)
      return images
    }, {})

  const nightImgs = reqNightImgs
    .keys()
    .reduce((images, path) => {
      images[path] = reqNightImgs(path)
      return images
    }, {})

  if(DayOrNight === 'day') {
    return dayImgs
  } else if (DayOrNight === 'night') {
    return nightImgs
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export { setStateTemplate, formatAMPM, getPaths, toCelsius, toFahrenheit }