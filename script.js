"use strict"
const EXP_API = " https://zany-skitter-caper.glitch.me/experiences"
const SKILL_API = "https://zany-skitter-caper.glitch.me/skills"
const rightSection = document.getElementById("rightSection")
const progressContainer = document.getElementById("progressContainer")



fetch(EXP_API)
.then(response => response.json())
.then(appendEXP)
.catch(e=> console.log(e))

// appendina HTML su experience API
function appendEXP(data){
   
    data.map(x=>{
       
        let articleExp = document.createElement("article")
    
        articleExp.classList.add("experience-container")
      
        articleExp.innerHTML =
     
        `
          <div class="year-container">
            <h2>${x.startYear}-${x.finishYear}</h2>
            <p>${x.companyName}</p>
          </div>
          <div class="experience">
            <h1>${x.position}</h1>
            <p>${x.description}</p>
          </div>
        
        `
      
        rightSection.prepend(articleExp)
   
        console.log(data)
    })
    // appendinam h1
    rightSection.prepend(h1Exp)
    }
    //  sukuriam h1 su teksta Experience kuri appendinam virsuj kaip title
    let h1Exp = document.createElement("h1")
    h1Exp.innerText = "Experience"


fetch(SKILL_API)
.then(response => response.json())
.then(appendSkill)
.catch(e=> console.log(e))

// appendina API SKILL data i progress bars
function appendSkill(data){
   
    data.map(x=>{
  
        let skillContainer = document.createElement("div")
        skillContainer.innerHTML=
        `
        <label for="${x.title}">${x.title} <span class="progress-proc">${x.level}%</span></label>

      <progress id="javascript" value="${x.level}" max="100">${x.level}%</progress>
        
        `
       progressContainer.prepend(skillContainer)

    })
    // prependina "Coding Skills" pavadnima virs progress
    let codingTitle = document.createElement("header")
    codingTitle.innerHTML =  `  <h1>Coding <span>Skills</span></h1>`
    progressContainer.prepend(codingTitle)

}

  

