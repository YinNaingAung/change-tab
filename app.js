const tabs = document.querySelectorAll(".tabs li")
const tabContent = document.querySelectorAll(".content");

tabs.forEach((tab,index)=>{
    tab.addEventListener("click",()=>{

        tabs.forEach((tab)=>{
            tab.classList.remove("live");
        })
        tabContent.forEach((content)=>{
            content.classList.remove("live")
        })
        tabs[index].classList.add("live")
        tabContent[index].classList.add("live")
          
    })
})