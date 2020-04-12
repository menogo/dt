<template>
    <div class="page-new">
        <div class="container">
            <div class="container__meta">
                <div class="meta">
                    <div class="meta__status">
                        <div class="meta__status-title">{{ dayTopTime || '0000-00-00 00:00:00' }} 更新</div>
                        <div class="meta__status-act" @click="switchToOldVersion">
                            <span class="art-active">旧</span>
                            <i class="icon-exchange"></i>
                            <span>新</span>
                        </div>
                    </div>
                    <div class="meta__sum">
                        <div class="meta__sum-item">
                            <div class="title">交易率（笔/分）</div>
                            <div class="num">{{ dayTotalTradeRate || '--' }}</div>
                        </div>
                        <div class="meta__sum-item">
                            <div class="title">日交易量（笔）</div>
                            <div class="num">{{ dayTotalTradeNum || '--' }}</div>
                        </div>
                        <div class="meta__sum-item">
                            <div class="title">响应时间（ms）</div>
                            <div class="num">{{ dayTotalTime || '--' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container__detail">
                <section>
                    <div class="container__detail-item ellipsis" @click="handleQRCZDetailClick(1, qRCZDetail.TARGET_NAME)">
                        <div class="title ellipsis">
                            <!-- {{ qRCZDetail.TARGET_NAME || '充值' }} -->
                            充值
                        </div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率（笔/分）</span><span class="sumup">{{ qRCZDetail.TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量（笔）</span><span class="sumup">{{ qRCZDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间（ms）</span><span class="sumup">{{ qRCZDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率（%）</span><span class="sumup">{{ qRCZDetail.SUC_RATE || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率（%）</span><span class="sumup">{{ qRCZDetail.S_SUC_RATE || '--' }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="container__detail-item ellipsis ml-10" @click="handleQRQTDetailClick(2, qRQTDetail.TARGET_NAME)">
                        <div class="title ellipsis">
                            <!-- {{ qRQTDetail.TARGET_NAME || '其他' }} -->
                            其他
                        </div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率（笔/分）</span><span class="sumup">{{ qRQTDetail.TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量（笔）</span><span class="sumup">{{ qRQTDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间（ms）</span><span class="sumup">{{ qRQTDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率（%）</span><span class="sumup">{{ qRQTDetail.SUC_RATE || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率（%）</span><span class="sumup">{{ qRQTDetail.S_SUC_RATE || '--' }}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container__chart">
                <div class="container__chart-title">
                    <!-- <div class="chart-title ellipsis">{{ chartTitle }}</div> -->
                    <div class="chart-title ellipsis">测试</div>
                    <div class="chart-tabs">
                        <div class="tab" :class="tabIndex === 1 ? 'is-active' : ''" @click="switchToTRate(1)">
                            交易率
                        </div>
                        <div class="tab u-border-left-none" :class="tabIndex === 2 ? 'is-active' : ''" @click="switchToTSum(2)">
                            交易量
                        </div>
                        <div class="tab u-border-left-none" :class="tabIndex === 3 ? 'is-active' : ''" @click="switchToRTime(3)">
                            响应时间
                        </div>
                        <div class="tab u-border-left-none" :class="tabIndex === 4 ? 'is-active' : ''" @click="switchToSRate(4)">
                            成功率
                        </div>
                    </div>
                </div>
                <div class="container__chart-meta">
                    <div class="meta"></div>
                    <div class="toolbar"></div>
                </div>
                <div class="container__chart-body">
                    <!-- Slider main container -->
                    <section class="toolwrap">
                        <div class="toobar">
                            <div class="toobar__summary">
                                <span v-show="tabIndex === 1">
                                    历史峰值：158笔/分(2019-11-11 00:00:01)
                                </span>
                            </div>
                            <div class="toobar__switch">
                                1小时
                                <div class="switch">
                                    <dt-switch v-model="dataType" @input="onSwitchChange"></dt-switch>
                                </div>
                                1天
                            </div>
                        </div>
                        <div class="swiper-container--copy">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><!-- index0 --></div>
                                <div class="swiper-slide"><!-- index1 --></div>
                                <div class="swiper-slide"><!-- index2 --></div>
                            </div>
                        </div>
                    </section>

                    <div class="swiper-container swiper-no-swiping">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide">
                                <!-- index0 总览 -->
                                <div id="js-chart-total" style="width: 100%; height:180px;"></div>
                            </div>
                            <div class="swiper-slide">
                                <!-- index1 二维码充值 -->
                                <div id="js-chart-qrsc" style="width: 100%; height:180px;">
                                    2
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <!-- index2 二维码其它 -->
                                <div id="js-chart-qrxd" style="width: 100%; height:180px;">
                                    3
                                </div>
                            </div>
                        </div>
                        <!-- If we need pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import DtSwitch from '@/components/switch.vue';

import Swiper from 'swiper';
let chartSwiper = '';
// import API from '@/api';
const mockData = require('../mock/whapi_old.json');
console.log(mockData);
let data = [];
let now = +new Date();

function getRandomNumberByRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}

// let oneDay = 15 * 60000;
// let value = (Math.random() * 100).toFixed();
// let day = 24 * 60 * 60000;
let tt = new Date(+now + 60000).getTime();
for (let i = 1; i <= 72; i++) {
    tt = tt + 20 * 60000;
    console.log(`[${tt}, ${getRandomNumberByRange(1, 100)}]`);
    data.push(randomData());
}

function randomData() {
    now = new Date(+now + 60000); // 60000 1分钟
    // value = value + Math.random() * 21 - 10;
    // value = value * 1;
    let res = {
        // name: now.toString(),
        value: [
            // [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            now.getTime(),
            // Math.round(value),
            (Math.random() * 100).toFixed() * 1,
        ],
    };
    return res;
}
console.log(data);
const chartOpt = {
    color: ['#FFEE58'],
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(8,18,50,0.80)',
        textStyle: {
            fontSize: '10',
        },
        axisPointer: {
            // 去掉移动的指示线
            type: 'none',
        },
    },
    xAxis: {
        type: 'time',
        interval: (60 * 4 * 60000) / 5,
        axisLabel: {
            color: '#92B9D9',
            fontSize: 10,
            // 上, 右, 下, 左
            // padding: [0, 11, 0, 11],
            // showMinLabel: false,
            // showMaxLabel: false,
            align: 'center',
            // margin: 0,
            formatter: function(value) {
                // 格式化成月/日，只在第一个刻度显示年份
                console.log(value);
                let date = new Date(value);
                let h = date.getHours();
                let m = date.getMinutes();

                if (h <= 9) {
                    h = '0' + h;
                }

                if (m <= 9) {
                    m = '0' + m;
                }

                let texts = [h, m];

                return texts.join(':');
            },
        },
        axisLine: {
            lineStyle: {
                color: '#2A396E',
            },
        },
        axisTick: {
            show: false,
            // inside: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['red'],
                width: 1,
                type: 'solid',
            },
        },
    },
    yAxis: {
        type: 'value',
        interval: 25,
        axisLabel: {
            color: '#92B9D9',
            // margin: 0,
            // padding: [0, 0, 10, -5],
            // inside: true,
            fontSize: 10,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#2A396E'],
                width: 1,
                type: 'solid',
            },
        },
    },
    grid: {
        top: '20%',
        left: '9%',
        right: '6%',
        bottom: '15%',
    },
    series: [],
};

export default {
    name: 'Home',
    data() {
        return {
            dataType: false,
            qRCZDetail: {}, // 二维码重置详情
            qRQTDetail: {}, // 二维码其它详情
            chartSwiper: '',
            tabIndex: 1,
            slideIndex: 0,
            dayTopTime: '',
            dayTotalTradeRate: '',
            dayTotalTradeNum: '',
            dayTotalTime: '',
            daySucRate: '',
            dayTopNum: '', // 日历史峰值
            chartTitle: '武汉地铁',
            bullet: '',
        };
    },
    components: {
        DtSwitch,
    },
    methods: {
        // 切换小时/天
        onSwitchChange() {
            // 1、找到当前的 slideIndex
            // 2、根据小时的数据重新画图
            console.log(this.dataType);
        },
        // 点击交易率 tab
        switchToTRate(tabIndex) {
            this.tabIndex = tabIndex;
            console.log('current slideIndex: ', this.slideIndex);
            console.log('current tabIndex: ', tabIndex);
            this.drawChart(this.slideIndex, {
                series: [
                    {
                        name: '业务',
                        symbol: 'none',
                        data: data || this.genChart(),
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                ],
            });
        },
        // 点击交易量 tab
        switchToTSum(tabIndex) {
            this.tabIndex = tabIndex;

            // 1.检查当前是在哪个详情/slide
            // 2.在当前slide下更新折线图
            console.log('current slideIndex: ', this.slideIndex);
            console.log('current tabIndex: ', tabIndex);
            this.drawChart(this.slideIndex, {
                series: [
                    {
                        name: '业务',
                        symbol: 'none',
                        data: data || this.genChart(),
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                ],
            });
        },
        // 点击响应时间 tab
        switchToRTime(tabIndex) {
            this.tabIndex = tabIndex;
            console.log('current slideIndex: ', this.slideIndex);
            console.log('current tabIndex: ', tabIndex);
            this.drawChart(this.slideIndex, {
                series: [
                    {
                        name: '业务',
                        symbol: 'none',
                        data: data || this.genChart(),
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                ],
            });
        },
        // 点击成功率 tab
        switchToSRate(tabIndex) {
            this.tabIndex = tabIndex;
            console.log('current slideIndex: ', this.slideIndex);
            console.log('current tabIndex: ', tabIndex);
            this.drawChart(this.slideIndex, {
                series: [
                    {
                        name: '业务',
                        data: data || this.genChart(),
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                ],
            });
        },
        // 点击二维码充值详情
        handleQRCZDetailClick(slideIndex, chartTitle) {
            console.log(slideIndex);
            chartSwiper.slideTo(slideIndex);
            this.chartTitle = chartTitle;
            this.slideIndex = slideIndex;
            this.tabIndex = 1;
            this.updatePaginationActive(slideIndex);
            this.drawChart(slideIndex, {
                series: [
                    {
                        name: '业务',
                        data: [23, 25, 55, 75, 99],
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                ],
            });
        },
        // 点击二维码其它详情
        handleQRQTDetailClick(slideIndex, chartTitle) {
            console.log(slideIndex);
            chartSwiper.slideTo(slideIndex);
            this.chartTitle = chartTitle;
            this.slideIndex = slideIndex;
            this.tabIndex = 1;
            this.updatePaginationActive(slideIndex);
            this.drawChart(slideIndex, {
                series: [
                    {
                        name: '业务',
                        data: [93, 85, 55, 75, 100],
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                ],
            });
        },
        // 切换到旧版
        switchToOldVersion() {
            chartSwiper.slideTo(0);
            this.$router.replace('/');
        },
        // 修改pagination状态
        updatePaginationActive(index) {
            this.bullet.forEach(item => {
                item.classList.remove('swiper-pagination-bullet-active');
            });
            this.bullet[index].classList.add('swiper-pagination-bullet-active');
        },
        // 画折线图
        drawChart(index = 0, opt = {}) {
            // type 1-交易率；2-交易量；3-响应时间；4-成功率

            // 1、根据 slideIndex 来找到相应的详情画图
            // 2、根据 tab 的不同来展示不同的 legend

            let el = 'js-chart-total';
            if (index === 1) {
                el = 'js-chart-qrsc';
            }

            if (index === 2) {
                el = 'js-chart-qrxd';
            }

            if (index === 3) {
                el = 'js-chart-qrcx';
            }

            if (index === 4) {
                el = 'js-chart-qrth';
            }

            let option = {
                color: ['#FFEE58'],
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(8,18,50,0.80)',
                    textStyle: {
                        fontSize: '10',
                    },
                    axisPointer: {
                        // 去掉移动的指示线
                        type: 'none',
                    },
                },
                xAxis: {
                    type: 'time',
                    interval: (60 * 4 * 60000) / 5,
                    axisLabel: {
                        color: '#92B9D9',
                        fontSize: 10,
                        // 上, 右, 下, 左
                        // padding: [0, 11, 0, 11],
                        // showMinLabel: false,
                        // showMaxLabel: false,
                        align: 'center',
                        // margin: 0,
                        formatter: function(value) {
                            // 格式化成月/日，只在第一个刻度显示年份
                            console.log(value);
                            let date = new Date(value);
                            let h = date.getHours();
                            let m = date.getMinutes();

                            if (h <= 9) {
                                h = '0' + h;
                            }

                            if (m <= 9) {
                                m = '0' + m;
                            }

                            let texts = [h, m];

                            return texts.join(':');
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#2A396E',
                        },
                    },
                    axisTick: {
                        show: false,
                        // inside: true,
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['red'],
                            width: 1,
                            type: 'solid',
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    interval: 25,
                    axisLabel: {
                        color: '#92B9D9',
                        // margin: 0,
                        // padding: [0, 0, 10, -5],
                        // inside: true,
                        fontSize: 10,
                    },
                    axisLine: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#2A396E'],
                            width: 1,
                            type: 'solid',
                        },
                    },
                },
                grid: {
                    top: '20%',
                    left: '9%',
                    right: '6%',
                    bottom: '15%',
                },
                series: opt.series || [],
            };

            // if (type === 4) {
            //     option.legend = {
            //         data: ['业务', '系统'],
            //         left: 10,
            //         padding: [5, 0, 0, 0],
            //         itemHeight: 5, // 图例的高度
            //         textStyle: {
            //             fontSize: 10,
            //             color: '#fff',
            //         },
            //     };
            // }

            const chart = window.echarts.init(document.getElementById(el));
            chart.setOption(option);
        },
        // 更新 chartTitle
        updateChartTitle(slideIndex) {
            if (slideIndex === 0) {
                return '总览';
            }

            if (slideIndex === 1) {
                return '二维码生成';
            }

            if (slideIndex === 2) {
                return '二维码下单';
            }

            if (slideIndex === 3) {
                return '二维码查询';
            }

            if (slideIndex === 4) {
                return '二维码退货';
            }
        },
        genChart() {
            let series = [];

            for (let i = 1; i <= 60; i++) {
                let item = [];

                if (i <= 9) {
                    item.push(120 + i);
                } else {
                    item.push(12 + i);
                }

                // item.push(i);
                item.push((Math.random() * 100).toFixed());
                series.push(item);
            }
            console.log(series);
            return series;
        },
    },
    async mounted() {
        // const res = await this.$axios(
        //     'https://my-json-server.typicode.com/menogo/jsonapi/whapi_new',
        // );

        const res = mockData;

        // 二维码充值
        if (res.index_show.PLF35793) {
            this.qRCZDetail = res.index_show.PLF35403;
        }

        // 二维码其它
        if (res.index_show.PLF35786) {
            this.qRCZDetail = res.index_show.PLF35786;
        }

        // this.dayTopTime = res.day_top_time;
        // this.dayTotalTradeRate = dayData.day_total_trade_rate;
        // this.dayTotalTradeNum = dayData.day_total_trade_num;
        // this.dayTotalTime = dayData.day_total_time;
        // this.daySucRate = dayData.day_suc_rate;
        // this.dayTopNum = dayData.day_top_num;

        const totalChart = window.echarts.init(document.getElementById('js-chart-total'));
        if (this.tabIndex !== 4) {
            chartOpt.legend = '';
        }
        console.log('this.option', chartOpt);
        totalChart.setOption(chartOpt);

        chartSwiper = new Swiper('.swiper-container', {
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        const vm = this;
        const chartCC = new Swiper('.swiper-container--copy', {
            on: {
                slideNextTransitionEnd: function() {
                    chartSwiper.slideNext();
                    console.log(chartCC.activeIndex);
                    vm.chartTitle = vm.updateChartTitle(chartCC.activeIndex);
                },

                slidePrevTransitionEnd() {
                    chartSwiper.slidePrev();
                    vm.chartTitle = vm.updateChartTitle(chartCC.activeIndex);
                },
            },
        });

        window.chart = chartSwiper;
        this.bullet = document.querySelectorAll('.swiper-pagination-bullet');
    },
};
</script>

<style lang="scss">
.container__chart-title {
    height: 26px;
    display: flex;
    line-height: 26px;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;
}

.chart-title {
    flex-grow: 1;
    text-align: left;
    font-family: PingFangSC-Medium;
    font-size: 15px;
    width: 30%;
    color: #ffffff;
}

.chart-tabs {
    display: flex;
    // align-items: center;
    height: 26px;
    line-height: 26px;
}

.chart-tabs .tab {
    width: 64px;
    text-align: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #4ca5ef;
    font-size: 12px;
}

.chart-tabs .tab:first-child {
    border-radius: 2px 0 0 2px;
}

.chart-tabs .tab:last-child {
    border-radius: 0 2px 2px 0;
}

.chart-tabs .tab.is-active {
    background: #4ca5ef;
    color: #ffffff;
}

.page-new,
.container {
    height: 100%;
    height: 100vh;
}

.container {
    color: #ffffff;
}

.container__meta {
    padding: 10px;
    height: 100px;
    background-image: linear-gradient(0deg, #162458 0%, #2b4d7d 100%);
}

.meta .meta__status {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    height: 24px;
    line-height: 24px;
}

.meta .meta__status-title {
    flex-grow: 1;
    text-align: left;
}

.meta .meta__status-act {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    border-radius: 3px;
    font-size: 10px;
    width: 68px;
    line-height: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.meta .meta__status-act .icon-exchange {
    margin-left: 3px;
    margin-right: 3px;
    position: relative;
    top: -1px;
}

.meta__sum {
    margin-top: 10px;
    display: flex;
    text-align: center;
    justify-content: space-between;
    font-size: 12px;
}

.meta__sum .num {
    color: #ffee58;
    font-size: 24px;
    line-height: 24px;
    padding-top: 4px;
    font-family: PingFangSC-Medium;
}

.container__detail {
    padding: 10px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #ffffff;
}

.container__detail > section {
    display: flex;
    justify-content: space-between;
}

.container__detail .container__detail-item {
    color: #addaff;
    // opacity: 0.3;
    border: 1px solid rgba(142, 204, 255, 0.3);
    border-radius: 2px;
    flex-grow: 1;
    margin-bottom: 10px;
    padding: 10px;
    text-align: left;
}

.container__detail .container__detail-item .title {
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #ffffff;
    border-bottom: 1px solid rgba(142, 204, 255, 0.3);
    padding-bottom: 6px;
    height: 27px;
}

.container__detail .container__detail-item .list .item {
    display: flex;
    align-items: center;
    margin-top: 6px;
}

.container__detail .container__detail-item .list .item .type {
    flex-grow: 1;
}
.container__detail .container__detail-item .list .item .sumup {
    font-family: PingFangSC-Medium;
    font-size: 13px;
    color: #ffffff;
}

.container__chart-body {
    width: 100%;
    width: 100vw;
    position: relative;
}

.swiper-container {
    width: 100%;
    height: 190px;
    box-sizing: border-box;
    position: absolute;
    // border: 1px solid red;
}

.swiper-slide {
    height: 100%;
}

.toolwrap {
    // border: 1px solid red;
    position: absolute;
    overflow: hidden;
    height: 24px;
    width: 100%;
}

.swiper-container--copy {
    height: 40px;
    // border: 1px solid green;
    position: absolute;
    top: -10px;
    width: 80%;
    z-index: 999;
}

.toobar {
    padding: 0 10px;
    font-size: 12px;
    display: flex;
    position: absolute;
    width: 100%;
}

.toobar .toobar__summary {
    width: 80%;
    flex-grow: 1;
    text-align: left;
}

.toobar .toobar__switch {
    display: flex;
    align-items: flex-start;
    position: absolute;
    right: 10px;
    z-index: 9999;
}

.toobar .toobar__switch .switch {
    padding-top: 6px;
    margin-left: 2px;
    margin-right: 2px;
}
</style>
