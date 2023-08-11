let i = 0
let videos = ["video1.mp4","gun gun.mp4","chahara.mp4","doggi.mp4"]
function next(){
    let aud = document.getElementById("next");
    aud.onended = function() {
        aud.autoplay = true
        aud.load()
        aud.src = videos[i]
        if(i<=3){
            i++
        }
    };
}
