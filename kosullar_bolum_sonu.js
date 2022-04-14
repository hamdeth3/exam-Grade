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

const SAD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
</svg>`

const GLASSES = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-sunglasses-fill" viewBox="0 0 16 16">
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515L2.31 5.243zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
</svg>`




let examGrade = prompt("Notunuzu Giriniz !")
let textInfo;
let info = document.querySelector("#info")

if (examGrade >= 0 && examGrade <= 100 ) {
    
    textInfo = GLASSES
    info.classList.add('text-success')
    if (examGrade >= 90 ) {
        textInfo += " AA"
    } else if( examGrade >= 85) {
        textInfo += " BA"
    } else if( examGrade >= 80) {
        textInfo += " BB"
    } else if( examGrade >= 75) {
        textInfo += " CB"
    } else if( examGrade >= 70) {
        textInfo += " CC"
    } else if( examGrade >= 65) {
        textInfo += " DC"
    } else if( examGrade >= 60) {
        textInfo += " DD"
    } else if( examGrade >= 50) {
        textInfo += " FD"
    } else if( examGrade < 50) {
        textInfo = `${SAD}FF`
        info.classList.remove('text-success')
        info.classList.add('text-fail')
    }
} else {
    textInfo = "Notunuz 0 ile 100 arasinda olmalidir !!"
}

info.innerHTML = `${textInfo} ==>> ${examGrade}`