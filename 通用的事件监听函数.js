// event(事件)工具集，来源：github.com/markyun
myEvent = {
    // 页面加载完成后
    readyEvent: function (func) {
        if (func == null) {
            func = document;
        }
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                oldonload();
                func();
            };
        }
    },
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 参数： 操作的元素,事件名称 ,事件处理程序
    addEvent: function (element, type, func) {
        if (element.addEventListener) {
            //事件类型、需要执行的函数、是否捕捉
            element.addEventListener(type, func, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, function () {
                func.call(element);
            });
        } else {
            element['on' + type] = func;
        }
    },
    // 移除事件
    removeEvent: function (element, type, func) {
        if (element.removeEventListener) {
            element.removeEventListener(type, func, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, func);
        } else {
            element['on' + type] = null;
        }
    },
    // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
    stopPropagation: function (event) {
        var e = event || window.event
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },
    // 取消事件的默认行为
    preventDefault: function (event) {
        var e = event || window.event
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },
    // 获取事件目标
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
    getEvent: function (event) {
        var e = event || window.event;
        if (!e) {
            var c = this.getEvent.caller;
            while (c) {
                e = c.arguments[0];
                if (e && Event == e.constructor) {
                    break;
                }
                c = c.caller;
            }
        }
        return e;
    },
};