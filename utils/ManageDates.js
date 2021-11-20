class ManageDates {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }
  #getMonthNumber = (month = this.month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.indexOf(month) + 1;
  };
  #getAllDays = (year = this.year, month = this.month) => {
    const monthNumber = getMonthNumber();
    const dateInput = new Date(year, monthNumber, 0);
    return dateInput.getDate();
  };

  getDateArray = (year = this.year, month = this.month) => {
    month = this.#getMonthNumber(month);
    const days = this.#getAllDays(year, month);
    const dateArray = [];

    for (let i = 1; i <= days; i++) {
      const date = new Date(year, month - 1, i);
      dateArray.push(date);
    }
    return dateArray;
  };
  /**
   *
   * @param {Array} occupied
   * @param {Number} year
   * @param {String | Number} month
   * @returns Date[] - Array of dates that are not occupied in the given year and month.
   */
  getAvailableDates = function (
    occupied,
    year = this.year,
    month = this.month
  ) {
    month = this.#getMonthNumber(month);
    const occupiedDays = occupied.map((date) => new Date(date).getDate());
    const availableDays = this.getDateArray();
    return availableDays
      .filter((date) => {
        return !occupiedDays.includes(new Date(date).getDate());
      })
      .map((date) => {
        return new Date(year, month, date);
      });
  };
  /**
   *
   * @param {Array} occupied
   * @param {Number} year
   * @param {String | Number} month
   * @returns Date[] - Array of days that are not occupied in the given year and month.
   */
  getAvailableDays = function (occupied, year = this.year, month = this.month) {
    month = this.#getMonthNumber(month);
    const occupiedDays = occupied.map((date) => new Date(date).getDate());
    const availableDays = this.getDateArray();
    return availableDays.filter((date) => {
      return !occupiedDays.includes(new Date(date).getDate());
    });
  };
}
modules.export = ManageDates;