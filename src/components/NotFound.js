import './NotFound.css'
import notFoundImg from './assets/404_page.png'

function NotFound() {
    return (
        <>
            <div className='img-ctn'>
                <img className='not-found-img' src={notFoundImg} alt='404'/>
            </div>
            <h1 className='not-found-txt'> 404 Stran ne obstaja! </h1>
        </>
    )
}

export default NotFound
