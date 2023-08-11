const open = ()=>{
    setTimeout(window.open("video.html","_self"),1000)
}

const opening = ()=>{
    let time = new Date()
    setInterval(()=>{
        document.getElementById("line1").style.animation = "lights 5s 750ms linear infinite"
        document.getElementById("line2").style.animation = "lights 5s 750ms linear infinite"
        document.getElementById("line3").style.animation = "lights 5s 750ms linear infinite"
        document.getElementById("date").style.animation = "lights 5s 750ms linear infinite"
        document.getElementById("time").style.animation = "lights 5s 750ms linear infinite"
    },500)
    var set = setInterval(()=>{
        let time = new Date()
        document.getElementById("date").innerHTML = time.toDateString()
        document.getElementById("time").innerHTML = time.toLocaleTimeString()
        // console.log(time.toLocaleTimeString())
        if(time.toLocaleTimeString() == "2:26:00 PM" || time.getDate()>= "15" ){
            clearInterval(set)
            open()
        }
    },1000)
}
opening()