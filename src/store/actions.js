/**
 *  commit some modify funtion
 *  author: xuyinghao
 *  Date: 2018/6/30 17:51
 */

  import * as types from './mutation-types';
  import * as API from '../../static/api/API';
  import Vue from 'vue';
import { commonRequestSuccess, commonRequestError } from '../plugin/Https/HttpsRequset';
  const that = Vue.prototype;
  const eventBus = new Vue();

  export default {
    [types.GET_USER_NAME] ({commit}, payload) {
      that.$https.get(types.GET_USER_NAME, that.$api.LOGIN_GET_USER_NAME);
      commit(types.GET_USER_NAME, payload);
    },
    [types.GET_WIFE_LIKE] ({commit}, payload) {
      async function getWifeLike () {
        try {
          const wifeLike = await that.$https.get(that.$api.GET_WIFE_LIKE);
          const wifeInfoBase = await that.$https.get(that.$api.WIFE_INFO_BASE);

          return {
            wifeLike,
            wifeInfoBase
          };

        } catch (error) {}
      }

      getWifeLike().then((res) => {

        that.EventBus.emit(types.GET_WIFE_LIKE, res);
        commit(types.GET_WIFE_LIKE, res);
      });
    },
    [types.USER_LOGIN_SYSTEM] ({commit}, payload) {
      if (that.$lodash.isObject(payload)) {
        that.EventBus.emit(types.USER_LOGIN_SYSTEM, payload);
        commit(types.USER_LOGIN_SYSTEM, payload);
      } else {
        that.EventBus.emit(types.USER_LOGIN_ERROR, payload);
      }
    },
    [types.WEATHER_LUOHE_REQUERST] ({commit}, payload) {

      async function requestWeather () {
        console.log(that.$https.get, 'get....')
        let weatherResult = await that.$https.get(
            types.WEATHER_LUOHE_REQUERST,
            that.$api.WEATHER_LUOHE_REQUERST_API
          );

        console.log(weatherResult, 'weatherResult...');
          return {
            weatherResult
          };
      }

      requestWeather().then( ( data ) => {
        commit(types.WEATHER_LUOHE_REQUERST, data);
        commonRequestSuccess(types.WEATHER_LUOHE_REQUERST, data);
      }).catch (error => {
        commonRequestError(types.WEATHER_LUOHE_REQUERST_ERROR, error);
      })
    }
  }
