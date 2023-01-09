function twikooCvt() {
    let data = document.getElementById("twikoo-cvt-text").value;

    try {
        data = JSON.parse(data);
    } catch(e) {
        alert("输入 JSON 格式错误");
        return;
    }
    // 传入 Array
    
    try {
        let obj = {};

        // 将所有评论按页面分类

        for (let i of data) {
            if (!obj["CMT_" + i.url]) obj["CMT_" + i.url] = [];
            obj["CMT_" + i.url].push(i);
        }

        console.log(obj);

        let result = {};

        // 评论回复单独分类
        let replyList = [];

        for (let i in obj) {
            result[i] = [];
            for (let o of obj[i]) {
                let label = null;
                if (o.master) {
                    label = "admin";
                }
                if (o.pid || o.rid) {
                    replyList.push(o);
                } else {
                    result[i].push({
                        content: o.comment,
                        timestamp: Number(o.created.$numberLong),
                        email: o.mail,
                        auth: o.uid,
                        label,
                        ua: o.ua,
                        hide: o.isSpam,
                        url: o.link,
                        rpid: o._id,
                        nickname: o.nick,
                    });
                }
            }
        }

        console.log(replyList);
        for (let i of replyList) {
            console.log(i);
            for (let o in result) {
                for (let j of result[o]) {
                    if (i.pid == j.rpid || i.rid == j.rpid) {
                        if (!j.replies) j.replies = [];
                        let label = null;
                        if (i.master) label = 'admin';
                        j.replies.push({
                            content: i.comment,
                            timestamp: Number(i.created.$numberLong),
                            email: i.mail,
                            auth: i.uid,
                            label,
                            ua: i.ua,
                            hide: i.isSpam,
                            url: i.link,
                            rpid: i._id,
                            nickname: i._nick,
                        });
                    }
                }
            }
        }
        document.getElementById("twikoo-cvt-text").value = JSON.stringify(result, null, 4);
        alert('Twikoo 评论数据已转换完成！');
    } catch(e) {
        alert('评论转换失败，数据可能不是正确的格式，请检查控制台。');
        console.warn(e);
    }

}
