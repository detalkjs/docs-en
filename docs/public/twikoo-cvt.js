function twikooCvt() {
    let data = document.getElementById("twikoo-cvt-text").value;

    try {
        data = JSON.parse(data);
    } catch(e) {
        alert("JSON 格式错误");
        return;
    }
    // 传入 Array
    
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
                    timestamp: o.created.$numberLong,
                    email: o.mail,
                    auth: o.uid,
                    label,
                    ua: o.ua,
                    hide: o.isSpam,
                    url: o.link,
                    rpid: o._id,
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
                        timestamp: i.created.$numberLong,
                        email: i.mail,
                        auth: i.uid,
                        label,
                        ua: i.ua,
                        hide: i.isSpam,
                        url: i.link,
                        rpid: i._id
                    });
                }
            }
        }
    }

    document.getElementById("twikoo-cvt-text").value = JSON.stringify(result, null, 4);
}