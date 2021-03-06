## イントロダクション

ホームページ作成やWEBの基本といえばHTML。HTMLで枠組みを作り、
基本的な見栄えをCSS形成し、アニメーションや値の受け渡しなど特有な動作をしたい場合はJavaScriptを用いる。

WEBエンジニアにはおおまかに３種類のエンジニアに分かれており、

HTML,CSS,JavaScriptなどを扱い、見栄えの部分を形成するエンジニアを__フロントエンドエンジニア__  
PHPやRuby,Javaなどサーバーサイドを扱うエンジニアのことを__バックエンドエンジニア__  
Linuxサーバやセキュリティ、パフォーマンス測定に趣きを置くのを__インフラエンジニア__

と呼ばれています。

####参照サイト
[フロントエンド、サーバサイド、インフラの具体例](http://qiita.com/shuntaro_tamura/items/e1a20e33c57c71679688)

---

ここではHTML,CSSに関する基本的な知識を説明します。
また、既存のチュートリアルサイトで良いものがたくさんあるので
先に下記で紹介するそちらをおすすめ致します。

##おすすめ参考サイト
* [W3Schools Online Web Tutorials](http://www.w3schools.com)
海外の入門サイト。
HTML,HTML5,CSS,CSS3,JavaScript,jQuery,SQL,PHPまで全てあり
デモ環境も揃っているのでだいたいのチュートリアルは理解できるはず。


##HTML
HTMLはウェブ上の文書を記述するためのマークアップ言語です。
####参照サイト
[Wikipedia - HTML](http://ja.wikipedia.org/wiki/HyperText_Markup_Language)


-

###HTMLタグを把握しよう

####参照サイト
* [HTML 要素リファレンス - MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element)
* [HTMLタグリファレンス（目的別）](http://www.htmq.com/html/indexm.shtml)


-
###正しい構文を身につけよう
[World Wide Web(通称：W3C)](http://ja.wikipedia.org/wiki/World_Wide_Web_Consortium)で使用される各種技術の標準化を推進する為に設立された標準化団体が作ったHTMLやXHTML,CSSなどの規格があるので正しいコーディングについてはしっかり確認しましょう。

####参照サイト
* [HTML の構文チェック - W3C Markup Validation Service](http://webkaru.net/dev/html-w3c-markup-validation-service/)



##CSS
CSSは、HTMLやXMLの要素をどのように修飾（表示）するかを指示する、W3Cによる仕様の一つで、文書の構造と体裁を分離させるという理念を実現する為に提唱されたスタイルシートの具体的な仕様の一つ。
####参照サイト
[Wikipedia - CSS](http://ja.wikipedia.org/wiki/Cascading_Style_Sheets)



-

##HTMLの要素一覧

```html
HTML

<!-- コメントアウト -->
<!DOCTYPE> <!-- ドキュメントタイプの宣言の時に使う　-->

<html> <!-- htmlの文書であるという宣言 -->

<head> <!-- ヘッダ情報 -->

<meta> <!-- 文書に関する情報 -->
<meta name ="author" content="tech togics"><!-- さ作者名を 「 tech logics 」 にする-->
<meta name="description" content="ホームページ作成やWEBの基本といえばHTML"> <!-- サイトの説明を記述 -->
<meta name="keywords" content="tech logics,html,css"> <!-- キーワードを記述 -->
<meta name="generator" content="Sublime Text"> <!-- ページを作成した際に使用したソフトウェア名を記述 -->
<meta http-equiv="Content-Type" content="text/html;charset=Shift_JIS"> <!-- 使用される文字コードを指定 -->
<meta http-equiv="Content-Style-Type" content="text/css"> <!-- 使用されるスタイルシート言語を指定 -->
<meta http-equiv="Content-Script-Type" content="text/javascript"> <!-- 使用されるスクリプト言語を指定 -->
<meta http-equiv="refresh" content="5"> <!-- 指定した秒数後にページをリロードさせることができる ５秒後-->
<meta http-equiv="refresh" content="10;http://techlogics.link/"> <!--指定した秒数後にページを移動させることができる ５秒後 -->

<body> <!-- 文書の本体を表す -->
<!-- 非推奨  属性-->
<!--text="色"   文書中の文字の色を指定する-->
<!--link="色"    まだ見ていないページへのリンク箇所の色を指定する -->
<!--vlink="色    すでに見たページへのリンク箇所の色を指定する-->
<!--alink="色"   リンクをクリックした時のリンク箇所の色を指定する -->
<!--bgcolor="色"     文書の背景色を指定する -->
<!--background="画像"     文書の壁紙を指定する -->
<body bgcolor="#ffffff" text="#000000" link="#0000ff" vlink="#ff00ff" alink="#ff0000">

<h1> ~ <h6> <!-- 見出し -->

<p> <!-- ひとつの段落（パラグラフ）であることを表す -->
<!-- 非推奨属性属性 -->
<!--align="left"    左揃え -->
<!--align="right"   右揃え -->
<!--align="center"   中央揃え -->
<!--align="justy"   両端揃え -->


<div></div> <!-- 基本的なブロック要素 -->

<section></section> <!-- 意味や機能のひとまとまりのこと -->

<article></article> <!-- 独立した記事のセクション -->

```

##CSSの要素一覧

```css
CSS

/* コメントアウト */
/*font-size ・・・ フォントサイズ */
font-size: 1px; /* フォントサイズ */

/*font-style ・・・ フォントスタイル */
font-style: normal; /* 初期値。標準 */
font-style: italic; /* イタリック体 */
font-style: oblique; /* 斜体 */

/* font-variant ･･･ フォントをスモールキャップにする */
font-variant: normal; /* 初期値。標準 */
font-variant: small-caps; /* スモールキャップのフォントで表示 */

/* font-weight ･･･ フォントの太さを指定 */

font-weight: normal; /* 標準(400) */
font-weight: bold; /* 太字(700) */
font-weight: lighter; /*相対的に補足する */
font-weght: bolder; /* 相対的に太くする */
font-weght: 100; /*100,200,300,400,500,600,700,800,900で指定 */

/* font-family ･･･ フォントの種類を指定 */
/* フォント名で指定 シングルコーテーション(')またはダブルコーテーション(")で囲む*/
font-family: "ＭＳ ゴシック"; /* MSゴシック */
font-family: "ＭＳ 明朝"; /* MS明朝 */
/* キーワードで指定 */
font-family: sans-serif; /* ゴシック系のフォント */
font-family: serif; /* 明朝系のフォント */
font-family: cursive; /* 筆記体・草書体のフォント */
font-family: fantasy; /* 装飾的なフォント */
font-family: monospace; /* 等幅フォント */
/* 複数指定で環境で利用可能なものが選択され、イメージに近いフォントを表示させることが出来る */
font-family: "ＭＳ ゴシック",sans-serif;
font-family: "ＭＳ 明朝",serif;

/* font-size-adjust ･･･ フォントのサイズを調整 */
font-size-adjust: none; /* 初期値 */
font-size-adjust: 0.5; /* ( 小文字xの高さ / フォントの高さ )の数値で指定 */



line-heght: 1px; /* 行間 */


/*width ・・・ 幅を指定*/
width: auto; /*初期値。自動設定*/
width: 1px; /*値で指定*/
width: 1%;/*%で指定*/

/*max-width ・・・ 幅の最大値を指定*/
max-width: none; /*初期値。最大値を制限しない*/
max-width: 1px; /*値で指定*/
max-width: 1%; /*%で指定*/

/*min-width ・・・ 幅の最小値を指定*/
min-width: 1px; /*値で指定*/
min-width: 1%; /*%で指定*/


/*height ・・・ 高さを指定*/
height: auto; /*初期値。自動設定*/
height: 1px; /*値で指定*/
height: 1%;/*%で指定*/

/*max-height ・・・ 高さの最大値を指定*/
max-height: none; /*初期値。最大値を制限しない*/
max-height: 1px; /*値で指定*/
max-height: 1%; /*%で指定*/

/*min-height ・・・ 高さの最小値を指定*/
min-height: 1px; /*値で指定*/
min-height: 1%; /*%で指定*/


/*margin ・・・ 外側の余白を指定*/
margin: auto; /*自動*/
margin: 1px; /*数値で指定*/
margin: 1%; /*%で指定*/
/*２つの値で上、下の外側の余白を指定*/
margin: 1px 2px;/*上1px 下2px;*/
/*3つの値で上、左右、下の外側の余白を指定*/
margin: 1px 2px 3px;/*上1px 左右2px; 下3px*/
/*4つの値で上、右、下、左の外側の余白を指定*/
margin: 1px 2px 3px 4px; /*上1px、右2px、下3px、左4px*/

/*margin-top ・・・ 上の外側の余白を指定*/
/*margin-left ・・・ 右の外側の余白を指定*/
/*margin-rigth ・・・ 左の外側の余白を指定*/
/*margin-bottom ・・・ 下の外側の余白を指定*/


/*padding ・・・ 内側の余白を指定*/
padding: auto; /*自動*/
padding: 1px; /*数値で指定*/
padding: 1%; /*%で指定*/
/*２つの値で上、下の内側の余白を指定*/
padding: 1px 2px;/*上1px 下2px;*/
/*3つの値で上、左右、下の内側の余白を指定*/
padding: 1px 2px 3px;/*上1px 左右2px; 下3px*/
/*4つの値で上、右、下、左の内側の余白を指定*/
padding: 1px 2px 3px 4px; /*上1px、右2px、下3px、左4px*/

/*padding-top ・・・ 上の内側の余白を指定*/
/*padding-left ・・・ 右の内側の余白を指定*/
/*padding-rigth ・・・ 左の内側の余白を指定*/
/*padding-bottom ・・・ 下の内側の余白を指定*/


/*color ・・・ 文字色、色を指定*/
color: #000000; /* 黒 */
color: #f00; /* 赤 */
color: rgb(0,255,0); /* 緑 */
color: rgba(0,0,0,0.5);/* 半透明の黒 */
color: blue; /* 青,カラーネームで指定,red,green,black,orangeなど */


/*background ・・・ 背景に関する指定*/
background: #000000; /* 背景色を黒にする */
background: url("../image/bg.jpg"); /* 背景をbg.jpgにする */
background: rgb(0,0,0) url("../image/bg.jpg"); /* 背景色を黒,bg.jpgにする */

/*background-color ・・・ 背景色を指定 */
background-color: transparent; /* 背景透明。初期値 */
background-color: #ffffff; /* 背景色を白にする */
background-color: rgba(255,0,0,0.5); /* 背景色を半透明の赤にする */

/*background-image ・・・ 背景画像を指定 */
background-image: none; /* 何もない 初期値 */
background-image: url(URI); /* 背景をURIで指定した画像にする */
background-image: url("../image/bg.jpg"); /* 背景をbg.jpgにする */

/*background-attachment ・・・ 背景画像の固定・移動を指定 */
background-attachment: fixed; /* 背景画像を固定、スクロールしても動かない */
background-attachment: scroll; /* スクロールで背景画像が移動 */

/*background-position ・・・ 背景画像の表示位置を指定 */
background-position: right; /* 右側に表示 top,right,left,bottom,centerで指定できる*/
background-position: left bottom; /*左下に表示 */
background-position: 30% 50%; /*左から30%、上から50%のところに表示 */
background-position: 100px 200px; /*左から100px、上から200pxのところに表示 */

/*background-repeat ・・・ 背景画像のリピートを指定 */
background-repeat: repeat; /* 初期値。繰り返して表示 */
background-repeat: repeat-x; /* 横方向のみ繰り返して表示 */
background-repeat: repeat-y; /* 縦方向のみ繰り返して表示 */
background-repeat: no-repeat; /*画像を一回だけ表示させて繰り返さない */

/* css3 */
/* background-clip ・・・ 背景の適用範囲を指定 */
background-clip: border-box; /* 初期値 */
background-clip: padding-box; /* パディングボーダーボックス */
background-clip: content-box; /* コンテントボーダーボックス */

/* background-origin ・・・ 背景の基準位置を指定 */
background-origin: padding-box; /* 初期値 */
background-origin: border-box; /* 背景をボーダーボックスに相対的に適用 */
background-origin: content-box; /* 背景をコンテントボックスに対して相対的に適用 */

/* background-size ・・・ 背景画像のサイズを指定 */
background-size: auto; /* 初期値 */
background-size: contain; /* 背景領域に収まる最大サイズになるように背景画像を拡大縮小 */
background-size: cover; /* 背景領域を完全に覆う最小サイズになるように背景画像を拡大縮小 */
background-size: 10px 30px; /* 背景画像の幅・高さを指定 */
background-size: 50% 50%; /* 背景領域に対する背景画像の幅・高さのパーセンテージを指定 */





```


