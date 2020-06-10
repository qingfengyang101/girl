<template>
    <div class="common-alert">
        <div>
             {{ alertMessage }}
        </div>

        <button class="my-button">

        </button>
    </div >
</template>

<script>
export default {
    data () {
        return {
            alertMessage: '',
            flag: true
        }
    },

    methods: {
        close () {
            setTimeout(( ) => {
                this.flag = false; // 修改关闭状态
                this.$el.remove();
            }, 2000);
        }
    },

    mounted: {

    },

    computed: {
        
    },

    watch: {
    }

}
</script>

<style lang="css">
    
</style>