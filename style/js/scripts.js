/*-----------------------------------------------------------------------------------*/
/*	POSTS GRID
/*-----------------------------------------------------------------------------------*/


// 初期設定
var disp_entry_count = 20;       //表示させたい記事の数

// RSS URL
var site = new Array();

site[0] = {
    title:'GIZUMODO',
    url:'http://feeds.gizmodo.jp/rss/gizmodo/index.xml',
    disp_entry:4        // 取得する記事の数
};

site[1] = {
    title:'Gigazin',
    url:'http://feed.rssad.jp/rss/gigazine/rss_2.0',
    disp_entry:4        // 取得する記事の数
};

site[2] = {
    title:'ウェブソク',
    url:'http://news.7zz.jp/feed',
    disp_entry:4        // 取得する記事の数
};

site[3] = {
    title:'コリス',
    url:'http://coliss.com/feed',
    disp_entry:4        // 取得する記事の数
};

var channel = new Array();
var entry = new Array();
var entries = new Array();
var Feed = "";

google.load("feeds", "1");
function init() {

    var site_count = 0;

    for (var i=0; i<site.length; i++){

        // 読み込むRSSを設定
        var feed = new google.feeds.Feed(site[i]['url']);
        feed.setNumEntries(site[i]['disp_entry'])
        feed.load(function(rss) {
            if (!rss.error) {

                // RSSからサイトの情報を配列に格納
                channel['title'] = rss.feed.title;
                channel['link'] = rss.feed.link;
                channel['favicon'] = "http://favicon.hatena.ne.jp/?url=" + channel['link'];
                channel['description'] = rss.feed.description;
                channel['author'] = rss.feed.author;

                // RSSから記事の情報を配列に格納
                for (var j=0; j<rss.feed.entries.length; j++){

                    var feed_entry = rss.feed.entries[j];
                    var entry = {
                        site_title : channel['title'],
                        site_link : channel['link'],
                        site_favicon : channel['favicon'],
                        title : feed_entry.title,
                        link : feed_entry.link,
                        content : feed_entry.content,
                        contentSnippet : feed_entry.contentSnippet,
                        publishedDate : feed_entry.publishedDate
                    };

                    var date = new Date(entry['publishedDate']);
                    entry['time'] = date.getTime();
                    var yy = date.getYear();
                    var mm = date.getMonth() + 1;
                    var dd = date.getDate();
                    if (yy < 2000) { yy += 1900; }
                    if (mm < 10) { mm = "0" + mm; }
                    if (dd < 10) { dd = "0" + dd; }
                    entry['date'] = yy + "年" + mm + "月" + dd + "日";

                    entry['img'] = entry['content'].match(/src="(.*?)"/igm);

                    if (entry['img'] != null) {
                        for (var k=0; k<entry['img'].length; k++){
                            entry['img'][k] = entry['img'][k].replace(/src=/ig, "");
                            entry['img'][k] = entry['img'][k].replace(/"/ig, "");
                        }
                    }
                    entries.push(entry);
                }
            }
            site_count++;
            if (site.length == site_count){ disp(); }
        });
    }
}

function disp() {

    //日付順に並べ替え
    entries.sort (function (b1, b2) { return b1.time < b2.time ? 1 : -1; } );

    // 記事をhtmlに整形
    for (var l=0; l<disp_entry_count; l++){
        if (entries.length < l+1){ break; }

        Feed += '<article class="c_article"><div class="p_article"><a class="table" href="' + entries[l]['site_link']
                    + '" target="_blank"><h3><img src="' + entries[l]['site_favicon'] + '">'
                    + '<span>'
                    + entries[l]['site_title'] + '</span></h3></a>'
                    + '<p class="date">'
                    + entries[l]['date'] + '</p>';
                    // if (entries[l]['img'] != null) { Feed += '<img class="a_img" src="' + entries[l]['img'][0] + '">'; }
                    if (entries[l]['img'] != null) { Feed += '<img class="page-img" width="100%" src="' + entries[l]['img'][0] + '">';}
                    Feed += '<a href="'+ entries[l]['link'] + '" target="_blank">'
                    + '<h4>'
                    + entries[l]['title']
                    + '</h4>'
                    + '<p class="text">' + entries[l]['contentSnippet'].substr(0, 100) + '……</p>' + '</a></div></article>';

    }
    // 表示するタグに追加
    $('#topics').append( Feed );
    // $(".c_article").height($(".c_article").height());
    // });

    // $(".c_article").each(function(){
    //     $(this).height($(this).height());
    // });
    // $('#topics').masonry({
    //     itemSelector: '.c_article',
    //     columnWidth: 200, //一列の幅サイズを指定
    //     // isAnimated: true,
    //     // duration: 400,
    //     isFitWidth: true
    // });
}

google.setOnLoadCallback(init);


// $(".c_article").each(function(){
//     $(this).height($(this).height());
// });

var showFlag = false;
var topBtn = $('#page-top');
topBtn.css('bottom', '-100px');
var showFlag = false;
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        if (showFlag == false) {
            showFlag = true;
            topBtn.stop().animate({'bottom' : '20px'}, 200);
        }
    } else {
        if (showFlag) {
            showFlag = false;
            topBtn.stop().animate({'bottom' : '-100px'}, 200);
        }
    }
});
//スクロールしてトップ
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

    // $('#topics').masonry({
    //   itemSelector: '.c_article',
    //   columnWidth: 200 //一列の幅サイズを指定
    // });