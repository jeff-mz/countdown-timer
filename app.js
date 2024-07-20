"use strict ";
document.addEventListener("DOMContentLoaded", function () {
  // Set the initial countdown duration in seconds (8 days, 23 hours, 55 minutes, 41 seconds)
  const initialDuration = 8 * 24 * 60 * 60 + 23 * 60 * 60 + 55 * 60 + 41; // in seconds

  let timeRemaining = initialDuration;

  // Function to update the countdown
  function updateCountdown() {
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.querySelector(".day-numbers").textContent = "00";
      document.querySelector(".hour-numbers").textContent = "00";
      document.querySelector(".minute-numbers").textContent = "00";
      document.querySelector(".second-numbers").textContent = "00";
      return;
    }

    const days = Math.floor(timeRemaining / (60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = Math.floor(timeRemaining % 60);

    document.querySelector(".day-numbers").textContent = days
      .toString()
      .padStart(2, "0");
    document.querySelector(".hour-numbers").textContent = hours
      .toString()
      .padStart(2, "0");
    document.querySelector(".minute-numbers").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.querySelector(".second-numbers").textContent = seconds
      .toString()
      .padStart(2, "0");

    timeRemaining--;
  }

  // Initial call to set the countdown immediately upon loading
  updateCountdown();

  // Update the countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
});
