<template>
  <div class="spreadPage">
    <div class="text box_center">
      <div class="content">Remember Me</div>
    </div>
    <div class="water box_center">
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="drop"></div>
      <div class="content">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
      <div class="cup box_center"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.spreadPage {
  width: 100%;
  height: 100%;
  background-color: #111;
  color: #fff;
  flex-wrap: wrap;
  filter: contrast(30);
  .text {
    height: 50%;
    .content {
      font-size: 80px;
      animation: showup 3s forwards;
      letter-spacing: 6px;
      text-align: center;
    }
    @keyframes showup {
      from {
        letter-spacing: -24px;
        filter: blur(6px);
      }
      to {
        letter-spacing: 6px;
        filter: blur(1px);
      }
    }
  }

  .water {
    position: relative;
    height: 50%;
    .drop {
      position: absolute;
      top: 30px;
      width: 45px;
      height: 65px;
      filter: blur(10px);
      border-radius: 50%;
      background-color: #fff;
    }
    .drop:nth-child(1) {
      animation: dr 1.5s ease-in-out infinite;
    }
    .drop:nth-child(2) {
      animation: dr 1.5s ease-in-out 0.5s infinite;
    }
    .drop:nth-child(3) {
      animation: dr 1.5s ease-in-out 1s infinite;
    }
    .drop:nth-child(4) {
      animation: dr 1.5s ease-in-out 1.5s infinite;
    }
    .drop:nth-child(5) {
      width: 80px;
      height: 70px;
    }
    @keyframes dr {
      from {
        top: 30px;
      }
      to {
        top: 200px;
      }
    }
    .content {
      display: flex;
      position: absolute;
      // bottom: 370px;
      top: 390px;
      filter: contrast(50);
      animation: toTop 10s linear infinite;
      @keyframes toTop {
        from {
          top: 57vw;
        }
        to {
          top: 27vw;
        }
      }
      .box {
        width: 80px;
        height: 80px;
        margin: 0 3px;
        // border-radius: 10px;
        background-color: #fff;
        animation: ro 3s linear infinite;
        filter: blur(12px);
      }
      @keyframes ro {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    .cup {
      position: absolute;
      background-color: #fff;
      width: 48%;
      height: 150px;
      top: 300px;
      border-radius: 16px;
      animation: toScale 10s linear infinite;
    }
    @keyframes toScale {
      from {
        height: 12vw;
        top: 60vw;
      }
      to {
        height: 42vw;
        top: 30vw;
      }
    }
  }
}
</style>
