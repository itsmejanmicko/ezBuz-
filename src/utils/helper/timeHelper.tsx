export function updateDateTime() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  const time = date.toLocaleTimeString("en-US", { 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: true, 
    timeZone: "Asia/Manila" 
  });

  return { time, formattedDate };
}
