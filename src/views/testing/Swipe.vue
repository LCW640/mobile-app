<!-- views/testing/Swipe.vue -->
<template>
  <div>
      <mt-swipe :style="{height:h}"
                :speed="200"
                :auto="4000"
                :showIndicators="true"
                :continuous="true">
          <mt-swipe-item>
              <img src="/a.jpg">
          </mt-swipe-item>
            <mt-swipe-item>
                <img src="/b.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="/c.jpg">
            </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
export default {
    data() {
        return {
            h: '210px'
        }
    },
    mounted(){
        //
        let picw = 1242;
        let pich = 698;
        let screenw = window.screen.width;
        let swipeh = Math.floor(pich*screenw / picw)+'px';
        this.h = swipeh;
    }
}
</script>

<style scoped>
img{ width: 100%;}
</style>