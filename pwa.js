// O V A N - D E V E L O P
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker-ovan.js')
      .then(registration => {
        console.log(' Successfully Registered  ', registration);
      })
      .catch(error => {
        console.error(' Error ! ', error);
      });
  });
}
