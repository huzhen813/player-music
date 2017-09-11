// 基本函数定义，对所有的函数进行分类��?
// array��? object��? string ，number��? dom��? 基本
var log = console.log.bind(console)

// 合并dqs和dqsa，按需返回
var dqs = function(selector) {
    var len = document.querySelectorAll(selector).length
    if (len > 1) {
        return document.querySelectorAll(selector)
    }
    return document.querySelector(selector)
}

var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}
// 判断字符串是否是数字
var isNum = function (s) {
    if (s!=null && s!="") {
        return !isNaN(s);
    }
    return false;
}
// 对一些number 补零，js不支��?1 < arg < 10
var addZero = function (arg) {
    if (arg >= 0 && arg < 10) {
        arg = '0' + arg
    }
    return arg
}

// 把秒��?153.54）转换成时间格式02:33
var transTime = function(time) {
    var minute = parseInt(time / 60)
    var second = parseInt(time % 60)
    // 补零
    var minute = addZero(minute)
    var second = addZero(second)
    // 如果小于一个小��?
    if (minute < 60) {
        var t = `${minute}:${second}`
    } else {
        var hour = parseInt(minute / 60)
        var minute = parseInt(minute % 60)

        var minute = addZero(minute)
        var hour = addZero(hour)
        var t = `${hour}:${minute}:${second}`
    }
    return t
}

// 当前时间的转��?
// new Date()返回的时间格式如��?
// Tue Jun 13 2017 14:27:59 GMT+0800 (中国标准时间)
var nowTime = function() {
    var d = new Date()
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    var month = addZero(month)
    var day = d.getDate()
    var hour = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    var sec = addZero(sec)

    return `${year}/${month}/${day} ${hour}:${min}:${sec}`
}

// 在a~b之间生成随机整a��?
// generate
var randomInt = function(a, b) {
    // 返回 0 ~ 1 之间的随机数��?
    var mathRandom = Math.random()
    var numberRandom = mathRandom * (b - a + 1) + (a - 1)
    // 对数进行上舍入��?
    var intRandom = Math.ceil(numberRandom)
    return intRandom
}

// 使用函数检查一个数字是否是奇数（奇数对2取余数不等于0��?
var isOdd = function(n) {
    // 取余数的操作符是 %
    if (n % 2 != 0) {
        return true
    } else {
        return false
    }
}

// 用于测试的套��?
var ensure = function(condition, message) {
    if (!condition) {
        console.log(message)
    }
}

// 在该元素的最后添加子元素
var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

// find 函数可以查找 element 的所有子元素
var findElement = function(element, selector) {
    var len = element.querySelectorAll(selector).length
    if (len > 1) {
        return element.querySelectorAll(selector)
    }
    return element.querySelector(selector)
}

// 查找target在兄弟元素的序号
var eleIndex = function () {
    var target = event.target
    // 确认点击的是第几个index
    var targetAll = target.parentElement.children
    var index = 0
    for (var i = 0; i < targetAll.length; i++) {
        if (targetAll[i].contains(target)) {
            var index = i
        }
    }
    return index
}

// 当无selector参数时，删除ele的所有子元素
// 有时，删除ele下的含有selector的所有子元素
var clearEle = function (ele, selector) {
    var eleSel = ele.querySelector(selector)
    if (eleSel == null) {
        while (ele.firstChild) {
            ele.removeChild(ele.firstChild);
        }
    } else {
        var eleSel = ele.querySelectorAll(selector)
        for (var i = 0; i < eleSel.length; i++) {
            eleSel[i].remove()
        }
    }
}
// 还没有完成的函数，返回一个数组，包含element下所有非selector元素。没有意��?
// 目前有元素包含关系了，A.contains(B)
// 适用于弹窗之类的东西，当点击弹窗以外的地方时，关闭弹��?

