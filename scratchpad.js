var count = 0;
var clear = document.createElement('div');
clear.setAttribute("class", "clear");

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
        subDiv.appendChild(clear);
        
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
    var button;
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

fib(5, document.getElementById("fibDiv"));

pell(5, document.getElementById("pellDiv"));

trib(5, document.getElementById("tribDiv"));