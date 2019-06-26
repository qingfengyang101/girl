
/**
 *  common constant for project
 *  author: xuyinghao
 *  Date: 2018/6/30 14:09
 */

const Constant = {
  WIFE_NAME: '赵换敏',
  WIFE_NAME_TODAY: '小公主',
  WIFE_SEX: '女',
  WIFE_AGE: 26,

  /** telephone **/
  WIFE_TELEPHONE: 18567118887,
  WIFE_TELEPHONE_NEW: 18239536167,

  /** place **/
  WIFE_LIKE_EAT_FOOD: '麻辣尚席',
  WIFE_BOY: '许英豪',
  WOMAN: 1,
  WIFE_BOARD_MESSAGE_COLS: 30,
  WIFE_BOARD_MESSAGE_ROWS: 3,

  /** status **/
  STATUS_0: 0,
  STATUS_1: 1,

  /** css opacity **/
  OVERLAY_OPACITY: 0.7,
  Z_INDEX_SHADE: 20141226,

  /** date **/
  WIFE_BIRTHDAY_DATE: 28,
  WIFE_BOY_LOVE_DATE: 9,
  WIFE_BOY_LOVE_MONTH: 3,
  WIFE_BIRTHDAY_MONTH: 6,

  /** transition  **/
  TRANSITION_FADE: 'fade',

  /** weather code for map image  he feng weather **/
  WEATHER_SUNNY_CODE: 100,
  WEATHER_CLOUDY_CODE: 101,
  WEATHER_FEW_CLOUDS: 102,
  WEATHER_PARTLY_CLOUDY_CODE: 103,
  WEATHER_OVERCAST_CODE: 104,
  WEATHER_WINDY_CODE: 200,
  WEATHER_LIGHT_BREEZE_CODE: 202,
  WEATHER_MODERATE_CODE: 203,
  WEATHER_FRESH_BREEZE_CODE: 204,
  WEATHER_STRONG_BREEZE_CODE: 205,
  WEATHER_HIGH_WIND_CODE: 206,
  WEATHER_GALE_CODE: 207,
  WEATHER_STRONG_CALE_CODE: 208,
  WEATHER_STORM_CODE: 209,
  WEATHER_VIOLENT_STORM_CODE: 210,
  WEATHER_HURRICANE_CODE: 211,
  WEATHER_TORNADO_CODE: 212,
  WEATHER_TROPICAL_STORM_CODE: 213,
  WEATHER__SHOWER_RAIN: 300,
  WEATHER_HEAVY_SHOWER_RAIN_CODE: 301,
  WEATHER_THUNDERSHOWER_CODE: 302,
  WEATHER_HEAVY_THUNDERSTORM_CODE: 303,
  WEATHER_THUNDERSHOWER_WITH_HAIL_CODE:304,
  WEATHER_LIGHT_RAIN_CODE: 305,
  WEATHER_MODERATE_RAIN_CODE: 306,
  WEATHER_HEAVY_RAIN_CODE: 307,
  WEATHER_EXTREME_RAIN_CODE: 308,
  WEATHER_DRIZZLE_RAIN_CODE: 309,
  WEATHER_STORM_CODE: 310,
  WEATHER_HEAVY_STORM_CODE: 311,
  WEATHER_SEVERE_STORM_CODE: 312,
  WEATHER_FREEZING_RAIN_CODE: 313,
  WEATHER_LIGHT_TO_MODERATE_RAIN_CODE: 314,
  WEATHER_MODERATE_TO_HEAVY_RAIN_CODE: 315,
  WEATHER_HEAVY_RAIN_TO_STORM_CODE: 316


}

const ConstantMap = {};

const constant = {
  install (Vue) {
    for (let key in Constant) {
      if (Constant.hasOwnProperty(key)) {
        ConstantMap[key] = Constant[key];
      }
    }

    Vue.prototype.$constant = ConstantMap;
  }
}

export default constant;
export const install = constant.install;