var removeClassAll = function(className) {
    var selector = '.' + className
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.classList.remove(className)
    }
}
// 事件绑定
// 单个绑定
var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// 多个绑定
var bindEventAll = function(selector, eventName, callback) {
    var elements = document.querySelectorAll(selector)
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        e.addEventListener(eventName, callback)
    }
}

// AJAX事件，request是object
var ajax = function(request) {
    var r = new XMLHttpRequest()
    // 设置请求方法和请求地址
    r.open(request.method, request.path, true)
    // 设置发送的数据的格��?
    r.setRequestHeader('Content-Type', 'application/json')
    // 注册响应函数
    r.onreadystatechange = function() {
        if (r.readyState === 4) {
            request.reseponseCallback()
        } else {
            console.log('change', request)
        }
    }
    // 发送请��?
    r.send(request.data)
}
// aiax(request)

// 由于typeof类型判断有种种弊端，可以借鉴jQuery.type()的方��?
//关于typeof的用法和弊端见下
//http://bonsaiden.github.io/JavaScript-Garden/zh/#types.typeof
var newTypeOf = function (obj){
    var class2type = {} ;
    var allType = "Boolean,Number,String,Function,Array,Date,RegExp,Object,Error"

    // forEach() 方法对数组的每个元素执行一次提供的函数��?
    allType.split(",").forEach(function(e, i) {
        class2type[ "[object " + e + "]" ] = e.toLowerCase();
    })
    if ( obj == null ){
        return String(obj);
    }
    return typeof obj === "object" || typeof obj === "function" ? class2type[ class2type.toString.call(obj) ] || "object" : typeof obj;
}

// 判断有多少个字符串里面含有某字符的数量，
// 1.拆分多个，比如ss有多个字符。ss = '22'
// 2.判断非字符串，比如数字，其没有length和slice方法，因此将其类型转换成string

var hasStrNum = function(bs, ss) {
    // 类型判断��?
    var bsType  = (newTypeOf(bs)  != 'string')
    var ssType  = (newTypeOf(ss) != 'string')
    // 类型转换，是否有其他更好的方式，不用强制转换��?
    if (bsType || ssType) {
        var bs = String(bs)
        var ss = String(ss)
    }
    var num = 0
    var sslen = ss.length
    for (var i = 0; i < bs.length; i++) {
        var n = bs.slice(i, i + sslen)
        if (n == ss) {
            var num = num + 1
        }
    }
    return num
}

// var bs = 12345645
// var ss = 45
// hasStrNum(bs, ss)
// 要看
// var ss = 454
// var bs = 12345454
// 需要考虑这种情况，是否允许hasStrNum(bs, ss) = 2，即当ss = 454 ,bs中包��?45454��?
// 此时hasStrNum(bs, ss)��?1还是2��?
// if (n == ss) {
//     var num = num + 1
//     var i = i + sslen - 1
// }

// 整数、有两位小数��?
// 输入限制，取代正则��?
var is_digit = function(s) {
    var numbers = '0123456789.'
    var emptyStr = ''
    for (var i = 0; i < s.length; i++) {
        if (!numbers.includes(s[i])) {
            return emptyStr
        }
    }
    // 英文句点最多只能有一��?
    var con1 = (hasStrNum(s, '.') >= 2)
    // 小数点后最多只能有两位
    var con2 = (s.split('.')[1] != undefined && s.split('.')[1].length > 2)
    // 条件判断为false，返回空字符��?
    if (con1 || con2) {
        return emptyString
    }
    return s
}

// input等输入框的输入限��?
// var inputPrice = dqs('.input-price')
// inputPrice.addEventListener('keyup', function(event) {
//     var target = event.target
//     target.value = is_digit(target.value)
// })

// 延时函数的另一种写法，
// 不可以直接调用f，因为其内部存在调用信息��?
var setTimeRun = function(start, end, delayTime) {
    var f = function() {
        console.log(start, 'start的数��?')
        start++
        if (start <= end) {
            setTimeout(f, delayTime)
        }
    }
    f()
}
// setTimeRun(0, 255, 3000)

