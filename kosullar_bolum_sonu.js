/*
---prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info ya yazdir

AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

--- kullanicinin girdigi verinin istedigmiz aralikta olup olmadigini kontrol et
--- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
--- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

let examGrade = prompt("Notunuzu Giriniz !")
let textInfo;

if (examGrade >= 90 ) {
    textInfo = "AA"
} else if( examGrade >= 85) {
    textInfo = "BA"
}

console.log(textInfo)

let bisey = prompt("yaaz")