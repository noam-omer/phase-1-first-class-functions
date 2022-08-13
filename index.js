function namedFunction(){
    return 3;
}

function receivesAFunction(callbackFunction){
    callbackFunction();
}
function returnsANamedFunction(){
    return namedFunction;
}
function returnsAnAnonymousFunction(){
    return () => 4;
}
