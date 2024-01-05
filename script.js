
var arr = [{ dp: 'story1.jpg', story: 'story1.jpg', }, { dp: 'story2.jpg', story: 'story2.jpg', }, { dp: 'story3.jpg', story: 'story3.jpg', }, { dp: 'story4.jpg', story: 'story4.jpg'},]; 

var clutter = "";
arr.forEach((e, i) => {
    clutter += `<div class="story">
                <img id="${i}" src="${e.dp}">
            </div>`;

});
document.querySelector('.stories').innerHTML = clutter;
document.querySelector('.stories').addEventListener('click', (dets) => {
    document.querySelector('.full-screen').style.display = 'block';
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    document.querySelector(".full-screen").innerHTML = `<div class="loader">
        <div class="load-sq">`;

    setTimeout(() => {
        document.querySelector(".full-screen").style.display = "none";
    }, 3000);
})


var like = document.querySelector('.like-icon');
var like_s = document.querySelector('.like-icon-s');
        var img = document.querySelector('.container img');
        document.querySelector('.container').addEventListener('dblclick', ()=>{
            like.style.transform = 'translate(-50%, -50%) scale(0.9)';
            like.style.color = 'red';
            like_s.style.color = 'red';
            img.style.transform = 'scale(1.1)';
            like
            setTimeout(() => {
            like.style.transform = 'translate(-50%, -50%) scale(0)';
            img.style.transform = 'scale(1)';
            like_s.style.color = "white";
        }, 900);
 });
