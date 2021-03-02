/*script*/
let arr=['1','2','3','4','5']
let i=1
console.log(arr)
let e=document.querySelector('img')
function nextSlides () {
    i++			
    if(i>arr.length){
        i=1
    }
    e.src=i+'.png'
}
function prevSlides (){
    i--
    if(i===0){
        i=arr.length
    }
    e.src=i+'.png'
}