var rainbowEnable = false;
var connection = new WebSocket('ws://10.0.0.18:81/', ['arduino']);

document.onkeydown = checkKey;

connection.onopen = function () {
    connection.send('Connect ' + new Date());
};
connection.onerror = function (error) {
    console.log('WebSocket Error ', error);
};
connection.onmessage = function (e) {
    console.log('Server: ', e.data);
};
connection.onclose = function(){
    console.log('WebSocket connection closed');
};

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        doArwUp()
    }
    else if (e.keyCode == '40') {
        doArwDn()
    }
    else if (e.keyCode == '37') {
       doArwLf()
    }
    else if (e.keyCode == '39') {
       doArwRt()
    }
}

function doMute()   { connection.send('Mute');   }
function doVolUp()  { connection.send('VolUp');  }
function doVolDn()  { connection.send('VolDn');  }
function doChUp()   { connection.send('ChUp');   }
function doChDn()   { connection.send('ChDn');   }
function doSel()    { connection.send('Sel');    }
function doExit()   { connection.send('Exit');   }
function doArwUp()  { connection.send('ArwUp');  }
function doArwDn()  { connection.send('ArwDn');  }
function doArwRt()  { connection.send('ArwRt');  }
function doArwLf()  { connection.send('ArwLf');  }

function sendRGB() {
    var r = document.getElementById('r').value**2/1023;
    var g = document.getElementById('g').value**2/1023;
    var b = document.getElementById('b').value**2/1023;

    var rgb = r << 20 | g << 10 | b;
    var rgbstr = '#'+ rgb.toString(16);
    console.log('RGB: ' + rgbstr);
    connection.send(rgbstr);
}

function rainbowEffect(){
    rainbowEnable = ! rainbowEnable;
    if(rainbowEnable){
        connection.send("R");
        document.getElementById('rainbow').style.backgroundColor = '#00878F';
        document.getElementById('r').className = 'disabled';
        document.getElementById('g').className = 'disabled';
        document.getElementById('b').className = 'disabled';
        document.getElementById('r').disabled = true;
        document.getElementById('g').disabled = true;
        document.getElementById('b').disabled = true;
    } else {
        connection.send("N");
        document.getElementById('rainbow').style.backgroundColor = '#999';
        document.getElementById('r').className = 'enabled';
        document.getElementById('g').className = 'enabled';
        document.getElementById('b').className = 'enabled';
        document.getElementById('r').disabled = false;
        document.getElementById('g').disabled = false;
        document.getElementById('b').disabled = false;
        sendRGB();
    }
}
