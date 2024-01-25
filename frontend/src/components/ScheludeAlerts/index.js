import React, { useEffect } from "react";

const ScheduledAlerts = () => {
  useEffect(() => {
    const scheduleAlerts = () => {
      const currentTime = new Date();
      const alerts = [
        { time: "14:55", message: "Alert at 2:55 PM" },
        { time: "16:55", message: "Alert at 4:55 PM" },
        { time: "18:55", message: "Alert at 6:55 PM" },
      ];

      alerts.forEach((alert) => {
        const [hours, minutes] = alert.time.split(":");
        const alertTime = new Date(currentTime);
        alertTime.setHours(parseInt(hours, 10));
        alertTime.setMinutes(parseInt(minutes, 10));
        alertTime.setSeconds(0);

        const timeDiff = alertTime.getTime() - currentTime.getTime();

        if (timeDiff > 0) {
          setTimeout(() => {
            alertUser(alert.message);
          }, timeDiff);
        }
      });
    };

    const alertUser = (message) => {
      alert(message);
    };

    scheduleAlerts();
  }, []);

  return null;
};

export default ScheduledAlerts;
