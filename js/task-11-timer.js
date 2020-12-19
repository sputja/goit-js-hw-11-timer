/* Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
 */
const refs = {
  days: document.querySelector('[data-value = "days"]'),
  hours: document.querySelector('[data-value = "hours"]'),
  mins: document.querySelector('[data-value = "mins"]'),
  secs: document.querySelector('[data-value = "secs"]'),
};

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

// const timer = {
//   start() {
//     const starTime = new Date(2020, 11, 31, 0, 0, 0, 0);

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = starTime.getTime() - currentTime;
//       updateTime(deltaTime);
//     }, 1000);
//   },
// };

// timer.start();
// function updateTime(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   refs.days.textContent = days;
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   refs.hours.textContent = hours;
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   refs.mins.textContent = mins;
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   refs.secs.textContent = secs;
//   // console.log(`${days}: ${hours}: ${mins}: ${secs}:`);
// }

class CountdownTimer {
  constructor({ targetDate }) {
    this.targetDate = targetDate;
    setInterval(this.timer, 1000);
  }
  timer = () => {
    function pad(value) {
      return String(value).padStart(2, "0");
    }
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const days = pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
    refs.days.textContent = days;
    const hours = pad(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    refs.hours.textContent = hours;
    const mins = pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
    refs.mins.textContent = mins;
    const secs = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
    refs.secs.textContent = secs;
  };
}

new CountdownTimer({ targetDate: new Date("Jan 19, 2021") });
