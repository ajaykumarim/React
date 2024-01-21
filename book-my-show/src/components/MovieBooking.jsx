import React, { useState } from 'react'


let SCREENS = [{
    id: 1,
    time: '10:00am',
    seats: [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1]
},
{
    id: 2,
    time: '2:00pm',
    seats: [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1]
},
{
    id: 3,
    time: '6:00pm',
    seats: [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1]
}
]

const MOVIES = [{
    id: 1,
    title: 'Kanguva',
    image: 'https://kanguva.com/wp-content/uploads/2023/07/Kanguva-New-Poster-Surya-with-Sword-on-Riding-Horse-scaled.jpg'
},
{
    id: 2,
    title: 'GOAT',
    image: 'https://kumarsarav.com/wp-content/uploads/2024/01/VIJAY-GOAT-MOVIE-POSTER-1.jpg'
},
{
    id: 3,
    title: 'Indian-2',
    image: 'https://moviegalleri.net/wp-content/uploads/2019/01/Shankar-Kamal-Haasan-Indian-2-Movie-First-Look-Poster-HD-709x1024.jpg'
}
]
console.log(MOVIES.image2)
const MovieBooking = () => {
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [selectedScreen, SetSelectedScreen] = useState(null)
    const [selectedSeats, setSelectedSeats] = useState([])
    const handleSeatSelect=(index,screen)=>{
        if(screen?.id !== selectedScreen?.id){
            setSelectedSeats([index])
            SetSelectedScreen(screen)
            return
        }
        SetSelectedScreen(screen)
        if(selectedSeats.includes(index)){
            setSelectedSeats(selectedSeats.filter((i)=>i !== index))
            if(selectedSeats.filter((i)=>i !== index).length<1){
                SetSelectedScreen(null)
            }
        }else{
            setSelectedSeats((seats)=>[...seats,index])
        }
    }
    const handleBooking=()=>{
        alert(`seats ${selectedSeats.map((index)=>index+1).join(",")} booked for ${selectedScreen.movie.title} at ${selectedScreen.time}`)
        SCREENS=SCREENS.map((screen)=>{
            if(screen.id === selectedScreen?.id){
                let seats=screen.seats
                selectedSeats.map((seat)=>(seats[seat]=0))
                return{
                    ...screen,
                    seats
                }
            }
            return screen
            setSelectedMovie(null)
            SetSelectedScreen(null)
            setSelectedSeats([])
        })
        setSelectedMovie(null)
        SetSelectedScreen(null)
        setSelectedSeats([])
    }
    return (
        <div>
            <h1>MOVIE BOOKING APP</h1>
            <h2>Choose your movie:</h2>
            <div className='movie-selection'>
                {
                    MOVIES.map((a) =>
                        <div className='movie' key={a.id} onClick={() => setSelectedMovie(a)}>
                            <img className='movie-poster' src={a.image} alt={a.title} />
                            <div className='movie-title'>{a.title}</div>
                        </div>
                    )
                }
            </div>
            {
                selectedMovie && (
                    <>
                        <h2>Choose your screen:</h2>
                        <div className='screen-selection'>
                            {SCREENS.map((s) =>
                                <div key={s.id} className={`screen ${s?.id === selectedScreen?.id ? "selected" : ""}${s.seats.includes(1) ? "available" : ""}`}>
                                    <div className='screen-number'>screen {s.id}</div>
                                    <div className='screen-time'>{s.time}</div>
                                    <div className='movie-title'>{selectedMovie.title}</div>
                                    <div className='screen-seats'>
                                        {
                                            s.seats.map((seat, index) =>
                                                <div key={index} className={`seat ${seat ? "available" : "unavailable"} ${selectedSeats.includes(index) && selectedScreen?.id === s.id ? "selected" : ""} ${selectedSeats.includes(index) ? "booked" : ""}`} onClick={()=>{
                                                    if(seat){
                                                        handleSeatSelect(index,{...s,movie:selectedMovie})
                                                    }
                                                }}> 
                                                    <div className='seat-number'>{index + 1}</div>
                                                </div>

                                            )
                                        }
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </>
                )}
                <div className='booking-summary'>
                    <div className='selected-screen'>
                            {
                                selectedScreen&&(
                                    <div>
                                        <h3>Selected Screen: {selectedScreen.id}</h3>
                                        <p>Time: {selectedScreen.time}</p>
                                        <p>Movie: {selectedScreen.movie.title}</p>
                                    </div>
                                )
                            }
                    </div>
                    <div className='selected-seat'>
                            {
                                selectedScreen&&selectedSeats?.length>0&&(
                                    <div>
                                        <h3>Selected Seats:<>{selectedSeats.map(index=>index+1).join(",")}</></h3>
                                        <h3>No of Tickets:{selectedSeats?.length}</h3>
                                    </div>
                                )
                            }
                    </div>
                </div>
                <button className='payment-button' onClick={handleBooking} disabled={!selectedScreen || selectedSeats?.length===0}>Book now</button>
        </div>
    )
}

export default MovieBooking
