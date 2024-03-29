export function getDuration(type: string) {
  switch (type) {
    case "BLN":
      return getBlnDuration();
    case "BHF":
      return getBhfDuration();
    case "BBG":
      return getBbgDuration();
    default:
      break;
  }
}
function getBlnDuration() {
  const { isItHoliday, isItSaturday, hour } = getDate();
  let duration = 60;
  if (isItHoliday) {
    if (hour < 7) {
      duration = 60;
    } else if (hour < 8) {
      duration = 60;
    } else if (hour < 20) {
      duration = 40;
    } else if (hour < 22) {
      duration = 60;
    } else {
      duration = 60;
    }
  } else if (isItSaturday) {
    if (hour < 6) {
      duration = 60;
    } else if (hour < 7) {
      duration = 40;
    } else if (hour < 21) {
      duration = 30;
    } else if (hour < 23) {
      duration = 40;
    } else {
      duration = 60;
    }
  } else {
    if (hour < 5) {
      duration = 60;
    } else if (hour < 7) {
      duration = 30;
    } else if (hour < 20) {
      duration = 20;
    } else if (hour < 22) {
      duration = 30;
    } else {
      duration = 60;
    }
  }
  return duration;
}

function getBhfDuration() {
  const { isItHoliday, isItSaturday, hour } = getDate();
  let duration = 60;
  if (isItHoliday || isItSaturday) {
    if (hour < 5) {
      duration = 60;
    } else if (hour < 6) {
      duration = 30;
    } else if (hour < 7) {
      duration = 20;
    } else if (hour < 22) {
      duration = 10;
    } else if (hour < 23) {
      duration = 20;
    } else {
      duration = 30;
    }
  } else {
    if (hour < 5) {
      duration = 30;
    } else if (hour < 6) {
      duration = 20;
    } else if (hour < 7) {
      duration = 10;
    } else if (hour < 22) {
      duration = 5;
    } else if (hour < 23) {
      duration = 10;
    } else {
      duration = 20;
    }
  }
  return duration;
}

function getBbgDuration() {
  const { isItHoliday, isItSaturday, hour } = getDate();
  let duration = 60;
  if (isItHoliday || isItSaturday) {
    if (hour < 5) {
      duration = 240;
    } else if (hour < 6) {
      duration = 120;
    } else if (hour < 7) {
      duration = 120;
    } else if (hour < 22) {
      duration = 120;
    } else if (hour < 23) {
      duration = 120;
    } else {
      duration = 240;
    }
  } else {
    if (hour < 5) {
      duration = 120;
    } else if (hour < 6) {
      duration = 60;
    } else if (hour < 7) {
      duration = 60;
    } else if (hour < 22) {
      duration = 60;
    } else if (hour < 23) {
      duration = 60;
    } else {
      duration = 120;
    }
  }
  return duration;
}

const isSunday = (weekday: number) => {
  if (weekday === 0) {
    return true;
  }
  return false;
};
const isHoliday = (day: number, month: number, year: number) => {
  if (day === 1 && month === 1) {
    return true;
  }
  if (day === 8 && month === 3) {
    return true;
  }
  if (day === 1 && month === 5) {
    return true;
  }
  if (day === 3 && month === 10) {
    return true;
  }
  if (month === 12 && (day === 25 || day === 26)) {
    return true;
  }
  let movableHolidays = false;
  const holidays = easterDate(year);
  holidays.forEach(holiday => {
    if (day === holiday[0] && month === holiday[1]) {
      movableHolidays = true;
    }
  });
  if (movableHolidays) {
    return true;
  }
  return false;
};
function isSaturday(weekday: number) {
  if (weekday === 6) {
    return true;
  }
  return false;
}
const gauss = (number: number) => {
  if (number !== 0) {
    return Math.floor(number);
  } else {
    return 0;
  }
};

export function leap(year: number) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const easterDate = (year: number) => {
  // Gaussian calculus
  // some constants
  const g = year % 19;
  const c = gauss(year / 100);
  const a = gauss(c / 4);
  const d = gauss((8 * c + 13) / 25);
  const h = (c - a - d + 19 * g + 15) % 30;
  const f = gauss(h / 20);
  const k = gauss(29 / (h + 1));
  const m = gauss((21 - g) / 11);
  const n = gauss(year / 4);
  const i = h - f * (1 - k * m);
  const j = (year + n + i + 2 - c + a) % 7;
  const l = i - j;
  const easterSundayMonth = l <= 3 ? 3 : 4;
  const easterSundayDay = l <= 3 ? l + 28 : l - 3;
  const goodFridayDate =
    easterSundayDay < 3 && easterSundayMonth === 4
      ? [easterSundayDay + 29, 3, year]
      : [easterSundayDay - 2, easterSundayMonth, year];
  const easterMonday =
    easterSundayDay === 31 && easterSundayMonth === 3
      ? [1, 4, year]
      : [easterSundayDay + 1, easterSundayMonth, year];
  let ascension = [];
  if (easterSundayDay < 23 && easterSundayMonth === 3) {
    ascension = [easterSundayDay + 8, 4, year];
  } else if (easterSundayMonth === 3) {
    ascension = [easterSundayDay - 22, 5, year];
  } else if (easterSundayDay > 21 && easterSundayMonth === 4) {
    ascension = [easterSundayDay - 22, 6, year];
  } else {
    ascension = [easterSundayDay + 9, 5, year];
  }
  let pentecostMonday = [];
  if (ascension[1] === 4) {
    pentecostMonday = [ascension[0] - 18, 5, year];
  } else if (ascension[0] > 20 && ascension[1] === 5) {
    pentecostMonday = [ascension[0] - 19, 6, year];
  } else {
    pentecostMonday = [ascension[0] + 11, ascension[1], year];
  }
  const holidays = [goodFridayDate, easterMonday, ascension, pentecostMonday];
  return holidays;
};

function getDate() {
  const nowDate = new Date();
  const nowDateString = nowDate.toLocaleDateString("en-GB", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric"
  });
  const dateTime = nowDateString.split(",");
  const dateArray = dateTime[0].split("/");
  const hour = Number(dateTime[1]);
  const day = Number(dateArray[0]);
  const month = Number(dateArray[1]);
  const year = Number(dateArray[2]);
  const nowDateLocal = new Date(year, month - 1, day);
  const weekday = nowDateLocal.getDay();
  const isItHoliday = isSunday(weekday) || isHoliday(day, month, year);
  const isItSaturday = isSaturday(weekday);
  return { isItHoliday, isItSaturday, hour };
}
