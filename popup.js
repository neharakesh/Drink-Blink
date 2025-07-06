


document.addEventListener("DOMContentLoaded", () => {
  const setBtn = document.getElementById("setReminder");

  setBtn.addEventListener("click", () => {
    const interval = parseInt(document.getElementById("interval").value);

    if (!interval || interval <= 0) {
      alert("Please enter a valid time.");
      return;
    }

    chrome.runtime.sendMessage(
      { action: "resetAlarm", interval: interval },
      (response) => {
        if (chrome.runtime.lastError) {
          console.error("Message failed:", chrome.runtime.lastError.message);
        } else {
          alert(`Reminder set for every ${interval} minutes!`);
          console.log("Alarm set:", response);
        }
      }
    );
  });
});


