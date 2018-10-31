//indexOf方法-----长度100W跨度为100W的数组 死了
function unique(arr) {
    var temp = [];
    for (var i in arr) {
        if (temp.indexOf(arr[i]) < 0) {
            temp.push(arr[i])
        }
    }
    return temp;
}
//对象键值对法-----长度100W跨度为100W的数组783ms
function unique(arr) {
    var obj = {}
    var temp = []
    for (var i in arr) {
        var val = arr[i]
        var type = typeof val
        if (!obj[val]) {
            obj[val] = [type]
            temp.push(val)
        } else if (obj[val].indexOf(type) < 0) {
            obj[val].push(type)
            temp.push(val)
        }
    }
    return temp
}

//优化遍历数组法(从左往右依次找出数组元素的最后一次出现)-----长度100W跨度为100W的数组 死了
function unique(arr) {
    var temp = [];
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        temp.push(arr[i])
    }
    return temp;
}

//ES6的Set-----长度100W跨度为100W的数组326ms
function unique(arr) {
    return [...new Set(arr)]
}

var arr = [1, 2,[2, [3, 4]]];
console.log(...arr);