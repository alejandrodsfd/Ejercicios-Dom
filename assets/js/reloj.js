const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clokTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clokTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clokTempo);
      // d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
export function alarm(sound, btnplay, btnStop) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;

  $alarm.addEventListener("ended", () => {
    document.querySelector(btnplay).disabled = false;
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnplay)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      });
      e.target.disabled = true
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo)
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnplay).disabled = false
    }
  });
}
