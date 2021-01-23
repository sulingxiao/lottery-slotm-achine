// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Select,
  Option,
  Dialog,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Collapse,
  CollapseItem,
  Pagination,
  Button,
  Radio,
  Loading,
  TableColumn,
  TabPane,
  Table,
  Tabs,
  Divider,
  Upload,
  Tooltip,
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.prototype.$message = Message;
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Collapse)
Vue.use(Tooltip)
Vue.use(CollapseItem)
Vue.use(Button)
Vue.use(TableColumn)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Table)
Vue.use(Radio)
Vue.use(Loading)
Vue.use(Upload)
Vue.use(Divider)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
