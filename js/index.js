//Declaring the API
const API = "http://localhost:3000/films"

// DOM Manipulation
document.addEventListener('DOMContentLoaded',()=>{


// Fetching the API  
    const filmPlaceHolder = ()=>{
        fetch(API)
        .then(res =>res.json())
        .then(value =>{
            const filmOne = value[0]
// Document Method get Element By ID
            const filmPost = document.getElementById("poster")
            const filmName = document.getElementById("filmTitle")
            const filmDescription = document.getElementById("movieDescription")
            const durationTime = document.getElementById("Duration")
            const screenTime = document.getElementById("showtime")
            const readyTickets =document.getElementById("ticketsAvailable")
            filmPost.src = filmOne.poster
            filmName.innerText = filmOne.title
            filmDescription.innerText = filmOne.description
            durationTime.innerText =`Duration: ${filmOne.runtime} minutes`
            screenTime.innerText =`Showtime: ${filmOne.showtime}`
            readyTickets.innerText =`Tickets Available: (${filmOne.capacity - filmOne.tickets_sold})`

//
            const ticketBuy = document.getElementById("buyTicket")
            let tickets = Number(filmOne.capacity - filmOne.tickets_sold)
//CLICK EVENTS FOR LINKS
            ticketBuy.addEventListener('click',()=>{

                tickets--

                switch(tickets <= 0){
                    case 1:
                    const frstMovie = document.getElementById("1")
                    frstMovie.innerHTML=`${filmOne.title}  <span class="badge bg-primary me-1">NO TICKETS</span>`

                    readyTickets.innerHTML = `Ticketd available:  <span class="badge bg-primary">NO TICKETS</span>`
                    case 2:
                    readyTickets.innerText = `Tickets available: (${tickets})`
                }
            })

        })
 }
     const aboutMovie = ()=>{
        fetch(API)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            for(let i = 0; i < data.length; i++){
                let item = data[i]
                console.log(item)
                const movieList = document.createElement("li")
                const list = document.getElementById("showingMovie")

                movieList.classList.add("list-group-item", "border", "border-info", "show")

                movieList.setAttribute('id',`${item.id}`)
                
                movieList.innerText = item.title
                console.log(item.title)


                list.appendChild(movieList)

                movieList.addEventListener('click',()=>{
                    const moviePoster = document.getElementById("poster")
                    const filmTitle = document.getElementById("filmTitle")
                    const aboutFilm = document.getElementById("movieDescription")
                    const totalDuration = document.getElementById("Duration")
                    const showFilm = document.getElementById("showFilm")
                    const handTickets =document.getElementById("AtHandTickets")

                    moviePoster.src = item.poster
                    filmTitle.innerText = item.title
                    aboutFilm.innerText = item.description
                    totalDuration.innerHTML =`Runtime:<span>${item.runtime}</span>`
                    showFilm.innerText =`Showtime: ${item.showtime}`
                    handTickets.innerText =`AtHandTickets: (${item.capacity - item.tickets_sold})`
      })
        }
        })
        }
    aboutMovie()
    filmPlaceHolder()

})