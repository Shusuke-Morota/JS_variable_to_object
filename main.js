function a() {
    console.log('a is called');
}
a();


//関数や変数は実行前にメモリ上に配置されるので、コードの実行が定義の前でも正しく反映される。

//例) functionの前にa(); が来ていても正しく反映される。


console.log(b);
var b = 0;
