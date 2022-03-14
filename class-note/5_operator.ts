
var odin: string | number | boolean;

function logMessage(value: string | number){
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    throw new TypeError('value must be string or number');
}


logMessage('hihi');
logMessage(1000);