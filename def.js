var filled = JSON.parse(localStorage.getItem(pn)) || false
const form = document.querySelector('.form')
const cover = document.querySelector('.cover')
const thanks = document.querySelector('.thanks')

function cta(){
    if (form.classList.contains('none')){
        form.classList.remove('none')
        cover.classList.remove('none')
    }
    console.log('clicked')
}
 
thnk()
function thnk(){
    if (filled){
        thanks.style.display = 'flex'
        form.classList.add('none')
        cover.classList.add('none')
    }
    else{

    }
    saveFilled(pn)
}

function back(){
    filled = false
    saveFilled(pn)
    thanks.style.display = 'none'
    form.classList.add('none')
    cover.classList.add('none')
}

function saveFilled(sn){
    filled_s = JSON.stringify(filled)
    localStorage.setItem(sn, filled_s)
}

function refreshPage() {    
    location.reload();
}