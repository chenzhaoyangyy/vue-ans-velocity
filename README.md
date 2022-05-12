使用步骤：

1.安装

```
npm install vue-ans-velocity
```



2.vue-cli 中 main.js 引入 并且注册为vue全局组件

```javascript
import Ans from "vue-ans-velocity"

Vue.component("ANS", Ans);
```



3.组件内调用

```vue
<!-- ans-data属性值为一个数组，其中第一个值代表显示的状态，第二个值代表隐藏的状态。 -->
<ANS :ans-data="['slideDown', 'slideUp']">

   <h1 v-show="!show">主体内容</h1>

</ANS>
```

