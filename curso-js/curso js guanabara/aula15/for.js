/* usando o For */

for(c=1;c<=10;c++) {
    console.log("teste "+c)
}

/* fibonacci */

a = 0
console.log(a)
b = 1
console.log(b)
for(c=3;c<=16;c++) {
    ab = a + b
    console.log(ab)
    a = b
    b = ab
}