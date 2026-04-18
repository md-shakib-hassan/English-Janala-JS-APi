// create lesson type in dynamic way with api

const lessonLevel = () => {

    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(Response => Response.json())
        .then(obj => displayLesson(obj.data))

}

const displayLesson = (array) => {
    // console.log(array)

    const lessonContainer = document.getElementById('lessonContainer');

    array.forEach(element => {

        const link = document.createElement('div');

        link.innerHTML = `  <a href="" onclick="lessonWords(${element.level_no})" class="border border-[#422AD5] text-[#422AD5] p-1 rounded-sm "><i
                   class="fa-solid fa-book"></i>lesson-${element.level_no} </a>`
        lessonContainer.appendChild(link);

    });
}

// here start level words showing when click level button 

const lessonWords = (level_no) => {
    // console.log(level_no);

    const url = `https://openapi.programming-hero.com/api/level/${level_no}`;

    fetch(url)
        .then(Response => Response.json())
        .then(obj => displayWords(obj.data))



}

const displayWords = (data) => {
    console.log(data)

    const div = document.createElement('div');

    const wordContainer = document.getElementById('wordContainer');

    div.innerHTML=`<div class="card-body text-center">
                    <h2 class="font-bold text-xl">${word}</h2>
                    <p>Meaning / Pronunciation</p>
                    <h1>${meaning}/${pronunciation}</h1>
                    <div class="mr-100">
                        <a href=""><i class="fa-solid fa-link"></i></a>
                    </div>
                </div>`
 wordContainer.appendChild(div);



}

// "word": "Abundant",
// "meaning": null,
// "pronunciation"

lessonLevel();