<template>
    <div>
        <span
            class="weui-switch"
            :class="{ 'weui-switch-on': is_checked }"
            :value="value"
            @click="toggle"
        ></span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            is_checked: this.value,
        };
    },
    watch: {
        is_checked(val) {
            this.$emit('input', val);
        },
    },
    methods: {
        toggle() {
            this.is_checked = !this.is_checked;
        },
    },
};
</script>

<style>
.weui-switch {
    display: block;
    position: relative;
    width: 20px;
    height: 6px;
    /* border: 1px solid #dfdfdf; */
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #dfdfdf;
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
}
.weui-switch:before {
    content: ' ';
    position: absolute;
    top: -1px;
    left: -2px;
    width: 21px;
    height: 6px;
    border-radius: 15px;
    background-color: #67bcf5;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
}
.weui-switch:after {
    content: ' ';
    position: absolute;
    top: -4px;
    left: -2px;
    width: 12px;
    height: 12px;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
}
.weui-switch-on {
    border-color: #67bcf5;
    background-color: #67bcf5;
}
.weui-switch-on:before {
    border-color: #67bcf5;
    background-color: #67bcf5;
}
.weui-switch-on:after {
    transform: translateX(10px);
}
</style>
