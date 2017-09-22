import moment from 'moment';

/** 获取当前时间 */
const getTodayTime = ( value ) => {
  const today = moment();

  today.locale( value.locale() ).utcOffset( value.utcOffset() );

  return today;
};

/** 对时间进行一个字符串拼接 */
const getTitleString = ( value ) => {
  return `${ value.year() }-${ value.month() + 1 }-${ value.date() }`;
};

export { getTodayTime, getTitleString };
