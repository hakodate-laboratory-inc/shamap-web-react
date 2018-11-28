import piexif from "piexifjs";

const getExif = image => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.onload = image => {
    try {
      const res = piexif.load(reader.result);
      if(!res.GPS[2] && !res.GPS[4]) throw Error;
      resolve({lat: res.GPS[2], lng: res.GPS[4]});
    } catch(e) {
      reject(e);
    }
  };
  reader.onerror = error => {
    reject(error);
  };
});

export const getLocation = images => new Promise(async(resolve, reject) => {
  try {
    const position = await getExif(images[0]);
    const lat = position.lat[0][0] / position.lat[0][1]
              + position.lat[1][0] / position.lat[1][1] / 60
              + position.lat[2][0] / position.lat[2][1] / 3600;
    const lng = position.lng[0][0] / position.lng[0][1]
              + position.lng[1][0] / position.lng[1][1] / 60
              + position.lng[2][0] / position.lng[2][1] / 3600;
    resolve([lat, lng]);
  } catch(e) {
    if(!navigator.geolocation) {
      reject("Can't catch your location...");
    }

    navigator.geolocation.getCurrentPosition(pos => {
      resolve([pos.coords.latitude, pos.coords.longitude]);
    }, err => {
      reject(err);
    }, {
      enableHighAccuracy: true,
    });
  }
});
