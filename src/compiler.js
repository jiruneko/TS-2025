"use strict";
let globalHello = 'hello';
function echo(message) {
    let hello = 'hello';
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMessage = echo('hi');
let onlyNull = undefined;
let onlyUndefined = undefined;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
echo.call(null, 'hi');
