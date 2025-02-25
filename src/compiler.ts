let globalHello = 'hello'
function echo(message: string): string | null {
    let hello = 'hello'
    return message
}
let implicitAny
implicitAny = 'implicitAny'

let nullableMessage: string | null = echo('hi')
let onlyNull: null | undefined = undefined
let onlyUndefined: undefined = undefined
if (nullableMessage) {
    nullableMessage.toUpperCase()
}
echo.call(null,'hi')