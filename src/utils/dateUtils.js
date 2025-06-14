import dayjs from "dayjs";

export const isSameDay = (d1, d2) => dayjs(d1).isSame(d2, "day");
export const getStartDayOfMonth = (date) => dayjs(date).startOf("month").day();
export const getDaysInMonth = (date) => dayjs(date).daysInMonth();
export const formatMonthYear = (date) => dayjs(date).format("MMMM YYYY");
export const isToday = (date) => dayjs().isSame(date, "day");
