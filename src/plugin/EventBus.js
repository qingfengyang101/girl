import Vue from 'vue';

const EventBus = {
    install: function (Vue) {
        const bus = new Vue({
            methods: {
                emit: function (type, ...list) {
                    this.$emit(type, ...list);
                },
    
                on: function (type, callback) {
                    this.$on(type, callback);
                },
    
                off: function (type, callback) {
                    this.$off(type, callback);
                }
            }
        });
    
        Vue.prototype.EventBus = bus;  

    }
    
}

export default EventBus;
