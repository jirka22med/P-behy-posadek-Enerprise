// Pole s informacemi o kapitolách
const chapters = [
  { src: "https://www.dropbox.com/scl/fi/bski2kzexy3qdlbmgsxss/kapitola-1.wav?rlkey=na7nywvdr4qtx0r7jwd60s7it&st=ruqnq79s&dl=1", character: "Postava 1" },
  { src: "https://www.dropbox.com/scl/fi/9jqh1qe1t4y5b1esu7z51/kapitola-2.wav?rlkey=zycm6m6prvht4g9pbe9c7relr&st=7cmik9w2&dl=1", character: "Postava 2" },
  { src: "https://www.dropbox.com/scl/fi/2x6h3c6wqp8k5w56g2hze/kapitola-3.wav?rlkey=83zmb0kqo1cc8gt6vffq7m0iv&st=d5wzr9w4&dl=1", character: "Postava 3" },
  
{ src: "https://www.dropbox.com/scl/fi/zqn76vdhm6nhyghpbrgwk/kapitola-4.wav?rlkey=emxpis829qzsuf12uh5ehtpt6&st=c2hn2ibb&dl=1", character:  "Postava 4" },
{ src: "https://www.dropbox.com/scl/fi/h5shsqdqk94xdi34zbzq4/kapitola-5.wav?rlkey=k6r5ll0zosn5hfuzkauomqylj&st=zi9fueip&dl=1", character:  "Postava 5" },
{ src: "https://www.dropbox.com/scl/fi/tcsjbxiu76u8njja0xunq/kapitola-6.wav?rlkey=r3urvqteliyr6b1ydw4gnq92p&st=znvmtrjg&dl=1", character:  "Postava 6" },
{ src: "https://www.dropbox.com/scl/fi/co3yl6096mmudqiwx230m/kapitola-7.wav?rlkey=zjpxwom0xwnvl2ok9fh5s0d76&st=02qgp2xh&dl=1", character:  "Postava 7" },
{ src: "https://www.dropbox.com/scl/fi/cegy3xgjst70pc9jogera/kapitola-8.wav?rlkey=czij00yxulpzfjq3p4c6l1is6&st=zx5ermdd&dl=1", character:  "Postava 8" },
{ src: "https://www.dropbox.com/scl/fi/wvetimvrg7gwakf7kbxu8/kapitola-9.wav?rlkey=7vvj77q7dwtgzcx0vu2a3wyob&st=p5326xlo&dl=1", character:  "Postava 9" },
{ src: "https://www.dropbox.com/scl/fi/a6m4se7pg12x4c129tv78/kapitola-10.wav?rlkey=kemggsfyqpnku9kvws6lce85p&st=mupixzo9&dl=1", character: "Postava 10" },
{ src: "https://www.dropbox.com/scl/fi/t41fohw659gwnv9ts71h9/kapitola-11.wav?rlkey=v6uqyy8rw8zyw4h4y6qh0ejo5&st=mlu3ubum&dl=1", character: "Postava 11" },
{ src: "https://www.dropbox.com/scl/fi/4n73i1lb7l482e2zy004e/kapitola-12.wav?rlkey=ri23n5qihx5ttn9dfbfmj4vpd&st=8rm5ekj0&dl=1", character: "Postava 12" },
{ src: "https://www.dropbox.com/scl/fi/02ddw62zdgoplquykfxxk/kapitola-13.wav?rlkey=ni2vk119rhxxcfvn1i7mvk573&st=ndyqs0dt&dl=1", character: "Postava 13" },
{ src: "https://www.dropbox.com/scl/fi/7pkmzepb7xosys65lcbzv/kapitola-14.wav?rlkey=dtx7omc81t6h16g9148kupxju&st=xve7bhkc&dl=1", character: "Postava 14" },
{ src: "https://www.dropbox.com/scl/fi/4s6ly2xvg8rcpre0ixvol/kapitola-15.wav?rlkey=i3hb22usknj3jdip1c7x2827g&st=6m0byowm&dl=1", character: "Postava 15" },
{ src: "https://www.dropbox.com/scl/fi/r65pmkb4ekhukgbfvij9c/kapitola-16.wav?rlkey=fnsnui4885eh4bchjw9tpjof1&st=n5aqkqk5&dl=1", character: "Postava 16" },
{ src: "https://www.dropbox.com/scl/fi/8jfywr9ysalymp1ux5njw/kapitola-17.wav?rlkey=z0xdonjugsqpes594uzlvd6ly&st=ehaur0vo&dl=1", character: "Postava 17" },
{ src: "https://www.dropbox.com/scl/fi/vekhzjzzs2c4zeanqe6k1/kapitola-18.wav?rlkey=ch6b9eq8702k8ayrcsae3m9ky&st=pr37gftk&dl=1", character: "Postava 18" },
{ src: "https://www.dropbox.com/scl/fi/j3pze9vy8vle3mz5k4yq9/kapitola-19.wav?rlkey=e3q4yrqg1b413v7363aouw8ju&st=x9kzmapi&dl=1", character: "Postava 19" },
{ src: "https://www.dropbox.com/scl/fi/czkzpt8pa670zxqmmu2zy/kapitola-20.wav?rlkey=lvrgdw87xf0cbfk16bnp607u2&st=z7it6xbh&dl=1", character: "Postava 20" },
{ src: "https://www.dropbox.com/scl/fi/a6zl9gkwgukwo3wweqdxt/kapitola-21.wav?rlkey=c2km633niog47txnsq1wgagq5&st=ooov8wfv&dl=1", character: "Postava 21" },
{ src: "https://www.dropbox.com/scl/fi/ais0xn232x53mjru7vxqn/kapitola-22.wav?rlkey=0zkocz0qvhr0w6qvtk5o9bj4r&st=tj1skuq5&dl=1", character: "Postava 22" },
{ src: "https://www.dropbox.com/scl/fi/o6qrn2fwky9g9bn04a6cs/kapitola-23.wav?rlkey=edbvmbp2c14fmn5qpvb441o00&st=l73zajid&dl=1", character: "Postava 23" },
{ src: "https://www.dropbox.com/scl/fi/2nkjme6yffnp3n14l4eas/kapitola-24.wav?rlkey=piy96260mfz2x9ouv3mi1mbwa&st=0pxe4vg4&dl=1", character: "Postava 24" },
{ src: "https://www.dropbox.com/scl/fi/rpo3ub7ht4i7wmoxg9gwa/kapitola-25.wav?rlkey=g9fr7ptqpni2g9fxh1l3ypxr3&st=46ak8ogx&dl=1", character: "Postava 25" },
{ src: "https://www.dropbox.com/scl/fi/xeehdcepeoxaajh0obtre/kapitola-26.wav?rlkey=7xyvh161eub801pmsnrji04n5&st=z6rzprdp&dl=1", character: "Postava 26" },
{ src: "https://www.dropbox.com/scl/fi/9d8eeyrzvusnlact95nyp/kapitola-27.wav?rlkey=rs19d8sh1bm77lelffqj3yf0h&st=oolyu5bz&dl=1", character: "Postava 27" },
{ src: "https://www.dropbox.com/scl/fi/lw1507xu08nf63sx9oa2e/kapitola-28.wav?rlkey=rrn05voaq9rlz4hyhzw74zo6d&st=1wbms1cs&dl=1", character: "Postava 28" },
{ src: "https://www.dropbox.com/scl/fi/0ehmov74ezr0niu547ynl/kapitola-29.wav?rlkey=aod59rg2wmjy0m8m8a9mac710&st=qt06ej4c&dl=1", character: "Postava 29" },
{ src: "https://www.dropbox.com/scl/fi/db0z6gwap5wto89hpdh2q/kapitola-30.wav?rlkey=fp9jg33batmt46qh1s9nzbsc0&st=5y9ia9jx&dl=1", character: "Postava 30" },
{ src: "https://www.dropbox.com/scl/fi/vxrslv8fb4krf1fpqfjjt/kapitola-31.wav?rlkey=iy4cbqpnm7spyjpe384q8ymvv&st=hhehcdtm&dl=1", character: "Postava 31" },
{ src: "https://www.dropbox.com/scl/fi/vbwtb1jrp9qtnxldl1dk3/kapitola-32.wav?rlkey=9g7h9v6u6w8trh6ngq3kw9zig&st=4odlpeq7&dl=1", character: "Postava 32" },
{ src: "https://www.dropbox.com/scl/fi/w12vncdcwkvvlb2rvgv91/kapitola-33.wav?rlkey=dqm0o1j8dfy8j491xycz5m5xa&st=t37ii1rr&dl=1", character: "Postava 33" },
{ src: "https://www.dropbox.com/scl/fi/ts4iecs4b5g2jooyk40xd/kapitola-34.wav?rlkey=msgg6a8wny8p3rs73eoh9e1r1&st=nuc6bt20&dl=1", character: "Postava 34" },
{ src: "https://www.dropbox.com/scl/fi/u5umgelznk837b02233qt/kapitola-35.wav?rlkey=l613fq5r7ugx33t25ykz6ckl4&st=clmi9gt1&dl=1", character: "Postava 35" },
{ src: "https://www.dropbox.com/scl/fi/azn1401i2tsdyzancxntc/kapitola-36.wav?rlkey=fqoqnolf6tp2xlgbihc1uu8v1&st=h15tua5f&dl=1", character: "Postava 36" },
{ src: "https://www.dropbox.com/scl/fi/futnm4de91g7h7p3wdnfi/kapitola-37.wav?rlkey=2lxjgnif2p69m05opdv8cicso&st=duwlnbvt&dl=1", character: "Postava 37" },
{ src: "https://www.dropbox.com/scl/fi/p0tzlrzqj6er1j56b7prt/kapitola-38.wav?rlkey=lnbu8a9qpvu7h3okcuh4lrvd5&st=0id8ccwb&dl=1", character: "Postava 38" },    
{ src: "https://www.dropbox.com/scl/fi/brgz7nh2es7ck9ubt08yg/kapitola-39.wav?rlkey=d2svq670defuk8feoesusedip&st=sbd9ngfz&dl=1", character: "Postava 39" }, 
{ src: "https://www.dropbox.com/scl/fi/jnatm6xldsffkvgbyscd9/kapitola-40.wav?rlkey=5ewmyq66dz5jkn1a6tkbj1nae&st=gl4jd6yx&dl=1", character: "Postava 40" },    
];
let currentAudio = null;
let isPaused = false;
let currentChapterIndex = 0;

        
        
