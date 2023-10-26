const d = document,
  w = window;
export default function scrollTopButton(btn) {
  const $btn = d.querySelector(btn)

  w.addEventListener("scroll", e=>{
    let scrollTop = w.scrollY || d.documentElement.scrollTop

    if(scrollTop > 600){
      $btn.classList.remove("hidden")
    }else{
      $btn.classList.add("hidden")
    }
    // console.log(d.documentElement.scrollTop, window.scrollY)
    
  })
  d.addEventListener("click",e=>{
    if(e.target.matches(btn)){
      w.scrollTo({top: 0})
    }
  })
}
