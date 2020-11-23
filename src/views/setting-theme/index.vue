<template>
  <div class="title">
    <span @click="$router.back()">纯色主题</span>
  </div>

  <div class="theme-list">
    <div class="theme" v-for="item in solidColorList" :key="item.id">
      <div class="theme__block" :style="{ 'background-color': item.bgColor, color: item.color }" @click="changeColor(item.id)">
        <vis-icon name="check" v-if="item.id === checkedColor"></vis-icon>
      </div>
      <span class="theme__name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'setting-theme',
  setup() {
    // 纯色主题
    const solidColorList = reactive([
      { id: 1, name: '蓝色', code: 'blue', bgColor: '#677ED7', color: '#F6F6F6' },
      { id: 2, name: '粉色', code: 'pink', bgColor: '#EC7F97', color: '#F6F6F6' },
      { id: 3, name: '绿色', code: 'green', bgColor: '#5DCB94', color: '#F6F6F6' },
      { id: 4, name: '黄色', code: 'yellow', bgColor: '#F0C145', color: '#F6F6F6' },
      { id: 5, name: '黑色', code: 'black', bgColor: '#272A34', color: '#F6F6F6' },
      { id: 6, name: '灰色', code: 'grey', bgColor: '#7D7F83', color: '#F6F6F6' },
      { id: 7, name: '白色', code: 'white', bgColor: '#F3F4F5', color: '#303030' },
      { id: 8, name: '暗夜', code: 'dark', bgColor: '#151515', color: '#F6F6F6' }
    ]);
    const checkedColor = ref(1);

    // 选取主题
    function changeColor(id: number) {
      checkedColor.value = id;
    }

    return { solidColorList, checkedColor, changeColor };
  }
});
</script>

<style lang="scss" scoped>
.theme-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .theme {
    flex: 0 0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .theme__block {
      height: 3rem;
      width: 3rem;
      border-radius: 5px;
      cursor: pointer;

      line-height: 3rem;
      text-align: center;

      .vis-icon {
        font-size: 1.5rem;
      }
    }

    .theme__name {
      margin-top: 10px;
    }
  }

  & > .theme {
    margin-top: 15px;
  }
}
</style>
