// import 'uno.css'
import './styles/index.css'

import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'

// export { default } from 'vitepress/theme'

export default {
    ...DefaultTheme,
    // override the Layout with a wrapper component that injects the slots
    Layout: MyLayout,
}
