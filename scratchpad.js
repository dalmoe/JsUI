var count = 0;

function fib(n, node){
    var tree = buildFib(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "fib")
}

function buildFib(n){
    var value;
    var subDiv = document.createElement('div');
    subDiv.setAttribute("class", "fib");
    if(n < 2){
        if (n === 0){
            value = 0;
        }
        else if(n === 1){
            value = 1;
        }
        
        var p = document.createElement('p');
        p.textContent = "Fib(" + n + ") = " + value;
        subDiv.appendChild(p);
    }
    else{
        var leftTree = buildFib(n - 1);
        var clas = leftTree.html.getAttribute("class");
        leftTree.html.setAttribute("class", clas + " fib-left");
        
        var rightTree = buildFib(n - 2);
        clas = rightTree.html.getAttribute("class");
        rightTree.html.setAttribute("class", clas + " fib-right");
        
        value = leftTree.value + rightTree.value;
        var p = document.createElement('p');
        p.textContent = "Fib(" + n + ") = " + value;
        
        var clearDiv = document.createElement('div');
        clearDiv.setAttribute("class", "clear");
        
        
        subDiv.appendChild(p);
        subDiv.appendChild(leftTree.html);
        subDiv.appendChild(rightTree.html);
        subDiv.appendChild(clearDiv);
        
    }
    count++;
     return {'value' : value, 'html' : subDiv}; 
}

function pell(n, node){
    var tree = buildPell(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "pell");
}

function buildPell(n){
    var value;
    var subDiv = document.createElement('div');
    subDiv.setAttribute("class", "pell");
    
    if(n < 2){
        if(n === 1){
            value = 1;
        }
        else if(n === 0){
            value = 0;
        }
        
        if(count > 32){
            var button = document.createElement('div');
            button.setAttribute("class", "button");
            button.setAttribute('id', n)
            button.textContent = "Click to show subtree";
        }
        else{
            var p = document.createElement('p');
            p.textContent = "Pell(" + n + ") = " + value;
            subDiv.appendChild(p);
        }
    }
    else{
        var leftTree = buildPell(n - 1);
        leftTree.html.setAttribute("class", "pell-left");
        
        var rightTree = buildPell(n - 2);
        rightTree.html.setAttribute("class", "pell-right");
        
        value = (2 * leftTree.value) + rightTree.value;
        var p = document.createElement('p');
        p.textContent = "Pell(" + n + ") = " + value;
        
        var clearDiv = document.createElement('div');
        clearDiv.setAttribute("class", "clear");
        
        if(count > 32){
            var button = document.createElement('div');
            button.setAttribute("class", "button");
            button.setAttribute('id', n)
            button.textContent = "Click to show subtree";
        }
        else{
            subDiv.appendChild(p);
            subDiv.appendChild(leftTree.html);
            subDiv.appendChild(rightTree.html);
        }
    }
    count++;
    return {'value': value, 'html': subDiv};
}

function trib(n, node){
    var tree = buildTrib(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "trib");
}

function buildTrib(n){
    var value;
    var subDiv = document.createElement('div');
    subDiv.setAttribute("class", "trib");
    if(n < 3){
        if(n === 2){
            value = 2;
        }
        else if (n === 1){
            value = 1;
        }
        else if (n === 0){
            value = 0;
        }
        
        var p = document.createElement('p');
        p.textContent = "Trib(" + n + ") = " + value;
        subDiv.appendChild(p);
    }    
    else{
        var leftTree = buildPell(n - 1);
        leftTree.html.setAttribute("class", "trib-left");
        
        var midTree = buildTrib(n - 2);
        midTree.html.setAttribute("class", "trib-mid");
        
        var rightTree = buildPell(n - 3);
        rightTree.html.setAttribute("class", "trib-right");
        
        value = leftTree.value + midTree.value + rightTree.value;
        var p = document.createElement('p');
        p.textContent = "Pell(" + n + ") = " + value;
        
        var clearDiv = document.createElement('div');
        clearDiv.setAttribute("class", "clear");
        
        subDiv.appendChild(p);
        subDiv.appendChild(leftTree.html);
        subDiv.appendChild(midTree.html);
        subDiv.appendChild(rightTree.html);
    }
    count++;
    return {'value' : value, 'html' : subDiv};
}

document.title = "Recursive JavaScript";
var body = document.querySelector('body');
var title1 = document.createElement('h1');
title1.textContent = "Fibonacci Sequence";
body.appendChild(title1);
var fibDiv = document.createElement('div');
fibDiv.setAttribute("id", "fibDiv");
body.appendChild(fibDiv);
fib(11, fibDiv);

var title2 = document.createElement('h1');
title2.textContent = "Pell Sequence";
body.appendChild(title2);

var pellDiv = document.createElement('div');
pellDiv.setAttribute("id", "pellDiv");
body.appendChild(pellDiv);
count = 0;
pell(11, pellDiv);

var title3 = document.createElement('h1');
title3.textContent = "Tribonacci Sequence";
body.appendChild(title3);

var tribDiv = document.createElement('div');
tribDiv.setAttribute("id", "tribDiv");
body.appendChild(tribDiv);
count = 0;
trib(11, tribDiv);

var style = document.createElement('style');
style.textContent =
"body{" +
"    font-size: 12px;" +
"}" +
"" +
"h1{" +
"    text-align: center;" +
"    display: block;" +
"    clear: both;" +
"}" +
"" +
".fib-left{" +
"    float: left;" +
"    display: inline-block;" +
"    width: 47%;" +
"    margin: 4px;" +
"    white-space: nowrap;" +
"}" +
"" +
".fib-right{" +
"    float: right;" +
"    display: inline-block;" +
"    width: 47%;" +
"    margin: 4px;" +
"    white-space: nowrap;" +
"}" +
"" +
".fib{" +
"    text-align: center;" +
"    display: block;" +
"    white-space: nowrap;" +
"}" +
"" +
".pell-left{" +
"    float: left;" +
"    display: inline-block;" +
"    width: 47%;" +
"    margin: 4px;" +
"    padding: 0px;" +
"    " +
"}" +
"" +
".pell-right{" +
"    float: right;" +
"    display: inline-block;" +
"    width: 47%;" +
"    margin: 4px;" +
"    padding: 0px;" +
"}" +
"" +
".pell{" +
"    text-align: center;" +
"    display: block;" +
"    white-space: nowrap;" +
"}" +
"" +
".trib-left{" +
"    float: left;" +
"    display: inline-block;" +
"    width: 30%;" +
"    margin: 4px;" +
"    white-space: nowrap;" +
"}" +
"" +
".trib-mid{" +
"    float: right;" +
"    display: inline-block;" +
"    width: 30%;" +
"    margin: 4px;" +
"    white-space: nowrap;" +
"}" +
"" +
".trib-right{" +
"    float: right;" +
"    display: inline-block;" +
"    width: 30%;" +
"    margin: 4px;" +
"    white-space: nowrap;" +
"}" +
"" +
".trib{" +
"    text-align: center;" +
"    display: block;" +
"    white-space: nowrap;" +
"}";
document.querySelector('body').appendChild(style);
