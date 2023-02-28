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
  };
};

export default makeDateUtils;
