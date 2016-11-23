<template>
    <div id="app">
        <div class="placeholder-prev"></div>
        <sticky top="0">
            <div class="sticky">sticky</div>
        </sticky>
    </div>
</template>
<script>
import Sticky from '../src/Sticky';

export default {
    components: {
        Sticky
    }
};
</script>
<style lang="less">
body {
    margin: 0;
    height: 1500px;
}

#app {
    border: 2px solid red;
    height: 600px;
}

.placeholder-prev {
    height: 200px;
}

.sticky {
    background-color: rgba(0, 0, 0, 0.2);
    height: 50px;
}
</style>
