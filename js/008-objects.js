a = "Erdinc"
b = 30
function letsLearnScope () {
    console.log(a, b)
    if(true) {
        console.log(a, b)
    }
}
console.log(a,b)