export default {
    option: {
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
    },
};
