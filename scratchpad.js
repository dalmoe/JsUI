var count = 0;
var clear = document.createElement('div');
clear.setAttribute("class", "clear");

function fib(n, node){
    node.innerHTML= "";
    var tree = buildFib(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "fib")
}

function buildFib(n){
    var value;
    var subDiv = document.createElement('div');
    subDiv.setAttribute("class", "fib");
    n = parseInt(n);
    if(n < 2){
        if (n === 0){
            value = 0;
            var p = document.createElement('p');
            p.textContent = "Fib(" + n + ") = " + 0;
            subDiv.appendChild(p);
        }
        else if(n === 1){
            value = 1;
            var p = document.createElement('p');
            p.textContent = "Fib(" + n + ") = " + 0;
            subDiv.appendChild(p);
        }
        
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
        subDiv.appendChild(clear);
        
    }
     return {'value' : value, 'html' : subDiv}; 
}

function pell(n, node){
    node.innerHTML= "";
    var tree = buildPell(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "pell");
}

function buildPell(n){
    var value;
    var button
    var subDiv = document.createElement('div');
    subDiv.setAttribute("class", "pell");
    n = parseInt(n);
    
    if(n < 2){
        if(n === 1){
            value = 1;
        }
        else if(n === 0){
            value = 0;
        }
        
        if(count > 32){
            button = document.createElement('div');
            button.setAttribute("class", "button");
            button.setAttribute('id', n)
            button.textContent = "Click to show subtree";
            subDiv.appendChild(button);
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
        
        subDiv.appendChild(p);
        subDiv.appendChild(leftTree.html);
        subDiv.appendChild(rightTree.html);
        document.createElement('div');
    }
    count++;
    return {'value': value, 'html': subDiv};
}

function trib(n, node){
    node.innerHTML= "";
    var tree = buildTrib(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "trib");
}

function buildTrib(n){
    var value;
    var subDiv = document.createElement('div');
    subDiv.setAttribute("class", "trib");
    n = parseInt(n);
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
        var leftTree = buildTrib(n - 1);
        leftTree.html.setAttribute("class", "trib-left");
        
        var midTree = buildTrib(n - 3);
        midTree.html.setAttribute("class", "trib-mid");
        
        var rightTree = buildTrib(n - 2);
        rightTree.html.setAttribute("class", "trib-right");
        
        value = leftTree.value + midTree.value + rightTree.value;
        var p = document.createElement('p');
        p.textContent = "Trib(" + n + ") = " + value;
        
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

function changeButton(button, slider){
    if(button.getAttribute("id") == "fibButton"){
        button.textContent = "Build Fib(" + slider.value + ")";
    }
    else if (button.getAttribute("id") == "pellButton"){
        button.textContent = "Build Pell(" + slider.value + ")";
    }
    else{
        button.textContent = "Build Trib(" + slider.value + ")";
    }
}

var fibDiv = document.getElementById("fibDiv");
var fibSlider = document.getElementById("fibSlider");
var fibButton = document.getElementById("fibButton");
fibButton.textContent = "Build Fib(" + fibSlider.value + ")";
fibSlider.setAttribute("onchange", "changeButton(fibButton, fibSlider)");

var pellDiv = document.getElementById("pellDiv");
var pellSlider = document.getElementById("pellSlider");
var pellButton = document.getElementById("pellButton");
pellButton.textContent = "Build Pell(" + pellSlider.value + ")";
pellSlider.setAttribute("onchange", "changeButton(pellButton, pellSlider)");

var tribDiv = document.getElementById("tribDiv");
var tribSlider = document.getElementById("tribSlider");
var tribButton = document.getElementById("tribButton");
tribButton.textContent = "Build Trib(" + tribSlider.value + ")";
tribSlider.setAttribute("onchange", "changeButton(tribButton, tribSlider)");



