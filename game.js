let botChoice=['b1','b2','b3','b4','b5','b6','b7','b8','b9'],prev=[],help=[]
function tiki(id){    
    if(prev.includes(id)||help.includes(id)){
        alert('You No Choose Twice')
    } else{
    button=document.getElementById(id)
    let img=document.createElement("img")
    img.setAttribute('src', 'https://img.freepik.com/free-icon/x-symbol_318-1407.jpg?w=2000',)
    img.setAttribute('alt', 'X')
    img.setAttribute('height', 100)
    img.setAttribute('width', 100) 
    img.style.position='relative'
    img.style.top=`60px`
    button.appendChild(img)
    botChoice=botChoice.filter(e => e !== id)
    console.log(botChoice)
    let num=Math.floor(Math.random()*botChoice.length)
    help.push(botChoice[num])
    let button2=document.getElementById(botChoice[num]), img2=document.createElement("img")
    img2.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/105/105152.png',)
    img2.setAttribute('alt', 'O'), img2.setAttribute('height', 100), img2.setAttribute('width', 100)
    img2.style.position='relative'
    img2.style.top=`60px`
    button2.appendChild(img2)
    botChoice=botChoice.filter(e => e !== botChoice[num])
    }
prev.push(id)
}