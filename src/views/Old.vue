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
                            <div class="title">交易率(笔/分)</div>
                            <div class="num">{{ dayTotalTradeRate || '--' }}</div>
                        </div>
                        <div class="meta__sum-item">
                            <div class="title">日交易量(笔)</div>
                            <div class="num">{{ dayTotalTradeNum || '--' }}</div>
                        </div>
                        <div class="meta__sum-item">
                            <div class="title">响应时间(ms)</div>
                            <div class="num">{{ dayTotalTime || '--' }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container__detail">
                <section>
                    <div class="container__detail-item" @click="handleQRSCZetailClick(1, qRSCZetail.title)">
                        <div class="title">
                            {{ qRSCZetail.title || '充值' }}
                        </div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率(笔/分)</span>
                                <span class="sumup">{{ qRSCZetail.TRADE_NUM || '--' }} </span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量(笔)</span>
                                <span class="sumup">{{ qRSCZetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间(ms)</span>
                                <span class="sumup">{{ qRSCZetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率(%)</span>
                                <span class="sumup" :class="qRSCZetail.SUC_RATE > 0 && qRSCZetail.SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRSCZetail.SUC_RATE || '--' }}
                                </span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率(%)</span>
                                <span class="sumup" :class="qRSCZetail.S_SUC_RATE > 0 && qRSCZetail.S_SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRSCZetail.S_SUC_RATE || '--' }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="container__detail-item ml-10" @click="handleQRQTDetailClick(2, qRQTDetail.title)">
                        <div class="title">
                            {{ qRQTDetail.title || '其他' }}
                        </div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率(笔/分)</span>
                                <span class="sumup">{{ qRQTDetail.TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量(笔)</span>
                                <span class="sumup">{{ qRQTDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间(ms)</span>
                                <span class="sumup">{{ qRQTDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率(%)</span>
                                <span class="sumup" :class="qRQTDetail.SUC_RATE > 0 && qRQTDetail.SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRQTDetail.SUC_RATE || '--' }}
                                </span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率(%)</span>
                                <span class="sumup" :class="qRQTDetail.S_SUC_RATE > 0 && qRQTDetail.S_SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRQTDetail.S_SUC_RATE || '--' }}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="container__chart">
                <div class="container__chart-title">
                    <div class="chart-title">{{ chartTitle }}</div>
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
                                <span v-show="tabIndex === 1 || tabIndex === 2">
                                    {{ chartMetaTitle }}
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
                                <!-- index1 充值 -->
                                <div id="js-chart-qrcz" style="width: 100%; height:180px;"></div>
                            </div>
                            <div class="swiper-slide">
                                <!-- index2 其他 -->
                                <div id="js-chart-qrqt" style="width: 100%; height:180px;"></div>
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
//import API from '@/api';
const mock = require('../mock/get_old_data.json');
// const PLF35793 = require('../mock/PLF35793.json'); // 充值
// const PLF35786 = require('../mock/PLF35786.json'); // 其他

export default {
    name: 'Home',
    data() {
        return {
            apiRes: {},
            dataType: false,
            qRSCZetail: {}, // 二维码生成详情
            qRQTDetail: {}, // 二维码下单详情
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
            hChartData: {},
            dChartData: {},
            hourTopTradeNumTime: '',
            hourTopTradeNum: 0,
            dayTopTradeNumTime: '',
            dayTopTradeNum: 0,
            hourTopTradeRateTime: '',
            hourTopTradeRate: 0,
            dayTopTradeRateTime: '',
            dayTopTradeRate: 0,
            chartMetaTitle: '',
        };
    },
    components: {
        DtSwitch,
    },
    methods: {
        // 毫秒转换 YYYY/MM/DD HH:mm:ss
        formatDate(timestemp) {
            let date = new Date(timestemp);
            let YY = date.getFullYear() + '/';
            let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
            let DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            let ss = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return YY + MM + DD + ' ' + hh + mm + ss;
        },
        // 切换小时/天
        onSwitchChange() {
            // 默认是小时
            let chartTypeData = this.hChartData;

            if (this.dataType === true) {
                chartTypeData = this.dChartData;
            }

            // console.log(chartTypeData);

            let tabData = [];
            if (this.tabIndex === 1) {
                tabData = chartTypeData.trade_rate;
            }

            if (this.tabIndex === 2) {
                tabData = chartTypeData.trade_num;
            }

            if (this.tabIndex === 3) {
                tabData = chartTypeData.res_time;
            }

            // console.log('tabData', tabData);
            this.concatChartMetaTitle();

            if (this.tabIndex === 4) {
                this.drawChart(this.slideIndex, {
                    xAxis: {
                        interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    },
                    series: [
                        {
                            name: '业务成功率',
                            // symbol: 'none',
                            showSymbol: false,
                            data: chartTypeData.suc_rate[0],
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    color: '#FFEE58',
                                },
                            },
                        },
                        {
                            name: '系统成功率',
                            // symbol: 'none',
                            showSymbol: false,
                            data: chartTypeData.suc_rate[1],
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    color: '#57C5DA',
                                },
                            },
                        },
                    ],
                });
            } else {
                this.drawChart(this.slideIndex, {
                    xAxis: {
                        interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    },
                    series: [
                        {
                            name: '业务',
                            // symbol: 'none',
                            showSymbol: false,
                            data: tabData,
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
            }
        },
        // 点击交易率 tab
        switchToTRate(tabIndex) {
            this.tabIndex = tabIndex;
            // console.log('current slideIndex: ', this.slideIndex);
            // console.log('current tabIndex: ', tabIndex);
            const chartData = this.dataType ? this.dChartData : this.hChartData;
            this.concatChartMetaTitle();
            this.drawChart(this.slideIndex, {
                xAxis: {
                    interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                },
                series: [
                    {
                        name: '交易率',
                        // symbol: 'none',
                        showSymbol: false,
                        data: chartData.trade_rate,
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
            // console.log('current slideIndex: ', this.slideIndex);
            // console.log('current tabIndex: ', tabIndex);
            const chartData = this.dataType ? this.dChartData : this.hChartData;
            this.concatChartMetaTitle();
            this.drawChart(this.slideIndex, {
                xAxis: {
                    interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                },
                series: [
                    {
                        name: '交易量',
                        // symbol: 'none',
                        showSymbol: false,
                        data: chartData.trade_num,
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
            // console.log('current slideIndex: ', this.slideIndex);
            // console.log('current tabIndex: ', tabIndex);
            const chartData = this.dataType ? this.dChartData : this.hChartData;
            this.concatChartMetaTitle();
            this.drawChart(this.slideIndex, {
                xAxis: {
                    interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                },
                series: [
                    {
                        name: '响应时间',
                        // symbol: 'none',
                        showSymbol: false,
                        data: chartData.res_time,
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
            // console.log('current slideIndex: ', this.slideIndex);
            // console.log('current tabIndex: ', tabIndex);
            const chartData = this.dataType ? this.dChartData : this.hChartData;
            this.concatChartMetaTitle();
            this.drawChart(this.slideIndex, {
                xAxis: {
                    interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                },
                series: [
                    {
                        name: '业务成功率',
                        // symbol: 'none',
                        showSymbol: false,
                        data: chartData.suc_rate[0],
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#FFEE58',
                            },
                        },
                    },
                    {
                        name: '系统成功率',
                        // symbol: 'none',
                        showSymbol: false,
                        data: chartData.suc_rate[1],
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#57C5DA',
                            },
                        },
                    },
                ],
            });
        },
        // 点击充值详情
        async handleQRSCZetailClick(slideIndex, chartTitle) {
            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_old/PLF35793');
            const res = this.apiRes.msg.PLF35793;
            this.reDrawChart(slideIndex, chartTitle, res);
        },
        // 点击其他详情
        async handleQRQTDetailClick(slideIndex, chartTitle) {
            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_old/PLF35786');
            const res = this.apiRes.msg.PLF35786;
            this.reDrawChart(slideIndex, chartTitle, res);
        },
        // 切换到旧版
        switchToOldVersion() {
            chartSwiper.slideTo(0);
            this.$router.replace('/');
        },
        // 画图
        drawChart(index = 0, opt = {}) {
            // type 1-交易率；2-交易量；3-响应时间；4-成功率

            // 1、根据 slideIndex 来找到相应的详情画图
            // 2、根据 tab 的不同来展示不同的 legend
            let el = 'js-chart-total';
            if (index === 1) {
                el = 'js-chart-qrcz';
            }

            if (index === 2) {
                el = 'js-chart-qrqt';
            }

            let vm = this;
            let options = {
                color: ['#FFEE58'],
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(8,18,50,0.80)',
                    textStyle: {
                        fontSize: '10',
                        align: 'left',
                    },
                    axisPointer: {
                        type: 'none',
                    },
                    position: ['38%', '24%'],
                    formatter(datas) {
                        let res = '';

                        if (vm.tabIndex === 1) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔/分';
                        }

                        if (vm.tabIndex === 2) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔';
                        }

                        if (vm.tabIndex === 3) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + 'ms';
                        }

                        if (vm.tabIndex === 4) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            for (var i = 0, l = datas.length; i < l; i++) {
                                res += '<br/>' + datas[i].seriesName + ': ' + datas[i].data[1] + '%';
                            }
                        }

                        return res;
                    },
                },
                xAxis: {
                    type: 'time',
                    interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    axisLabel: {
                        color: '#92B9D9',
                        fontSize: 10,
                        align: 'center',
                        formatter: function(value) {
                            // 格式化成月/日，只在第一个刻度显示年份
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
                    axisLabel: {
                        color: '#92B9D9',
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
                    containLabel: true,
                    top: '25%',
                    left: '3%',
                    right: '6%',
                    bottom: '10%',
                },
                series: opt.series || [],
            };

            if (this.tabIndex === 4) {
                options.legend = {
                    data: ['业务成功率', '系统成功率'],
                    left: 10,
                    padding: [5, 0, 0, 0],
                    itemHeight: 5,
                    textStyle: {
                        fontSize: 10,
                        color: '#fff',
                    },
                };
            }

            const chart = window.echarts.init(document.getElementById(el));
            chart.setOption(options, true);
        },
        // 切换详情重新换图
        reDrawChart(slideIndex, chartTitle, res) {
            let hChartData = this.parseHourData(res);
            let dChartData = this.parseDayData(res);

            this.handleRateTitle(res);

            // 缓存数据
            this.dChartData = dChartData;
            this.hChartData = hChartData;
            this.chartTitle = chartTitle;
            this.slideIndex = slideIndex;

            // 重置 tab 为交易率
            this.tabIndex = 1;

            // 切换slider
            // console.log('slideIndex', slideIndex);
            chartSwiper.slideTo(slideIndex);

            // 小时、天数据
            let chartData = '';
            if (this.dataType) {
                chartData = this.dChartData;
            } else {
                chartData = this.hChartData;
            }

            // 重新渲染当前 tab 折线图
            let tabData = [];
            if (this.tabIndex === 1) {
                tabData = chartData.trade_rate;
            }

            if (this.tabIndex === 2) {
                tabData = chartData.trade_num;
            }

            if (this.tabIndex === 3) {
                tabData = chartData.res_time;
            }

            if (this.tabIndex === 4) {
                this.drawChart(this.slideIndex, {
                    xAxis: {
                        interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    },
                    series: [
                        {
                            name: '业务成功率',
                            // symbol: 'none',
                            showSymbol: false,
                            data: chartData.suc_rate[0],
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    color: '#FFEE58',
                                },
                            },
                        },
                        {
                            name: '系统成功率',
                            // symbol: 'none',
                            showSymbol: false,
                            data: chartData.suc_rate[1],
                            type: 'line',
                            smooth: true,
                            itemStyle: {
                                normal: {
                                    color: '#57C5DA',
                                },
                            },
                        },
                    ],
                });
            } else {
                this.drawChart(this.slideIndex, {
                    xAxis: {
                        interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    },
                    series: [
                        {
                            name: '业务',
                            // symbol: 'none',
                            showSymbol: false,
                            data: tabData,
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
            }
        },
        updateChartTitle(slideIndex) {
            if (slideIndex === 0) {
                return '武汉地铁';
            }

            if (slideIndex === 1) {
                return '充值';
            }

            if (slideIndex === 2) {
                return '其他';
            }
        },
        parseDayData(res) {
            let dayObj = {};

            dayObj.trade_rate = [];
            dayObj.trade_num = [];
            dayObj.res_time = [];
            dayObj.suc_rate = [[], []];

            for (let i = 0; i < res.line_show.day.time_list.length; i++) {
                let t = res.line_show.day.time_list[i] * 1000;

                let rate = [];
                rate.push(t, res.line_show.day.trade_rate[i]);
                dayObj.trade_rate.push(rate);

                let num = [];
                num.push(t, res.line_show.day.trade_num[i]);
                dayObj.trade_num.push(num);

                let time = [];
                time.push(t, res.line_show.day.res_time[i]);
                dayObj.res_time.push(time);

                let srate0 = [];
                let srate1 = [];
                srate0.push(t, res.line_show.day.suc_rate[0][i]);
                srate1.push(t, res.line_show.day.suc_rate[1][i]);
                dayObj.suc_rate[0].push(srate0);
                dayObj.suc_rate[1].push(srate1);
            }

            this.handleRateTitle(res);

            // console.log('dayObj', dayObj);
            return dayObj;
        },
        parseHourData(res) {
            let hourObj = {};

            hourObj.trade_rate = [];
            hourObj.trade_num = [];
            hourObj.res_time = [];
            hourObj.suc_rate = [[], []];

            for (let i = 0; i < res.line_show.hour.time_list.length; i++) {
                let t = res.line_show.hour.time_list[i] * 1000;

                let rate = [];
                rate.push(t, res.line_show.hour.trade_rate[i]);
                hourObj.trade_rate.push(rate);

                let num = [];
                num.push(t, res.line_show.hour.trade_num[i]);
                hourObj.trade_num.push(num);

                let time = [];
                time.push(t, res.line_show.hour.res_time[i]);
                hourObj.res_time.push(time);

                let srate0 = [];
                let srate1 = [];
                srate0.push(t, res.line_show.hour.suc_rate[0][i]);
                srate1.push(t, res.line_show.hour.suc_rate[1][i]);
                hourObj.suc_rate[0].push(srate0);
                hourObj.suc_rate[1].push(srate1);
            }

            this.handleRateTitle(res);
            // console.log('hourObj', hourObj);
            return hourObj;
        },
        handleRateTitle(res) {
            this.hourTopTradeNumTime = this.formatDate(res.line_show.hour.top_trade_num_time * 1000);
            this.hourTopTradeNum = res.line_show.hour.top_trade_num;
            this.dayTopTradeNumTime = this.formatDate(res.line_show.day.top_trade_num_time * 1000);
            this.dayTopTradeNum = res.line_show.day.top_trade_num;

            this.hourTopTradeRateTime = this.formatDate(res.line_show.hour.top_trade_rate_time * 1000);
            this.hourTopTradeRate = res.line_show.hour.top_trade_rate;
            this.dayTopTradeRateTime = this.formatDate(res.line_show.day.top_trade_rate_time * 1000);
            this.dayTopTradeRate = res.line_show.day.top_trade_rate;

            this.concatChartMetaTitle();
        },
        concatChartMetaTitle() {
            if (this.dataType === true) {
                if (this.tabIndex === 1) {
                    this.chartMetaTitle = `历史峰值：${this.dayTopTradeNum}笔/分 (${this.dayTopTradeNumTime})`;
                }

                if (this.tabIndex === 2) {
                    this.chartMetaTitle = `历史峰值：${this.dayTopTradeRate}笔 (${this.dayTopTradeRateTime})`;
                }
            } else {
                if (this.tabIndex === 1) {
                    this.chartMetaTitle = `历史峰值：${this.hourTopTradeNum}笔/分 (${this.hourTopTradeNumTime})`;
                }

                if (this.tabIndex === 2) {
                    this.chartMetaTitle = `历史峰值：${this.hourTopTradeRate}笔 (${this.hourTopTradeRateTime})`;
                }
            }
        },
        async initPage() {
            const vm = this;

            // const res = await this.$axios('http://shi.natapp1.cc/mobile/whapi/old');
            // const res = await this.$axios('/mobile/whdtApp/get_old_data');
            const res = mock;
            this.apiRes = res;

            const chartOpt = {
                color: ['#FFEE58'],
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(8,18,50,0.80)',
                    textStyle: {
                        fontSize: '10',
                        align: 'left',
                    },
                    axisPointer: {
                        type: 'none',
                    },
                    position: ['38%', '24%'],
                    formatter(datas) {
                        let res = '';

                        if (vm.tabIndex === 1) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔/分';
                        }

                        if (vm.tabIndex === 2) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔';
                        }

                        if (vm.tabIndex === 3) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + 'ms';
                        }

                        if (vm.tabIndex === 4) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            for (var i = 0, l = datas.length; i < l; i++) {
                                res += '<br/>' + datas[i].seriesName + ': ' + datas[i].data[1] + '%';
                            }
                        }

                        return res;
                    },
                },
                xAxis: {
                    type: 'time',
                    interval: 10 * 60000,
                    axisLabel: {
                        color: '#92B9D9',
                        fontSize: 10,
                        align: 'center',
                        formatter: function(value) {
                            // 格式化成月/日，只在第一个刻度显示年份
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
                    axisLabel: {
                        color: '#92B9D9',
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
                    containLabel: true,
                    top: '25%',
                    left: '3%',
                    right: '6%',
                    bottom: '10%',
                },
                series: [],
            };

            // 充值
            if (res.msg.PLF35793) {
                this.qRSCZetail = res.msg.PLF35793.meta;
                this.qRSCZetail.title = '充值';
                if (this.qRSCZetail.SUC_RATE === '0.0') {
                    this.qRSCZetail.SUC_RATE *= 1;
                }
                if (this.qRSCZetail.S_SUC_RATE === '0.0') {
                    this.qRSCZetail.S_SUC_RATE *= 1;
                }
            }

            // 其他
            if (res.msg.PLF35786) {
                this.qRQTDetail = res.msg.PLF35786.meta;
                this.qRQTDetail.title = '其他';
                if (this.qRQTDetail.SUC_RATE === '0.0') {
                    this.qRQTDetail.SUC_RATE *= 1;
                }
                if (this.qRQTDetail.S_SUC_RATE === '0.0') {
                    this.qRQTDetail.S_SUC_RATE *= 1;
                }
            }

            // let hChartData = res.line_show.hour;
            // let dChartData = res.line_show.day;
            let hChartData = this.parseHourData(res.msg.TOTAL);
            let dChartData = this.parseDayData(res.msg.TOTAL);
            this.dChartData = dChartData;
            this.hChartData = hChartData;

            // this.dayTopTime = this.formatDate(new Date(res.TOTAL.update_time).getTime());
            this.dayTopTime = res.msg.TOTAL.update_time;
            this.dayTotalTradeRate = res.msg.TOTAL.top_show.trade_rate;
            this.dayTotalTradeNum = res.msg.TOTAL.top_show.trade_num;
            this.dayTotalTime = res.msg.TOTAL.top_show.res_time;

            const totalChart = window.echarts.init(document.getElementById('js-chart-total'));
            if (this.tabIndex !== 4) {
                chartOpt.legend = '';
            }

            chartOpt.series = [
                {
                    name: '业务',
                    // symbol: 'none',
                    showSymbol: false,
                    data: hChartData.trade_rate,
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#FFEE58',
                        },
                    },
                },
            ];
            // console.log(chartOpt);
            totalChart.setOption(chartOpt);

            chartSwiper = new Swiper('.swiper-container', {
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    slideChange() {
                        let index = this.activeIndex;
                        vm.chartTitle = vm.updateChartTitle(index);
                        chartSwiper.slideTo(index);

                        if (index === 1) {
                            vm.handleQRSCZetailClick(index, vm.chartTitle);
                        }
                        if (index === 2) {
                            vm.handleQRQTDetailClick(index, vm.chartTitle);
                        }
                        // console.log('改变了，activeIndex为' + this.activeIndex);
                    },
                },
            });

            const chartCC = new Swiper('.swiper-container--copy', {
                on: {
                    slideNextTransitionEnd() {
                        chartSwiper.slideNext();
                        let index = chartCC.activeIndex;
                        vm.chartTitle = vm.updateChartTitle(index);

                        if (index === 1) {
                            vm.handleQRSCZetailClick(index, vm.chartTitle);
                        }
                        if (index === 2) {
                            vm.handleQRQTDetailClick(index, vm.chartTitle);
                        }
                        if (index === 3) {
                            vm.handleQRCXDetailClick(index, vm.chartTitle);
                        }
                        if (index === 4) {
                            vm.handleQRTHDetailClick(index, vm.chartTitle);
                        }
                    },

                    slidePrevTransitionEnd() {
                        chartSwiper.slidePrev();
                        let index = chartCC.activeIndex;
                        vm.chartTitle = vm.updateChartTitle(index);

                        if (index === 1) {
                            vm.handleQRSCZetailClick(index, vm.chartTitle);
                        }
                        if (index === 2) {
                            vm.handleQRQTDetailClick(index, vm.chartTitle);
                        }
                        if (index === 3) {
                            vm.handleQRCXDetailClick(index, vm.chartTitle);
                        }
                        if (index === 4) {
                            vm.handleQRTHDetailClick(index, vm.chartTitle);
                        }
                    },
                },
            });

            window.chart = chartSwiper;
            this.bullet = document.querySelectorAll('.swiper-pagination-bullet');
        },
    },
    async mounted() {
        this.initPage();

        setInterval(() => {
            this.initPage();
        }, 10000);
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
    min-height: 100%;
    min-height: 100vh;
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
    color: #addaff;
}

.meta .meta__status-act .icon-exchange {
    // margin-left: 3px;
    // position: relative;
    // top: -1px;
    margin-left: 3px;
    margin-right: 3px;
    position: relative;
    top: -1px;
}

.meta .meta__status-act .art-active {
    color: #ffffff;
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
    width: 50%;
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
    padding-bottom: 20px;
    margin-top: 15px;
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
    height: 60px;
    // border: 1px solid green;
    position: absolute;
    top: -15px;
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
    margin-left: 3px;
    margin-right: 3px;
}
</style>
