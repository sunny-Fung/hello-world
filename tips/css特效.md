# 一些移动端开发时用到的 css 特效

### 规则页放大弹出和缩小消失

```js
// components/rule.vue

<template>
  <div>
    <Rule ref="rule"></Rule>
  </div>
</template>

<script>
import Rule from "../components/rule";

export default {
  methods: {
    // 父组件点击时给rule增加出现的class
    show_rule() {
      this.$refs.rule.$el.classList.add("md-show");
    }
  },
  components: {
    Rule
  }
};
</script>
```

### 跑马灯展示奖品抽奖情况

```js
// components/paodeng.vue

<template>
  <div>
    <PaoMaDeng :delay="0.5" :speed="100" :content="arr">
      <span
        v-for="(item, index) in arr"
        :key="index"
        :style="`fontSize:12px;marginRight:20px`"
      >
        {{ item }}
      </span>
    </PaoMaDeng>
  </div>
</template>

<script>
import PaoMaDeng from '../components/paomadeng';

export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    this.arr = MyConst.arr;
  },
  components: {
    PaoMaDeng
  }
}
</script>
```
