import './Home.css'


function Home () {
    return (
        <div className='home'>
            <div className='intro'>
                <img src='/misc_images/Ge_ozadje.png' alt="" className={`face-img image-border`}/>
                <p className="intro-text">Sem Manja Tišler, varstvena biologinja, ki ji umetnost predstavlja ključen del karierne poti. Rada delam z različnimi
                mediji (oljne barve, akril, pasteli, akvarel, gvaš, grafit in ink), vendar najraje ustvarjam z akvareli in suhimi
                pasteli. Moje delo pa ni le biološko, saj poleg bioloških motivov vključim vse, kar pritegne moj pogled. Dobrodošli na
                moji strani, kjer si lahko ogledate moje dosedanje izdelke. </p>
            </div>

            <div className="phrase">
                <h1>Med znanostjo in
                <br />umetnostjo.</h1>
            </div>

            <div className='more-intro'>
                <p>Že od malih nog sem rada opazovala in se navduševala za naravo, ki me je obdajala. Le-ta mi daje poseben občutek miru,
                radovednosti ter neskončnih možnosti za učenje in razumevanje sveta, ki nas obdaja. Poslušanje ptic, lovljenje žuželk in
                bežanje pred njimi, obmetavanje z jesenskim listjem ter vonjave cvetlic pa je vedno dopolnjevalo občasno risanje in
                čečkanje v skicirko. </p>
                <img src='/misc_images/manja_napolju.jpg' alt="" className='napolju-img' />



            </div>
        </div>
    )
}

export default Home
