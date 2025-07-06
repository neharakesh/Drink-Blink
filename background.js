chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "resetAlarm") {
    const interval = message.interval;

    chrome.alarms.clear("reminderAlarm", () => {
      chrome.alarms.create("reminderAlarm", {
        delayInMinutes: interval,
        periodInMinutes: interval
      });

      console.log("⏰ Alarm set for", interval, "minutes");
      sendResponse({ status: "alarm set" });
    });

    return true; 
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminderAlarm") {
    console.log("🔔 Reminder Alarm Triggered");

    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "💧 Drink Water & Stretch!",
      message: "Your body’s whisper is thirst—don’t wait until it screams.A five-minute stretch can unlock an hour of focus.💪",
      requireInteraction: true,
      priority: 2
    });

    
  }
});
