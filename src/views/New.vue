<template>
    <div class="page-new">
        <div class="container">
            <div class="container__meta">
                <div class="meta">
                    <div class="meta__status">
                        <div class="meta__status-title">{{ dayTopTime || '0000-00-00 00:00:00' }} 更新</div>
                        <div class="meta__status-act" @click="switchToOldVersion">
                            <span class="art-active">新</span>
                            <i class="icon-exchange"></i>
                            <span>旧</span>
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
                    <div class="container__detail-item" @click="handleQRSCDetailClick(1, qRSCDetail.title, true)">
                        <div class="title">二维码生成</div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率(笔/分)</span>
                                <span class="sumup">{{ qRSCDetail.TRADE_NUM || '--' }} </span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量(笔)</span>
                                <span class="sumup">{{ qRSCDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间(ms)</span>
                                <span class="sumup">{{ qRSCDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率(%)</span>
                                <span class="sumup" :class="qRSCDetail.SUC_RATE > 0 && qRSCDetail.SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRSCDetail.SUC_RATE || '--' }}
                                </span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率(%)</span>
                                <span class="sumup" :class="qRSCDetail.S_SUC_RATE > 0 && qRSCDetail.S_SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRSCDetail.S_SUC_RATE || '--' }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="container__detail-item ml-10" @click="handleQRXDDetailClick(2, qRXDDetail.title, true)">
                        <div class="title">二维码下单</div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率(笔/分)</span>
                                <span class="sumup">{{ qRXDDetail.TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量(笔)</span>
                                <span class="sumup">{{ qRXDDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间(ms)</span>
                                <span class="sumup">{{ qRXDDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率(%)</span>
                                <span class="sumup" :class="qRXDDetail.SUC_RATE > 0 && qRXDDetail.SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRXDDetail.SUC_RATE || '--' }}
                                </span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率(%)</span>
                                <span class="sumup" :class="qRXDDetail.S_SUC_RATE > 0 && qRXDDetail.S_SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRXDDetail.S_SUC_RATE > 0 || '--' }}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container__detail-item" @click="handleQRCXDetailClick(3, qRCXDetail.title, true)">
                        <div class="title">二维码查询</div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率(笔/分)</span>
                                <span class="sumup">{{ qRCXDetail.TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量(笔)</span>
                                <span class="sumup">{{ qRCXDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间(ms)</span>
                                <span class="sumup">{{ qRCXDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率(%)</span>
                                <span class="sumup" :class="qRCXDetail.SUC_RATE > 0 && qRCXDetail.SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRCXDetail.SUC_RATE || '--' }}
                                </span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率(%)</span>
                                <span class="sumup" :class="qRCXDetail.S_SUC_RATE > 0 && qRCXDetail.S_SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRCXDetail.S_SUC_RATE || '--' }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="container__detail-item ml-10" @click="handleQRTHDetailClick(4, qRTHDetail.title, true)">
                        <div class="title">二维码退货</div>
                        <div class="list">
                            <div class="item">
                                <span class="type">交易率(笔/分)</span>
                                <span class="sumup">{{ qRTHDetail.TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">日交易量(笔)</span>
                                <span class="sumup">{{ qRTHDetail.SUM_TRADE_NUM || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">响应时间(ms)</span>
                                <span class="sumup">{{ qRTHDetail.RESPONSE_TIME || '--' }}</span>
                            </div>
                            <div class="item">
                                <span class="type">业务成功率(%)</span>
                                <span class="sumup" :class="qRTHDetail.SUC_RATE > 0 && qRTHDetail.SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRTHDetail.SUC_RATE || '--' }}
                                </span>
                            </div>
                            <div class="item">
                                <span class="type">系统成功率(%)</span>
                                <span class="sumup" :class="qRTHDetail.S_SUC_RATE > 0 && qRTHDetail.S_SUC_RATE <= 80 ? 'error' : ''">
                                    {{ qRTHDetail.S_SUC_RATE || '--' }}
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
                                <div class="swiper-slide"><!-- index3 --></div>
                                <div class="swiper-slide"><!-- index4 --></div>
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
                                <!-- index1 二维码生成 -->
                                <div id="js-chart-qrsc" style="width: 100%; height:180px;"></div>
                            </div>
                            <div class="swiper-slide">
                                <!-- index2 二维码下单 -->
                                <div id="js-chart-qrxd" style="width: 100%; height:180px;"></div>
                            </div>
                            <div class="swiper-slide">
                                <!-- index3 二维码查询 -->
                                <div id="js-chart-qrcx" style="width: 100%; height:180px;"></div>
                            </div>
                            <div class="swiper-slide">
                                <!-- index4 二维码退货 -->
                                <div id="js-chart-qrth" style="width: 100%; height:180px;">sss</div>
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
const mock = require('../mock/api_new.json');
// const PLF35403 = require('../mock/PLF35403.json'); // 二维码生成
// const PLF35456 = require('../mock/PLF35456.json'); // 二维码退货
// const PLF35457 = require('../mock/PLF35457.json'); // 二维码查询
// const PLF35458 = require('../mock/PLF35458.json'); // 二维码下单

export default {
    name: 'Home',
    data() {
        return {
            apiRes: {},
            dataType: false,
            qRSCDetail: {}, // 二维码生成详情
            qRXDDetail: {}, // 二维码下单详情
            qRCXDetail: {}, // 二维码查询详情
            qRTHDetail: {}, // 二维码退货详情
            PLF35403: {},
            PLF35456: {},
            PLF35457: {},
            PLF35458: {},
            TOTAL: {},
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
                let name = '';
                if (this.tabIndex === 1) {
                    name = '交易率';
                }
                if (this.tabIndex === 2) {
                    name = '交易量';
                }
                if (this.tabIndex === 3) {
                    name = '相应时间';
                }

                this.drawChart(this.slideIndex, {
                    xAxis: {
                        interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    },
                    series: [
                        {
                            name: name,
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
            console.log('current slideIndex: ', this.slideIndex);
            console.log('current tabIndex: ', tabIndex);
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
            console.log('current slideIndex: ', this.slideIndex);
            console.log('current tabIndex: ', tabIndex);
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
        // 点击二维码生成详情
        async handleQRSCDetailClick(slideIndex, chartTitle, reset = false) {
            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_new/PLF35403');
            const res = this.apiRes.PLF35403;
            chartSwiper.slideTo(slideIndex);

            if (reset) {
                this.tabIndex = 1;
            }

            this.reDrawChart(slideIndex, chartTitle, res);
        },
        // 点击二维码下单详情
        async handleQRXDDetailClick(slideIndex, chartTitle, reset = false) {
            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_new/PLF35458');
            const res = this.apiRes.PLF35458;
            chartSwiper.slideTo(slideIndex);

            if (reset) {
                this.tabIndex = 1;
            }

            this.reDrawChart(slideIndex, chartTitle, res);
        },
        // 点击二维码查询详情
        async handleQRCXDetailClick(slideIndex, chartTitle, reset = false) {
            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_new/PLF35457');
            const res = this.apiRes.PLF35457;
            chartSwiper.slideTo(slideIndex);

            if (reset) {
                this.tabIndex = 1;
            }

            this.reDrawChart(slideIndex, chartTitle, res);
        },
        // 点击二维码退货详情
        async handleQRTHDetailClick(slideIndex, chartTitle, reset = false) {
            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_new/PLF35456');
            const res = this.apiRes.PLF35456;
            chartSwiper.slideTo(slideIndex);

            if (reset) {
                this.tabIndex = 1;
            }

            this.reDrawChart(slideIndex, chartTitle, res);
        },
        // 切换到旧版
        switchToOldVersion() {
            chartSwiper.slideTo(0);
            this.$router.replace('/old');
        },
        // 修改pagination状态
        // updatePaginationActive(index) {
        //     this.bullet.forEach(item => {
        //         item.classList.remove('swiper-pagination-bullet-active');
        //     });
        //     this.bullet[index].classList.add('swiper-pagination-bullet-active');
        // },
        // 画图
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

            // 折线图数据
            // let interval = 10 * 60000;
            // if (opt.xAxis && opt.xAxis.interval) {
            //     interval = opt.xAxis.interval;
            // }
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
                    position: 'top',
                    formatter(datas) {
                        let res = '';

                        if (vm.tabIndex === 1) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔/秒';
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
        reDrawChart(slideIndex, chartTitle, res, tabIndex = null) {
            console.log('reDrawChart', slideIndex, chartTitle, res);
            let hChartData = this.parseHourData(res);
            let dChartData = this.parseDayData(res);

            this.handleRateTitle(res);

            // 缓存数据
            this.dChartData = dChartData;
            this.hChartData = hChartData;
            this.chartTitle = chartTitle;
            this.slideIndex = slideIndex;

            // 重置 tab 为交易率
            if (tabIndex) {
                this.tabIndex = tabIndex;
            }

            // 切换slider
            // console.log('slideIndex', slideIndex);
            // chartSwiper.slideTo(slideIndex);

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
                let name = '';
                if (this.tabIndex === 1) {
                    name = '交易率';
                }
                if (this.tabIndex === 2) {
                    name = '交易量';
                }
                if (this.tabIndex === 3) {
                    name = '相应时间';
                }

                this.drawChart(this.slideIndex, {
                    xAxis: {
                        interval: this.dataType === true ? 240 * 60000 : 10 * 60000,
                    },
                    series: [
                        {
                            name: name,
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
        parseDayData(res) {
            let dayObj = {};

            dayObj.trade_rate = [];
            dayObj.trade_num = [];
            dayObj.res_time = [];
            dayObj.suc_rate = [[], []];

            for (let i = 0; i < res.line_show.day.time_list.length; i++) {
                let t = res.line_show.day.time_list[i][0] * 1000;

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
                let t = res.line_show.hour.time_list[i][0] * 1000;
                // let t = new Date(res.line_show.hour.time_list[i][0]);

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
        initPage() {
            const vm = this;

            // const res = await this.$axios('http://zxerrm.natappfree.cc/whdt_new');
            const res = mock;
            this.apiRes = res;
            console.log(this.tabIndex);

            // console.log(res);
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
                    position: 'top',
                    formatter(datas) {
                        let res = '';

                        if (vm.tabIndex === 2) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔';
                        }

                        if (vm.tabIndex === 1) {
                            res = vm.formatDate(new Date(datas[0].axisValue)) + '<br/>';
                            res += datas[0].seriesName + ': ';
                            res += datas[0].data[1] + '笔/秒';
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

            // 二维码生成
            if (res.PLF35403) {
                this.qRSCDetail = res.PLF35403.meta;
                this.qRSCDetail.title = '二维码生成';
                this.PLF35403 = res.PLF35403;
            }

            // 二维码下单
            if (res.PLF35458) {
                this.qRXDDetail = res.PLF35458.meta;
                this.qRXDDetail.title = '二维码下单';
                this.PLF35458 = res.PLF35458;
            }

            // 二维码查询
            if (res.PLF35457) {
                this.qRCXDetail = res.PLF35457.meta;
                this.qRCXDetail.title = '二维码查询';
                this.PLF35457 = res.PLF35457;
            }

            // 二维码退货
            if (res.PLF35456) {
                this.qRTHDetail = res.PLF35456.meta;
                this.qRTHDetail.title = '二维码退货';
                this.PLF35456 = res.PLF35456;
            }

            // 总览
            if (res.TOTAL) {
                this.TOTAL = res.TOTAL;
            }

            // let hChartData = res.line_show.hour;
            // let dChartData = res.line_show.day;
            let hChartData = this.parseHourData(res.TOTAL);
            let dChartData = this.parseDayData(res.TOTAL);
            this.dChartData = dChartData;
            this.hChartData = hChartData;

            this.dayTopTime = this.formatDate(new Date(res.TOTAL.update_time).getTime());
            this.dayTotalTradeRate = res.TOTAL.top_show.trade_rate;
            this.dayTotalTradeNum = res.TOTAL.top_show.trade_num;
            this.dayTotalTime = res.TOTAL.top_show.res_time;

            // const totalChart = window.echarts.init(document.getElementById('js-chart-total'));
            // if (this.tabIndex !== 4) {
            //     chartOpt.legend = '';
            // }

            // 当前停留在哪个 tab 就选择对应 tab 的数据
            // this.tabIndex === 1 && this.switchToTRate(this.tabIndex);
            // this.tabIndex === 2 && this.switchToTSum(this.tabIndex);
            // this.tabIndex === 3 && this.switchToRTime(this.tabIndex);
            // this.tabIndex === 4 && this.switchToSRate(this.tabIndex);

            // chartOpt.series = [
            //     {
            //         name: '业务',
            //         // symbol: 'none',
            //         showSymbol: false,
            //         data: hChartData.trade_rate,
            //         type: 'line',
            //         smooth: true,
            //         itemStyle: {
            //             normal: {
            //                 color: '#FFEE58',
            //             },
            //         },
            //     },
            // ];
            console.log(chartOpt);
            // totalChart.setOption(chartOpt);

            let chartData = {};
            if (this.slideIndex === 0) {
                chartData = res.TOTAL;
            }
            if (this.slideIndex === 1) {
                chartData = res.PLF35403;
            }
            if (this.slideIndex === 2) {
                chartData = res.PLF35458;
            }
            if (this.slideIndex === 3) {
                chartData = res.PLF35457;
            }
            if (this.slideIndex === 4) {
                chartData = res.PLF35456;
            }

            this.reDrawChart(this.slideIndex, this.chartTitle, chartData);
            // this.bullet = document.querySelectorAll('.swiper-pagination-bullet');
        },
    },
    async mounted() {
        const vm = this;
        chartSwiper = new Swiper('.swiper-container', {
            autoplay: false,
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
                    vm.slideIndex = index;
                    // vm.tabIndex = 1;

                    console.log('slideChange');
                    if (index === 0) {
                        vm.reDrawChart(index, '武汉地铁', vm.TOTAL, 1);
                    }

                    if (index === 1) {
                        // vm.reDrawChart(index, vm.chartTitle, vm.PLF35403, 1);
                        vm.handleQRSCDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 2) {
                        // vm.reDrawChart(index, vm.chartTitle, vm.PLF35458, 1);
                        vm.handleQRXDDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 3) {
                        // vm.reDrawChart(index, vm.chartTitle, vm.PLF35457, 1);
                        vm.handleQRCXDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 4) {
                        // vm.reDrawChart(index, vm.chartTitle, vm.PLF35456, 1);
                        vm.handleQRTHDetailClick(index, vm.chartTitle, true);
                    }
                    // console.log('改变了，activeIndex为' + this.activeIndex);
                },
            },
        });

        const chartCC = new Swiper('.swiper-container--copy', {
            autoplay: false,
            on: {
                slideNextTransitionEnd() {
                    chartSwiper.slideNext();
                    let index = chartCC.activeIndex;
                    vm.chartTitle = vm.updateChartTitle(index);
                    vm.slideIndex = index;
                    // vm.tabIndex = 1;

                    if (index === 0) {
                        vm.reDrawChart(index, '武汉地铁', vm.TOTAL, 1);
                    }
                    if (index === 1) {
                        vm.handleQRSCDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 2) {
                        vm.handleQRXDDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 3) {
                        vm.handleQRCXDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 4) {
                        vm.handleQRTHDetailClick(index, vm.chartTitle, true);
                    }
                },

                slidePrevTransitionEnd() {
                    chartSwiper.slidePrev();
                    let index = chartCC.activeIndex;
                    vm.chartTitle = vm.updateChartTitle(index);
                    vm.slideIndex = index;
                    // vm.tabIndex = 1;

                    if (index === 0) {
                        vm.reDrawChart(index, '武汉地铁', vm.TOTAL, 1);
                    }
                    if (index === 1) {
                        vm.handleQRSCDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 2) {
                        vm.handleQRXDDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 3) {
                        vm.handleQRCXDetailClick(index, vm.chartTitle, true);
                    }
                    if (index === 4) {
                        vm.handleQRTHDetailClick(index, vm.chartTitle, true);
                    }
                },
            },
        });

        window.chart = chartSwiper;
        this.initPage();

        setInterval(() => {
            this.initPage();
        }, 5000);
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
