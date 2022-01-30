console.log("Newsss")

const key='88e024a6ffc942db986a4448764d46ee';

let newsAccordion=document.getElementById('newsAccordion');
let country='in';
let india=document.getElementById('india');
india.addEventListener('click',function(){
    country='in';
    putNews();
})
let usa=document.getElementById('usa');
usa.addEventListener('click',function(){
    country='us';
    putNews();
})
let france=document.getElementById('france');
france.addEventListener('click',function(){
    country='fr';
    putNews();
})
let uk=document.getElementById('uk');
uk.addEventListener('click',function(){
    country='ua';
    putNews();
})
let russia=document.getElementById('russia');
russia.addEventListener('click',function(){
    country='ru';
    putNews();
})







function putNews(){
let xhr=new XMLHttpRequest();

xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`,true);
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText)
        let articals=json.articles;
        //  console.log(articals);

      let newsHtml="";

         articals.forEach((news,index)=>{
             console.log(news,index)
             let newsTemplate=`
                         <div class="accordion-item">
                         <h2 class="accordion-header" id="heading${index}">
                             <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                 data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapse${index}">
                                 <b>Breaking News ${index+1}:</b>  ${news.title}
                             </button>
                         </h2>
                         <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                             <div class="accordion-body">${news.description}
                             <h7> <a href="${news.url}" target="_blank">Read more at</a></h7>
                             </div>
                         </div>
                         </div>
             
             `;
             newsHtml+=newsTemplate;
         })
         newsAccordion.innerHTML=newsHtml;
    }
}

xhr.send();

}