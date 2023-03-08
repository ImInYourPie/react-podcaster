const makeDateUtils = () => {
  return {
    isAfter: (date, dateToCompare) => new Date(date) > new Date(dateToCompare),
    subtractHours: (date, hours) => {
      const result = new Date(date);
      result.setHours(result.getHours() - hours);
      return result;
    },
    addHours: (date, hours) => {
      const result = new Date(date);
      result.setHours(result.getHours() + hours);
      return result;
    },
    getDaysPassed: (date, dateToCompare) => {
      const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
      const diffDays = Math.round(
        Math.abs((new Date(date) - new Date(dateToCompare)) / oneDay)
      );
      return diffDays;
    },
    msToMinutes: (ms) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);

      return (
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds
      );
    },
    secondsToHours: (seconds) => {
      if (!Number.isInteger(seconds) || seconds < 0) {
        throw new Error("Input value must be a non-negative integer");
      }

      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const formatUnit = (unit) => (unit < 10 ? `0${unit}` : unit.toString());

      const formattedTime = [hours, minutes, remainingSeconds]
        .map(formatUnit)
        .join(":");

      return formattedTime;
    },
    toLocale: (date) => {
      const parsedDate = new Date(date);
      return parsedDate.toLocaleDateString();
    },
  };
};

export default makeDateUtils;
