function a() {

}
function b() {
    a();
}
function c() {
    b();
}

c();


//コールスタックに関して

//コールスタックとは、実行中のコードが辿って来たコンテキストの積み重ねをいう。

//コールスタックの辿り方
//デベロッパーツール→sourcesのタブを開く→該当するjsファイルのブレイクポイントをチェック
//steo inしていく