import './NotFound.css'

function NotFound() {
    return (
        <>
            <div className='img-ctn'>
                <img className='not-found-img' src='/misc_images/404_page.png' alt='404'/>
            </div>
            <h1 className='not-found-txt'> 404 Stran ne obstaja! </h1>
        </>
    )
}

export default NotFound
