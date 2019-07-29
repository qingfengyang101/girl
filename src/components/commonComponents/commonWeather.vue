<template>
    <div class="weather-warp">
        <mu-container
            
            v-for="(value, index) in weatherData"
            :key="index"
        >
            <mu-card class="weather-warp-container">
                <mu-card-header 
                    :title="getLang('TITLE_THE_WEATHER_FORECAST')"
                    :sub-title="getLang('TITLE_THE_WEATHER_FORECAST_KEEP_SMILE')"
                >
                    <mu-avatar
                        slot="avatar"
                    >
                        <img src="../../assets/img/wife-head.png">
                    </mu-avatar>
                </mu-card-header>
                <mu-card-media
                    :title="getLang('TITLE_BODY_FEELING_TEMPERATURE')"
                    :sub-title="handleGetWeatherBodyFeel(value.now.fl)"        
                >
                    <img 
                        :src="handleGetWeatherBodyFeelIcon(value.now.cond_code)" 
                        alt=""
                        class="weather-cloud-icon-style"
                    >
                </mu-card-media>
            </mu-card>
        </mu-container>
    </div>
</template>
<script>
export default {
    props: {
        weatherData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },

    methods: {
        handleGetWeatherBodyFeel: function (val) {
            if (!val) {
                return null;
            } 

            return val;
        },

        handleGetWeatherBodyFeelIcon: function (val) {
            console.log(val, "val");
            return '/static/img/weatherImg/icon-weather/'+ val +'.png';
        }
    }
}
</script>
<style lang="less" scoped>
    .weather-warp {
        position: absolute;
        top: 64px;
        right: 0;
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
