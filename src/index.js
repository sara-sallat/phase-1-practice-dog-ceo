console.log('%c HI', 'color: firebrick')
window.onload = () => {
    console.log('page is fully loaded');


    const dogContainer = document.getElementById('dog-image-container')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(resp => resp.json())
.then(json => {

    for(let i = 0; i < json.message.length; i++){
      const img = document.createElement('img')
      img.src = json.message[i]
      img.setAttribute('width', 300)

      
      dogContainer.appendChild(img)
    }
    
    const ul = document.getElementById('dog-breeds')
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'


    


    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json =>{
        const array = Object.keys(json.message)
        const select = document.getElementById('breed-dropdown')

        select.addEventListener('change', (event) => {
            if(document.querySelector('li')){
                document.querySelector('ul').remove()

             const newUl = document.createElement('ul')
             array.filter(word => {

                if(word.charAt(0) == event.target.value){
                
                 
                 const li = document.createElement('li')
                 li.textContent = word
                 li.classList = 'li-class'
                 newUl.appendChild(li)
 
                 li.addEventListener('click', () => {
                     li.style.color = 'red'
                 })
                }
             })

             document.body.appendChild(newUl)   

            }else{
                array.filter(word => {

                    if(word.charAt(0) == event.target.value){
                    
                     
                     const li = document.createElement('li')
                     li.textContent = word
                     li.classList = 'li-class'
                     ul.appendChild(li)
     
                     li.addEventListener('click', () => {
                         li.style.color = 'red'
                     })
                    }
                 })
            }
                    
          });
       

        
        
        
        
    })
    
})




  };