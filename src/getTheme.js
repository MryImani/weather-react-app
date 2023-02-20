export default function getTheme(weatherDescription) {
  let theme = {
    Clouds: {
      backgroundUrl:
        "url('https://images.pexels.com/photos/14944496/pexels-photo-14944496.jpeg?auto=compress&cs=tinysrgb&w=1600')",

      iconSrc: "images/cloudy.png",
    },
    partlyCloudy: {
      backgroundUrl:
        "url('https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      iconSrc: "images/partly-cloudy.png",
    },
    Clear: {
      backgroundUrl:
        "url('https://images.pexels.com/photos/33622/fashion-model-beach-hat.jpg?auto=compress&cs=tinysrgb&w=1600')",
      iconSrc: "images/sunny.png",
    },
    Atmosphere: {
      backgroundUrl:
        "https://images.pexels.com/photos/355810/pexels-photo-355810.jpeg?auto=compress&cs=tinysrgb&w=1600",
      iconSrc:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
    },
    Snow: {
      backgroundUrl:
        "url('https://images.pexels.com/photos/760110/pexels-photo-760110.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      iconSrc: "images/snowy.png",
    },
    Rain: {
      backgroundUrl:
        "url('https://images.pexels.com/photos/9065305/pexels-photo-9065305.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      iconSrc: "images/rainy.png",
    },
    Thunderstorm: {
      backgroundUrl:
        "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&w=1600",
      iconSrc:
        "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png",
    },
    fog: {
      backgroundUrl:
        "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQd0RFNOGf7N_UKPZBKzTfuTJ_sZupLCbKiSbsL3lGavJcRfiukOWYgeLUyIRc73L5FPfdpYDP-kQMY0_XjGSw",
      iconSrc:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
    },
  };
  if (weatherDescription.includes("thunderstorm")) {
    return theme.Thunderstorm;
  } else if (weatherDescription.includes("rain")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#eae9ec";
    });
    return theme.Rain;
  } else if (weatherDescription.includes("snow")) {
    return theme.Snow;
  } else if (weatherDescription.includes("mist")) {
    return theme.Atmosphere;
  } else if (weatherDescription.includes("haze")) {
    return theme.Atmosphere;
  } else if (weatherDescription.includes("clear sky")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#eae9ec";
    });
    return theme.Clear;
  } else if (weatherDescription.includes("few clouds")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#eae9ec";
    });
    return theme.partlyCloudy;
  } else if (weatherDescription.includes("clouds")) {
    document.querySelectorAll("ul p").forEach((elm) => {
      elm.style.color = "#99979d";
    });

    return theme.Clouds;
  } else if (weatherDescription.includes("fog")) {
    return theme.fog;
  }
}
