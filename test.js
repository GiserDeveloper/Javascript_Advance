//this总结
//1、全局的this(浏览器)等同于window
//2、一般函数的this(浏览器)
function Globalthis(){
    document.write(this.document === document);
    document.write(this === window);
    this.a = 37;
    document.write(window.a);
}
//3、作为对象方法的函数的this
var o = {
    prop:37,
    f:function(){
        return this.prop;
    }
};
document.write(o.f());
//4、对象原型链上的this
var o1 = {
    f:function(){
        return this.a+this.b
    }
};
var p = Object.create(o1);
p.a = 1;
p.b = 4;
document.write(p.f());
//5、get/set方法与this
function modulus(){
    return Math.sqrt(this.re * this.re + this.im*this.im);
}
var o2 = {
    re:1,
    im:-1,
    get phase(){
        return Math.atan2(this.im,this.re);
    }
};
Object.defineProperty(o2,'modulus',{
    get:modulus,enumerable:true,configurable:true});
document.write(o2.phase,o2.modulus);
//6、构造器中的this
function MyClass(){
    this.a = 37;
}
var o3 = new MyClass();
document.write(o3.a); //37

function C2(){
    this.a = 37;
    return {a:38};
}

o3 = new C2();
document.write(o3.a); //38