function showChapter(chapterNumber) {
  // Skryje všechny kapitoly
  const chapters = document.querySelectorAll('.chapter');
  chapters.forEach(chapter => chapter.classList.remove('active'));

  // Zobrazí vybranou kapitolu
  const selectedChapter = document.getElementById('chapter' + chapterNumber);
  if (selectedChapter) selectedChapter.classList.add('active');

  // Získá všechna tlačítka a odstraní třídu 'active' z ostatních
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => button.classList.remove('active'));

  // Přidá třídu 'active' k aktuálnímu tlačítku
  const activeButton = buttons[chapterNumber - 1];
  if (activeButton) activeButton.classList.add('active');

  // Uloží index aktuální kapitoly
  currentChapterIndex = chapterNumber - 1;
}

function playAudio(chapterIndex) {
  // Zastavíme případné předchozí přehrávání
  stopAudio();

  // Vytvoříme nový audio element a nastavíme zdroj
  const audio = new Audio(chapters[chapterIndex].src);
  audio.play();
  currentAudio = audio;

  // Zobrazíme jméno postavy
  const characterDisplay = document.createElement('div');
  characterDisplay.classList.add('character-display');
  characterDisplay.textContent = chapters[chapterIndex].character;
  
  // Přidáme element na stránku (volitelně)
  document.querySelector('.active').appendChild(characterDisplay);
}

