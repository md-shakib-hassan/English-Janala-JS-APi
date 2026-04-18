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

        link.innerHTML = `
                    <button onclick="lessonWords(${element.level_no})" class="border border-[#422AD5] text-[#422AD5] p-1 rounded-sm "><i
                    class="fa-solid fa-book"></i>level-${element.level_no}</button>`
        lessonContainer.appendChild(link);

        //  console.log(element.level_no);

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

const displayWords = (array) => {
    console.log(array)

    const wordContainer = document.getElementById('wordContainer');

    array.forEach(element => {
        const div = document.createElement('div');

        // div.classList("card-body text-center");
        div.classList.add("card-body", "text-center","bg-white","rounded-sm");

        div.innerHTML = `
                    <h2 class="font-bold text-xl">${element.word}</h2>
                    <p>Meaning / Pronunciation</p>
                    <h1>${element.meaning}/${element.pronunciation}</h1>
                    <div class="mr-100">
                        <a href=""><i class="fa-solid fa-link"></i></a>
                    </div>
                `
        wordContainer.appendChild(div);

    });

}

// "word": "Abundant",
// "meaning": null,
// "pronunciation"

lessonLevel();