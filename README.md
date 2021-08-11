这是一个驾校模拟演变模拟器，模拟一个学员从报考到拿到驾照的整个过程。
玩家扮演驾校的角色，目的是获取更多的钱并且保证学员的整体通过率

主要分为三个大类
+ 学员
+ 驾校
    + 报名处
    + 练车场地
+ 驾驶人考场
    + 科一，科四考试区域
    + 科二考试区域
    + 科三考试区域





## 文件目录指示
+ base 人物，建筑的model
+ game 游戏系统
+ time 事件控制系统
+ 



Person {
    name,
    identityId,
    age,Markdown All in One
    sex,
    character, // 性格，影响考场上的发挥
}


// 报错记录
> main.js:2 Uncaught ReferenceError: exports is not defined
> 原因：ts使用的是commonjs，原生浏览器是不支持commonjs的。 commonjs一般被使用在nodejs里。
> 解决办法：使用webpack的babel
  