function pauseAudio() {
  if (currentAudio) {
    currentAudio.pause();
    isPaused = true;
  }
}

function resumeAudio() {
  if (currentAudio && isPaused) {
    currentAudio.play();
    isPaused = false;
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    isPaused = false;
    
    // Odstraníme zobrazené jméno postavy, pokud existuje
    const characterDisplays = document.querySelectorAll('.character-display');
    characterDisplays.forEach(display => display.remove());
  }
}

// Počkáme, až se dokument načte
document.addEventListener('DOMContentLoaded', function() {
  // Nastavíme výchozí kapitolu
  showChapter(1);
  
  // Přidáme event listenery pro všechna tlačítka ve všech kapitolách
  document.querySelectorAll('.chapter').forEach((chapter, chapterIndex) => {
    // Získáme tlačítka v této kapitole
    const chapterButtonsPlay = chapter.querySelector('.play-btn');
    const chapterButtonsPause = chapter.querySelector('.pause-btn');
    const chapterButtonsStop = chapter.querySelector('.stop-btn');
    const characterBtns = chapter.querySelectorAll('.character-btn');
    
    // Nastavíme události pro tlačítka postav v této kapitole
    characterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Získáme data-index z tlačítka
        const dataIndex = parseInt(btn.getAttribute('data-index'));
        playAudio(dataIndex);
      });
    });
    
    // Přidáme události pro tlačítka přehrávání v této kapitole
    chapterButtonsPlay.addEventListener('click', () => {
      if (isPaused && currentAudio) {
        resumeAudio();
      } else {
        // Pokud je chapterIndex číslo kapitoly, potřebujeme odečíst 1 pro index v poli
        playAudio(parseInt(chapter.id.replace('chapter', '')) - 1);
      }
    });
    
    chapterButtonsPause.addEventListener('click', pauseAudio);
    chapterButtonsStop.addEventListener('click', stopAudio);
  });
});
   
 function checkAndFixChapters(chapters) {
    let fixedUrls = 0;
    let validChapters = 0;
    
    // Kontrola každé kapitoly v poli
    chapters.forEach((chapter, index) => {
        // Kontrola a oprava URL adresy
        if (chapter.src) {
            // Oprava Dropbox URL (změna dl=0 na dl=1)
            if (chapter.src.includes("dl=0")) {
                chapter.src = chapter.src.replace("dl=0", "dl=1");
                fixedUrls++;
            }
            
            // Kontrola zda URL obsahuje ADRESA
            if (chapter.src.includes("ADRESA")) {
                console.warn(`⚠️ Kapitola ${index + 1} (${chapter.character}): Neplatná URL adresa`);
            }
        }
        
        // Kontrola validity kapitoly
        if (typeof chapter === 'object' && chapter.character && chapter.character.trim()) {
            validChapters++;
        }
    });
    
    // Souhrnný výpis na dva řádky
    console.log(`✅ Kontrola dokončena - Celkem kapitol: ${chapters.length}, Opraveno URL: ${fixedUrls}`);
    console.log(`🔍 Platných kapitol: ${validChapters}, Zkontrolováno URL: ${chapters.length}`);
    
    return chapters; // Vrátíme opravené pole pro případné další použití
}

// Spuštění kontroly a uložení opraveného pole kapitol
const fixedChapters = checkAndFixChapters(chapters);