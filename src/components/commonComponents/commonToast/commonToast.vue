<template>
    <div class="common-toast-warp">
        <div class="common-toast-container">
            <!-- 左面图标 -->
            <div 
                class="toast-title"
            >    
                <img :src="handleSeacherIconUrl" alt="提示图标">
            </div>
            <!-- 右面提示语 -->
            <div class="common-toast-right-box">
                <div>
                    {{ toastMessage }}
                </div>                
            </div>
        </div>
       
    </div>
</template>

<script>
    // 引入图标集
    import iconUrlModel from '';

    export default {
        name: "commonBoard",
        props: {
            iconUrl: {
                type: String,
                default: ""
            },
            toastMessage: {
                type: String,
                default: ""
            }
        },
        computed: {
            handleSeacherIconUrl: function () {
                return null;
            }
        }
    }
</script>

<style scoped>
    .common-toast-container {
        animation: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
</style>
