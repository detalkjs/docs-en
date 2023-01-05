import DefaultTheme from 'vitepress/theme'
import theme from 'vitepress/theme'
import Comment from "./comment.vue";
export default {
    ...DefaultTheme,
    ...theme,
    enhanceApp({ app, router, siteData }) {
        app.component('Comment', Comment)
    }
}
