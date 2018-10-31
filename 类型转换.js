// 比较,结果都是用console.log(输出)
[] == ![] // true 
NaN !== NaN // true 

1 == true // true 
2 == true // false 
"2" == true // flase 

null > 0 // false 
null < 0 // false 
null == 0 // false 
null >= 0 // true 

// 加法 
true + 1 // 2
undefined + 1 // NaN 
null + 1 // 1 

let obj = {};

obj + 1 // [object Object]1 
{} + {} // Chrome 上显示 "[object Object][object Object]"，Firefox 显示 NaN 

[] + {} // [object Object] 
+[] // 等价于 + "" => 0 

[2, 3] + [1, 2] // '2,31,2' 
[2] + 1 // '21' 
[2] + (-1) // "2-1" 

// 减法或其他操作，无法进行字符串连接，因此在错误的字符串格式下返回 NaN 
[2] - 1 // 1 
[2, 3] - 1 // NaN 
{} - 1 // NaN
[] - 1 // -1