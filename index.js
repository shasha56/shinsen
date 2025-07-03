const select = document.getElementById("strength");
const btn = document.getElementById('btn1');
const result = document.getElementById('result');
const time = document.getElementById('time');
const fullStrength = 120;
let nowHour = 0,nowMinute = 0,nowSecond = 0,lastStrength = 120,Time = 0;

for (let i = 0; i <= 120; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    select.appendChild(option);
}

select.addEventListener('change', () => {
        lastStrength = select.value;
    });

btn.addEventListener('click', () => {
    const now = new Date();
    nowHour = now.getHours()
    nowMinute = now.getMinutes();
    nowSecond = now.getSeconds();
    let heal = fullStrength;
    heal -= lastStrength;
    Time = heal * 180;
    nowHour += Math.floor(Time/3600);
    nowMinute += Math.floor((Time%3600)/60);
    nowSecond += Time%60;
    if(nowSecond >= 60){
        nowSecond -= 60;
        nowMinute ++;
    }
    if(nowMinute >= 60){
        nowMinute -= 60;
        nowHour ++;
    }
    if(nowHour >= 24){
        nowHour -= 24;
    }
});

function always() {
    const now = new Date();
    time.textContent = "現在時刻　" + now.getHours() + "時" + now.getMinutes() + "分" + now.getSeconds() + "秒";
    result.textContent = "残り" + Math.floor(Time/60) + "分です。　" + nowHour + "時" + nowMinute + "分" + nowSecond + "秒　回復予定";
    requestAnimationFrame(always);
};

always();