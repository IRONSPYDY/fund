function countdown() {
  const countDate = new Date("2024-03-07 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.getElementById("countdown").innerHTML = `
        <div>${textDay}<span>Days</span></div>
        <div>${textHour}<span>Hours</span></div>
        <div>${textMinute}<span>Minutes</span></div>
        <div>${textSecond}<span>Seconds</span></div>
    `;
}

// Update countdown every second
setInterval(countdown, 1000);

// Submit form
document
  .getElementById("donationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    // Here you can write code to handle donation submission, like sending it to the backend
    alert(`Donated: $${amount}`);
  });
