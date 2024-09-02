// document.querySelector('container').addEventListener('scroll', function(e){

// })
// document.querySelector('t').addEventListener('scroll', function(e){
//     // this.style.display = '';
//     this.style.visibility = 'visible';
// })document.querySelector('container')
// window.addEventListener('scroll', ()=>{
//     const hero = document.querySelector('container');
//     let scrolltop =window.scrollY;
//     let heroCenter = hero.offsetHeight / 2;
//     scrolltop >= heroCenter ? hero.style.opacity='1' : hero.style.opacity='0.5'
// })
// function onEntry(entries) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("element-show");
//         } else {
//             entry.target.classList.remove("element-show");
//         }
//     });
// }

let cntAnim=0;
let isAnimating = false;
totalAnimations=2;
let minus=[];
let scan2=0;
function onEntry(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !isAnimating) {//без этого появляються жёлтые квадратики
           isAnimating = true;//без скролл работает
            entry.target.classList.add('element-show')
            // const animationClass = `animation-${(index % totalAnimations) + 1}`;
            //const childElement = entry.target.querySelector('.element-animation2');
            childElement = entry.target.querySelectorAll('.element-animation2')
            if (childElement) {
                childElement.forEach(e=>{
                
                    // Генерация нового класса анимации // Задайте количество доступных анимаций
                      //index = Math.floor(Math.random() * totalAnimations); Случайный индекс для выбора анимации
                    const animationClass = `animation-${cntAnim}`; // Класс анимации
                    const animationClassbef = `animation-${cntAnim}::before`;
                    cntAnim++;
                    // Добавляем сгенерированный класс к элементу
                    e.classList.add(animationClass);
                
                })
            }
            minus.push(cntAnim);    
            scan2++;
            // if (childElement) {
            //     // Генерация нового класса анимации // Задайте количество доступных анимаций
            //     const index = Math.floor(Math.random() * totalAnimations); // Случайный индекс для выбора анимации
            //     const animationClass = `animation-${index + 1}`; // Класс анимации

            //     // Добавляем сгенерированный класс к элементу
            //     childElement.classList.add(animationClass);
            // }
                entry.target.addEventListener('transitionend', () => {
                        isAnimating = false;
                        // entry.target.classList.remove('element-show');
                        //observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
                }, { once:true});
        }
    
    });
}
// anim2 = document.querySelectorAll('.element-animation2');
// totalAnimations=1;
// let options1 = {
//     threshold: [0.5]
// };

// function onEntry1(entries, observer1) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting && !isAnimating) {//без этого появляються жёлтые квадратики
//            isAnimating = true;//без скролл работает
//                 entry.forEach((element, index) => {
//                     const animationClass = `animation-${(index % totalAnimations) + 1}`;
//                     element.target.classList.add(animationClass);
//                   });
//                     entry.target.addEventListener('transitionend', () => {
//                         isAnimating = false;
//                         // entry.target.classList.remove('element-show');
//                         //observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
//                     }, { once:true});
//         }
    
//     });
// }
// let observer1 = new IntersectionObserver(onEntry1, options1);

// anim2.forEach(elm => observer1.observe(elm));
let options = {
    threshold: [0.5]
};

let observer = new IntersectionObserver(onEntry, options);


let elements = document.querySelectorAll('.element-animation');
const screens = document.querySelectorAll('.screen');
let detec = 0;
elements.forEach(elm => observer.observe(elm));

// screen.forEach(elm => observer.observe(elm));
// for (let elm of elements) observer.observe(elm);

let animscreen = document.querySelectorAll('.element-animation');

let currentScreen = 0;


function nextScreen() {
    if (currentScreen < screens.length - 1) {
        screens[currentScreen].classList.remove('current');
        screens[currentScreen].classList.add('previous');
        detec=currentScreen;
        currentScreen++;
        // const elem2 =screens[detec].querySelectorAll('.element-animation2')
        animscreen[detec].classList.remove('element-show');
        // for (let e of minus[scan2]){
        //     const animationClass = `animation-${e + 1}`;
        //     elem2[e].classList.remove(animationClass)
        // }
        
        screens[currentScreen].classList.remove('hidden');
        screens[currentScreen].classList.add('current');
    }
}

function previousScreen() {
    if (currentScreen > 0) {
        screens[currentScreen].classList.remove('current');
        screens[currentScreen].classList.add('hidden');
        detec=currentScreen;
        currentScreen--;
        
        animscreen[detec].classList.remove('element-show');
        screens[currentScreen].classList.remove('previous');
        screens[currentScreen].classList.add('current');
    }
    if(!isAnimating && detec<0){
        // screens[currentScreen]
        
        console.log(animscreen);
    }
}
// $(window).on("resize", function(e) {
//     windowWidth = $(window).width();
// });
let cousrc = 0;
window.addEventListener('wheel', (event) => {
    if (!isAnimating) {
        if (event.deltaY > 0) {
            nextScreen();
        } else if (event.deltaY < 0) {
            previousScreen();
        }
    }
    // else if(event.deltaY > 1){
    //     window.scrollTo
    // }
    // else if(event.deltaY < 1){
        
    // }
    isAnimating = true;
    setTimeout(() => {
        isAnimating = false; 
    }, 100);
    // var n = "";
    // var s = $("html").scrollTop(n);
    // if( s > 1 ){
    //     $("html").scrollTop(1);
    // }
});
// onclick = function () {
//     $("html").scroll(function(){
//         var n = "";
//         var s = $("html").scrollTop(n);
//         if( n > 100 ){
//         $("html").scrollTop(100);
//         }
//     });  
// }
// window.onclick = function(event) {
//     // if(event.target == modal) {
//     // }
    
// }