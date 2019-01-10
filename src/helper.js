const getPaths = (DayOrNight) => {
  // Find the right background with the help of the [isDayLight] function from './helper.js'
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


  if (DayOrNight === 'day') {
    return dayImgs
  } else if (DayOrNight === 'night') {
    return nightImgs
  }
}

const setStateTemplate = (weatherData) => {
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
    //icon-names from weatherData : weather types
    'clear-day': 'Clear',
    'clear-night': 'Clear',
    'cloudy': 'Cloudy',
    'fog': 'Foggy',
    'partly-cloudy-day': 'Partly Cloudy',
    'partly-cloudy-night': 'Partly Cloudy',
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

  

  const { currently, daily } = weatherData;
  const dailyData = daily.data;
  const today = dailyData.shift();

  const nextDays = dailyData.map(key => {
      return {
      icon: key.icon,
      temp: key.temperatureHigh,
      type: weatherType[key.icon],
      weekDay: dayOfWeek(key.time)
    }
  });
  return {
    bgUrl: isDayLight(today.sunriseTime, today.sunsetTime) ? `url(${getPaths('day')[`./${currently.icon}.jpg`]})` :
        `url(${getPaths('night')[`./${currently.icon}.jpg`]})`,
    currently: {
      today: {
        icon: currently.icon,
        temp: currently.temperature,
        type: weatherType[currently.icon],
      }
    },
    nextDays
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





function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const convertTemp = (state, targetUnitConverter) => {
  let finalState = state;
  // Iterate through state to get temperature values
  Object.keys(state).forEach((key) => {
    let a;
    a = key;
    Object.keys(state[key]).forEach((key) => {
      let b;
      b = key;
      Object.keys(state[a][key]).forEach((key) => {
        if (key === 'temp') {
          /**
           * Convert temperature values to the target value, using a targetUnitConverter function,
           * which is either [toCelsius(fahrenheit)] or [toFahrenheit(celsius)],
           * imported from './helper.js'
           */
          finalState[a][b][key] = targetUnitConverter(state[a][b][key])
        }
      })
    })
  })
}

const dataFetch = (component, setStateFunc, closeLs, preventLsReload) => {
  // Get IP from API
  fetch('https://api.ipdata.co/?api-key=b3d5e0169f7230932b950ce9b4b15c1fb1855c3aa0429d4b7569f222')
    .then(resp => resp.json())
    .then(resp => {
      // Prepare coordinates for the weather API
      const lat = Math.round(resp.latitude);
      const lon = Math.round(resp.longitude);
      return `${lat},${lon}`;
    })
    .then(resp => {
      // Get data from the weather API
      return fetch(`https://whispering-savannah-31637.herokuapp.com/https://api.darksky.net/forecast/390040fe85ad0e8ff9ff687e0b4da4f1/${resp}`)
        .then(resp => resp.json())
        .then(resp => {
          // Add data to the state using the [setStateTemplate(weatherData)] function from './helper.js'
          component.setState(setStateFunc(resp));
          preventLsReload = true;
        })
    })
    .then(() => {
      closeLs.loading_screen.finish();
    })
}

export { setStateTemplate, formatAMPM, getPaths, convertTemp, dataFetch, toCelsius, toFahrenheit }