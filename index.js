function receivesAFunction(foo) {
    foo();
    return 'hello';
}

function returnsANamedFunction() {
    const boo = function () {
        console.log('Hello');
    }
    return boo;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hello');
    }
}