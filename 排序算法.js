//冒泡排序，平均时间复杂度n^2，最好n，最坏n^2，稳定
function pop(arr) {
    var len = arr.length,
        i, j, temp;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
//快速排序，平均时间复杂度nlogn，最好nlogn，最坏n^2，不稳定
function quick(arr) {
    var len = arr.length
    if (len <= 1) {
        return arr
    }
    var flag = Math.floor(len / 2),
        flagVal = arr.splice(flag, 1)[0],
        left = [],
        right = []
    for (var i in arr) {
        if (arr[i] < flagVal) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quick(left).concat(flagVal, quick(right))
}


//选择排序，平均时间复杂度n^2，最好n^2，最坏n^2，不稳定
function select(arr) {
    var len = arr.length
    for (var i = 0; i < len - 1; i++) {
        var key = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[key]) {
                key = j
            }
        }
        var temp;
        if (i != key)
            temp = arr[i];
        arr[i] = arr[key];
        arr[key] = temp
    }
    return arr
}

//插入排序，平均时间复杂度nlogn，最好nlogn，最坏n^2，稳定
function insert(arr) {
    var len = arr.length
    for (var i = 1; i < len; i++) {
        var j = i - 1,
            value = arr[i];
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = value
    }
    return arr
}
