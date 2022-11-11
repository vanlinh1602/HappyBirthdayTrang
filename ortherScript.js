const listContent = [
    "Happy birtday",
    "Bạn Trang iu dấu",
    "Mau ăn chóng lớn nhé!",
    "Đừng lùn mãi như thế :>",
    "Hãy thành bác sĩ giỏi",
    "Luôn nỡ nụ cười trên môi",
    "Khó khăn nào cũng qua",
    "Give up never die :>",
    "Giỡn ....",
    "Đừng Give up :))",
    "Hãy cố gắng",
    "Và luôn nhớ rằng",
    "T sẽ bỏ... À nhầm",
    "T sẽ luôn bên m",
    "Sinh nhật vui vẻ!!",
]

const divContent = document.getElementById('mainContent');

window.onload = () => {
    console.log(1);
    var x = document.createElement("AUDIO");
  
    if (x.canPlayType("audio/mpeg")) {
      x.setAttribute("src","./music/happy.mp3");
    } else {
      x.setAttribute("src","./music/happy.ogg");
    }
    x.setAttribute("autoplay", "autoplay");
    x.setAttribute("loop", "loop");
    x.setAttribute("hidden", "hidden");
    document.body.appendChild(x);
}

function myFunction() {
    console.log(1);
    var x = document.createElement("AUDIO");
  
    if (x.canPlayType("audio/mpeg")) {
      x.setAttribute("src","./music/happy.mp3");
    } else {
      x.setAttribute("src","./music/happy.ogg");
    }
  
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);
  }

const setContent = async () => {
    let time = 0
    listContent.forEach(async (item) => {
        time += 2000;
        await setTimeout(() => { divContent.innerHTML = item }, time);
    })
    // await setTimeout(() => { divContent.innerHTML = listContent[1] }, 4000);
    // await setTimeout(() => { divContent.innerHTML = listContent[2] }, 6000);

}

setContent();