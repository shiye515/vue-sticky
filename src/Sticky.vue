<template>
    <div class="placeholder" v-el:placeholder :style="{top:top+'px','z-index':zIndex,bottom:bottom+'px'}">
        <slot></slot>
    </div>
    <div class="sticky" :style="stickyStyle" v-if="!stickySupport && stickyShowed">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        top: {
            type: Number,
            default: 0
        },
        bottom: {
            type: Number,
            default: 0
        },
        zIndex: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            stickySupport: false,
            stickyShowed: false,
            stickyHeight: 0,
            stickyStyle: {
                display: 'none',
                position: 'fixed',
                top: '-1000px',
                bottom: 'auto',
                zIndex: this.zIndex
            }
        }
    },
    watch: {
        'stickyStyle.display': function(display) {
            if (display === 'block') {
                this.stickyShowed = true;
            }
        }
    },
    methods: {
        scrollHandler() {
            var isHigher = this.$els.placeholder.getBoundingClientRect().top <= this.top;
            var isOver = this.$els.placeholder.parentElement.getBoundingClientRect().bottom - this.bottom < this.top + this.stickyHeight;
            if (!isHigher) {
                this.stickyStyle.display = 'none';
            } else if (isOver) {
                this.stickyStyle.display = 'block';
                this.stickyStyle.position = 'absolute';
                this.stickyStyle.top = 'auto';
                this.stickyStyle.bottom = this.bottom + 'px';
            } else {
                this.stickyStyle.display = 'block';
                this.stickyStyle.position = 'fixed';
                this.stickyStyle.bottom = 'auto';
                this.stickyStyle.top = this.top + 'px';
            }
        }
    },
    ready() {
        var position = window.getComputedStyle(this.$els.placeholder).position;
        this.stickySupport = position.indexOf('sticky') > -1;
        if (!this.stickySupport) {
            this.$els.placeholder.parentElement.style.position = 'relative';
            this.stickyHeight = this.$els.placeholder.getBoundingClientRect().height;
            window.addEventListener('scroll', this.scrollHandler, true);
            // 初始化
            this.scrollHandler();
        }
    },
    beforeDestroy() {
        if (!this.stickySupport) {
            window.removeEventListener('scroll', this.scrollHandler, true);
        }
    }
};
</script>
<style scoped>
.placeholder {
    position: -webkit-sticky;
    position: sticky;
}

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}

.placeholder > div,
.sticky > div {
    margin: 0!important;
}
</style>
