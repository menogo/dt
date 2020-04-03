<template>
  <div class="page-new">
    <div class="container">
      <div class="container__meta">
        <div class="meta">
          <div class="meta__status">
            <div class="meta__status-title">2019/11/11 11:24 更新</div>
            <div class="meta__status-act">旧架构</div>
          </div>
          <div class="meta__sum">
            <div class="meta__sum-item">
              <div class="title">交易率（笔/分）</div>
              <div class="num">123</div>
            </div>
            <div class="meta__sum-item">
              <div class="title">交易率（笔/分）</div>
              <div class="num">123</div>
            </div>
            <div class="meta__sum-item">
              <div class="title">交易率（笔/分）</div>
              <div class="num">123</div>
            </div>
          </div>
        </div>
      </div>
      <div class="container__detail">
        <section>
          <div class="container__detail-item">
            <div class="title">二维码生成</div>
            <div class="list">
              <div class="item">
                <span class="type">交易率（笔/分）</span><span class="sumup">67</span>
              </div>
              <div class="item">
                <span class="type">日交易量（笔）</span><span class="sumup">123</span>
              </div>
              <div class="item">
                <span class="type">响应时间（ms）</span><span class="sumup">67.3</span>
              </div>
              <div class="item">
                <span class="type">业务成功率（%）</span><span class="sumup">100</span>
              </div>
              <div class="item">
                <span class="type">系统成功率（%）</span><span class="sumup">99.7</span>
              </div>
            </div>
          </div>
          <div class="container__detail-item ml-10">
            <div class="title">二维码生成</div>
            <div class="list">
              <div class="item">
                <span class="type">交易率（笔/分）</span><span class="sumup">67</span>
              </div>
              <div class="item">
                <span class="type">日交易量（笔）</span><span class="sumup">123</span>
              </div>
              <div class="item">
                <span class="type">响应时间（ms）</span><span class="sumup">67.3</span>
              </div>
              <div class="item">
                <span class="type">业务成功率（%）</span><span class="sumup">100</span>
              </div>
              <div class="item">
                <span class="type">系统成功率（%）</span><span class="sumup">99.7</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container__detail-item">
            <div class="title">二维码生成</div>
            <div class="list">
              <div class="item">
                <span class="type">交易率（笔/分）</span><span class="sumup">67</span>
              </div>
              <div class="item">
                <span class="type">日交易量（笔）</span><span class="sumup">123</span>
              </div>
              <div class="item">
                <span class="type">响应时间（ms）</span><span class="sumup">67.3</span>
              </div>
              <div class="item">
                <span class="type">业务成功率（%）</span><span class="sumup">100</span>
              </div>
              <div class="item">
                <span class="type">系统成功率（%）</span><span class="sumup">99.7</span>
              </div>
            </div>
          </div>
          <div class="container__detail-item ml-10">
            <div class="title">二维码生成</div>
            <div class="list">
              <div class="item">
                <span class="type">交易率（笔/分）</span><span class="sumup">67</span>
              </div>
              <div class="item">
                <span class="type">日交易量（笔）</span><span class="sumup">123</span>
              </div>
              <div class="item">
                <span class="type">响应时间（ms）</span><span class="sumup">67.3</span>
              </div>
              <div class="item">
                <span class="type">业务成功率（%）</span><span class="sumup">100</span>
              </div>
              <div class="item">
                <span class="type">系统成功率（%）</span><span class="sumup">99.7</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container__chart">
        <div class="container__chart-title">
          <div class="chart-title">二维码生成</div>
          <div class="chart-tabs">
            <div class="tab is-active">交易率</div>
            <div class="tab u-border-left-none">交易量</div>
            <div class="tab u-border-left-none">响应时间</div>
            <div class="tab u-border-left-none">成功率</div>
          </div>
        </div>
        <div class="container__chart-meta">
          <div class="meta"></div>
          <div class="toolbar"></div>
        </div>
        <div class="container__chart-body">
          <!-- Slider main container -->
          <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
              ...
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- If we need scrollbar -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Swiper from 'swiper';

new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default {
  name: 'Home',
  components: {
    // HelloWorld,
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
  margin-bottom: 18px;
}

.chart-title {
  flex-grow: 1;
  text-align: left;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #ffffff;
}

.chart-tabs {
  display: flex;
}

.chart-tabs .tab {
  width: 64px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #4ca5ef;
  font-size: 12px;
}

.chart-tabs .tab:last-child {
  border-radius: 0 2px 2px 0;
}

.chart-tabs .tab.is-active {
  background: #4ca5ef;
  border-radius: 2px 0 0 2px;
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
  height: 117px;
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
}

.meta__sum {
  margin-top: 20px;
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 12px;
}

.meta__sum .num {
  color: #ffee58;
  font-size: 24px;
  font-family: PingFangSC-Medium;
}

.container__detail {
  padding: 10px;
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

.swiper-container {
  width: 100%;
  height: 200px;
}
</style>
