<template>
    <div 
        class="weather-warp"
        v-if="weatherDataFlag"
    >
        <mu-container
            v-for="(value, index) in weatherData"
            :key="index"
        >
            <mu-card class="weather-warp-container">
                <mu-card-header 
                    :title="handleWeatherCityBasic(value)"
                    :sub-title="getLang('TITLE_THE_WEATHER_FORECAST_KEEP_SMILE')"
                >
                    <mu-avatar
                        slot="avatar"
                        class="weather-icon--head-portrait-box"
                    >
                        <img 
                            class="weather-icon-head-portrait"
                            src="../../assets/img/wife-head.png"
                        >
                    </mu-avatar>
                </mu-card-header>
                <mu-card-media
                    class="weather-icon-head-text"
                    :title="getLang('TITLE_BODY_FEELING_TEMPERATURE')"
                    :sub-title="handleGetWeatherBodyFeel(value.now.fl)"        
                >
                    <img 
                        :src="handleGetWeatherBodyFeelIcon(value.now.cond_code)" 
                        alt=""
                        class="weather-cloud-icon-style"
                    >
                </mu-card-media>
                  <mu-card-title 
                    :title="value.now.cond_txt" 
                    :sub-title="handleGetWeatherBodyFeelWind(value)"
                  >
                  </mu-card-title>
            </mu-card>
        </mu-container>
    </div>
</template>
<script>
import weatherIconModel from "../../assets/img/weatherImg/weather-icon";
import * as type from '../../store/mutation-types';

export default {
    props: {
        weatherData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },

    data () {
      return {
          weatherIconUrl: ''
      }  
    },
    computed: {
        weatherDataFlag: function () {
            if (!this.$lodash.isArray(this.weatherData)) {
                return false;
            };
            
            return true;
        }
    },

    methods: {
        handleWeatherCityBasic: function (value) {
            return `${value.basic.parent_city}${value.basic.location}${this.getLang('TITLE_THE_WEATHER_FORECAST')}`
        },
        handleGetWeatherBodyFeel: function (val) {
            if (!val) {
                return null;
            } 

            return val;
        },
        handleGetWeatherBodyFeelIcon: function (val) {
            if (!val) return null;
            let valStr = val + '',
                that = this;
                
            that.$lodash.map(weatherIconModel, (v, k) => {
                if ( valStr === v.id) {
                    that.weatherIconUrl = v.url;
                }
            });
            
            return that.weatherIconUrl;
        },
        handleGetWeatherBodyFeelWind: function (value) {
           if (!this.$lodash.isObject(value) || !value) return null;
           return `${value.now.wind_dir}  ${this.getLang('TITLE_THE_WEATHER_FORECAST_FENGLI')}： ${value.now.wind_sc}${this.getLang('TITLE_THE_WEATHER_FORECAST_FENGLI_DEEP')}`;
        }
    }
}
</script>
<style lang="less" scoped>
    .container {
        position: relative;
        padding: 0;
        height: auto;
    }
    .weather-warp {
        position: fixed;
        top: 64px;
        right: 0;
        width: 350px;
        height: auto;
    }

    .weather-icon--head-portrait-box {
        width: 100px !important;
        height: 110px !important;
    }

    .weather-warp-container {
        width: 100%;
        max-width: 375px;
        margin: 0 auto; 
    }

    .weather-cloud-icon-style {
        height: 150px;
    }
</style>
