import dayjs from "dayjs";

export const formateDate = (time) => {
  return dayjs(time).format("YYYY-MM-DD hh:mm:ss");
};

// utils function here...