// 清除所有的setTimeout
// Javascript 中并没有内置的函数来清除所有的定时器（timeout ��? interval），
// 不过我们可以使用一种暴力的方法来清除所有的定时器��?
// 由于 ID 会随着定时器被调用的增加而增加，
// 因此可以记录下最大的 ID 并一起清除��?
var clearAllTimeout = function () {
    // 先调用一个setTimeout，记录TimeoutId的最大值biggestTimeoutId
    var biggestTimeoutId = window.setTimeout(function() {}, 1)
    for (var i = 1; i < biggestTimeoutId; i++) {
        clearTimeout(i);
    }
}

//
//将两个数组打包成object
var zipObj = function(keys, values) {
    var index = 0
    // 取两个数组中长度的最小��?
    var len = Math.min(keys.length, values.length)
    var out = {}
    while (index < len) {
        out[keys[index]] = values[index]
        index += 1
    }
    return out
}

// var keys = ['q', 'd', 456]
// var values = [1, 2]
// zipObj(keys,values )
// {q: 1, d: 2}

// 数组去重
var uniArr = function(arr) {
    //临时数组
    var n = []
    for (var i = 0; i < arr.length; i++) {
        if (n.indexOf(arr[i]) == -1)
            n.push(arr[i])
    }
    return n
}
// ES6的方法set数组去重，返回的是Set
var uniArr6 = function(arr) {
    //临时数组
    var s = new Set()
    for (var i = 0; i < arr.length; i++) {
        s.add(arr[i])
    }
    return s
}

// 返回对象的key
var keysIn = function (obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
}

// 面向Stack Overflow编程，出现error时，页面跳转到Stack Overflow搜索错误信息的界面上��?
// try {
//     console.log(hk);
// } catch(e) {
//     window.location.href = "https://stackoverflow.com/search?q=" + e.message
// }

// 列表排序

// 比较函数，先根据val是否为数字，然后根据本地排序
var comparer = function (index) {
    return function(a, b) {
        var valA = getCellValue(a, index)
        var valB = getCellValue(b, index);
        return isNum(valA) && isNum(valB) ?
            valA - valB : valA.localeCompare(valB);
    };
}

// 获得每个row的Value
var getCellValue = function (row, index) {
    var cell = row.querySelectorAll('td');
    return cell[index].innerText;
}

var sortTable = function () {
    var index = eleIndex()
    var target = event.target
    var table = target.closest('table')
    // 选取table下所有的tr数组
    var trAll = table.querySelectorAll('tbody tr')
    var trAllArr = []
    for (var i = 0; i < trAll.length; i++) {
        trAllArr.push(trAll[i])
    }
    var rows = trAllArr.sort(comparer(index));
    // 排序，逆序
    this.asc = !this.asc;
    if (!this.asc) {
        rows = rows.reverse();
    }
    // 删除所有tbody的子元素
    var tbody = table.querySelector('tbody');
    var tr = table.querySelector('tr');
    clearEle(tbody, 'tr')
    for (var i = 0; i < rows.length; i++) {
        appendHtml(tbody, rows[i].innerHTML)
    }
}

// IE版本的检��?
var testIEversion = function () {
    var win = window;
    var doc = win.document;
    var input = doc.createElement ("input");

    var ie = (function (){
    //"!win.ActiveXObject" is evaluated to true in IE11
    if (win.ActiveXObject === undefined) return null;
    if (!win.XMLHttpRequest) return 6;
    if (!doc.querySelector) return 7;
    if (!doc.addEventListener) return 8;
    if (!win.atob) return 9;
    if (!input.dataset) return 10;
    return 11;
    })();
    return ie
}
//
// var IEversion = testIEversion()
//
// console.log('前面的IE的版本测��?', IEversion);
// if (IEversion <= 9) {
//     console.log('后面的IE的版本测��?', IEversion);
// }
// 如果不是IE，IEversion == null
