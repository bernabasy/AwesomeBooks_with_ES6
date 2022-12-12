/* eslint-disable quotes */
import { DateTime } from "./luxon.js";

// eslint-disable-next-line import/prefer-default-export
export const Date = () => {
  // const DateTime = DateTime.now();
  const output = DateTime.local();
  document.getElementById("date").innerHTML = output.toLocaleString(
    // eslint-disable-next-line comma-dangle
    DateTime.DATETIME_MED_WITH_SECONDS
  );
};