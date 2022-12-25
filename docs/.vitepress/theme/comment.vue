
<template>
    <div id="detalk"></div>
</template>

<script>
export default {
    name: "blog-comments",
    mounted() {
        // document.addEventListener("DOMContentLoaded", function() {
        //     try {
        //         detalk.init({
        //             // 挂载点 (CSS 选择器)
        //             el: "#detalk", // <div id="app"></div>
        //             // 后端地址
        //             url: "https://detalk.deta.dev/",
        //             // 当前页面的路径
        //             path: window.location.href,
        //             // 是否开启实时预览
        //             previewOnInput: false, // default is false
        //             // 评论加载完成后
        //             onCommentLoaded: function () {
        //                 // 此处可为代码高亮等插件
        //             },
        //         });
        //     } catch(e) {
        //         console.warn(e);
        //         documentElement.getElementById("detalk").innerHTML = e;
        //     }
        // });
        setTimeout(() => {
            detalk.init({
                // 挂载点 (CSS 选择器)
                el: "#detalk", // <div id="app"></div>
                // 后端地址
                url: "https://detalk.deta.dev/",
                // 当前页面的路径
                path: window.location.href,
                // 是否开启实时预览
                previewOnInput: false, // default is false
                // 评论加载完成后
                onCommentLoaded: function () {
                    // 此处可为代码高亮等插件
                },
            });
        }, 1000);
    },
};
</script>