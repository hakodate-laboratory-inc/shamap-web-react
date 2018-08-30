export const getLocation = () => new Promise((resolve, reject) => {
  if(!navigator.geolocation) {
    reject("Can't catch your location...");
  }

  navigator.geolocation.getCurrentPosition(pos => {
    resolve([pos.coords.latitude, pos.coords.longitude]);
  });
});
