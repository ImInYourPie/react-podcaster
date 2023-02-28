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
  };
};

export default makeDateUtils;
