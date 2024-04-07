

gsap.from('.firstnav',{
    y:100,
    opacity:0.5,
    delay:0.7,
    duration:0.9,
    stagger:0.5
})
gsap.from('.secondnav',{
    y:100,
    opacity:0,
    delay:1,
    duration:0.9,
    stagger:0.5
})
gsap.from('#page1 h1',{
    y:100,
    opacity:0,
    delay:1,
    duration:0.7,
    stagger:0.1
})


let image_container = document.querySelector('.image_container')
let buy1=document.querySelector('#spot')

image_container.addEventListener('mouseenter',function () {
    gsap.to(buy1,{
        scale:0.2,
        opacity:1
    })
})

image_container.addEventListener('mouseleave',function () {
    gsap.to(buy1,{
        scale:0,
        opacity:0
    })
})
image_container.addEventListener('mousemove',function(x){
    gsap.to(buy1,{
        left:x.x-380,
        top:x.y-330
    })
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))