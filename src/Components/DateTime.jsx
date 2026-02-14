import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const day = now.toLocaleDateString("en-US", { weekday: "short" });
  const month = now.toLocaleDateString("en-US", { month: "short" });
  const date = now.getDate();
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateTimeText = `${day} ${month} ${date} ${time}`;

  return (
    <div className="px-1 py-0.5">
      <p className="font-sans text-sm">{dateTimeText}</p>
    </div>
  )
}

export default DateTime;
