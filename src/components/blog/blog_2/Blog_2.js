import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'
import './Blog_2.css'
import '../common-styles.css'

function Blog_2() {
    return (
        <div className='blog-ctn'>
            <div className='blog-head'>
                <h1 className="blog-title">Kako pripraviti akvarelno paleto</h1>
                <div className="blog-datum">Četrtek, 18.5.2023</div>
            </div>

                
            <div className='txt-2'>
                <p>Barve v paleti oziroma set lahko kupimo že vnaprej, lahko pa kupimo paleto in dodamo barve, ki jih mi želimo. Plastične palete so izredno poceni in to katero bom uporabila v tem blogu sem kupila v trgovini Pri levčku. Paleta je stala le 5.2 € in skupno ima 28 prostorčkov za barvo. Ta paleta mi bo služila za botanične ilustracije, kar se tudi odraža pri izbranih barvah.</p>
                <img src={img1} className='bl2-img'/>

                <p>Iz izbranih barv naredim barvne vzorce, da se tako lažje odločim, če mi barve ustrezajo.  Barve sproti tudi mešam, tako vidim kaj mi paleta ponuja. Nato premislim kakšen bi bil vrstni red barv na paleti. </p>
                <div className='bl2-img-ctn'> 
                    <img src={img2}/>
                    <img src={img3}/>
                </div>

                <p>Paleto očistim z milom in vodo, da razmastim podlago in odstranim umazane delce. Priporočam da se podlago, kjer se barve mešajo, le na rahlo podrgne po površini z najmanj grobim brus papirjem. Tu ne smemo pretiravati. S tem preprečimo, da se akvarel med mešanjem sprijema v majhne kroglice (angl. <em>watercolour beading</em>). S tem ni nič narobe, je pa težje vedeti kakšno barvo smo namešali. Postopek z brus paprijem lahko tudi izpustite, saj bo ob večji uporabi palete »beading« postopoma izginil. </p>
                <img src={img4}/>

                <p>V prostorčke, kamor bom dodala barvo, dokaj močno zarežem črte z ulfa nožom. To bo pripomoglo k temu, da posušene barve ne bodo padale iz palete (tudi če padejo se jih le namoči in namesti nazaj v prostorček).</p>
                <img src={img5}/>

                <p>V prostorček dodam poljubno barvo. Priporočam, da se prostorčka ne napolni do konca.</p>
                <img src={img6}/>

                <p>Z zobotrebcem premešam barvo, da dobro razporedim pigment in vezivo.</p>
                <img src={img7}/>

                <p>Zelo dobra navada je, da se rumene barve nikoli ne kontaminira s preostalimi barvami. Najlažje je to rešiti tako, da poleg prostorčkov za rumeno barvo, slednjo tudi malo dodamo na vsako mešalno podlago. Na tej podlagi se rumena lahko vedno kontaminira. Paziti je potrebno, da se rumena barva ne dotika roba. Da še boljše lahko kontroliramo kontaminacijo se tudi priporoča, da je vsaka ločena mešalna površina namenjena določenim barvnim skupinam (npr. na eni površini mešamo le rumeno/oranžno/rdečo, v naslednji purpurno/vijolično in modro, na tretji površini zeleno, nato zemeljske barve in nazadnje črne barve). Preprečevanje kontaminacije barve nam pomaga pri temu, da se različne barve med seboj ne premešajo do take mere, da posledično dobimo rjave ali zamolkle barve.</p>
                <p>V določenih prostorčkih sem želela dve barvi. Da se ne mešata med seboj, sem ju ločila le s plastičnim izrezkom. </p>
                <img src={img8}/>

                <p>Ko se barve posušijo niso enake barvi katero aktiviramo in z njo rišemo. Zato priporočam, da na papir naredite barvne vzorce in jih dodate v paleto. Tako boste vedno vedeli kako določena barva izgleda preden boste po njej posegli. </p>
                
                
                <div className='bl2-img-ctn'> 
                    <img src={img9}/>
                    <img src={img10}/>
                </div>
            </div>
        </div>

    )
}

export default Blog_2
