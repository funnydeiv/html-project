function clockUpd() {
  let clock = document.getElementById('clock');
  let date = new Date(); // (*)
  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

let timerId;

document.querySelector('#clock-a').addEventListener('click', clockStart);
document.querySelector('#close-clock').addEventListener('click', clockStop);

function clockStart() {
  timerId = setInterval(clockUpd, 1000);
  clockUpd();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

document.querySelector('.rate-form input[type=submit]')
    .addEventListener('click', rate);

function rate(e) {
    e.preventDefault();
    fetch('rate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.rate-form input[name=name]').value,
            message: document.querySelector('.rate-form input[name=message]').value
        })
    })
        .then(_ => document.querySelector('.rate-form').reset());
}