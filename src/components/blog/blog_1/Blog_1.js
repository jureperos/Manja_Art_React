import img_1 from './Quinacridone gold hue.jpg'
import img_2 from './Permanent Alizarin Crimson.jpg'
import img_3 from './Quinacridone gold hue tube.jpg'
import img_4 from './PBr7_barvni_vzorci.jpg'
import './Blog_1.css'

function Blog_1() {
    return (
        <div className='blog_1-ctn'>
            <div className='blog_1-intro'>
                <h1 className="blog_1-title">Akvarel: Barve in pigmenti</h1>
                <div className="blog_1-datum">Sobota, 4.3.2023</div>
            </div>
            <div className="txt-1">
            <p>Ko se lotevamo akvarelnega risanja potrebujemo 3 glavne materiale: barvo, papir in čopiče. A ne sme nam biti vseeno za njihovo kvaliteto. Za dober končni produkt, ki bo ohranjen še skozi veliko generacij, so pomembni kvalitetni materiali. S slednjimi bomo tudi veliko bolj uživali in ne bomo imeli občutka, da se s sliko »borimo«, kljub temu da smo ji kos. Tokrat se bo tematika vrtela okoli barv oz. pigmentov iz katerih nastane sama barva za akvarelno risanje ter kaj od njih pričakujemo.</p>

            <p>V osnovi so akvarelne barve narejene iz fino mletega pigmenta in veziva iz gumi arabike, destilirane vode, glicerina in/ali medu. Gumi arabika deluje kot lepilo, ki delce med seboj povezuje, glicerin in med pa kot vlažilca, ki pomagata zadrževati vlago in s tem tudi povečata samo prožnost barve. Ko pigmentu dodamo vezivo nastane barva.</p>

            <p>Praviloma imajo v akvarelnem (oz. splošno umetniškem) svetu prednost barve z enojnimi pigmenti, barve ki vsebujejo več pigmentov pa se uporablja redkeje. To pa zato, ker lahko sami z le parimi barvami namešamo nam poljubno barvo in produkt te mešanice je, da so barve bolj »čiste« in intenzivne. Včasih pa nekateri enojni pigmenti niso zaželjeni, saj je njihova obstojnost na svetlobi slaba (primer tega je barva Alizarin crimson). V takšnih primerih imamo na voljo tudi približke želenih barv (ki pa posledično vsebujejo več pigmentov). Proizvajalci umetniških barv so tudi v veliki meri odvisni od ostalih industrij (npr. avtomobilske) in lahko se zgodi, da pride do prekinitve izdelave določenih pigmentov, kar pomeni da izgine tudi v umetniškem svetu. Lep primer tega je še vedno zelo popularen in iskan pigment PO 49, t.i. Quinacridone gold. Zadnja serija je bila prodana leta 2018 in trenutno se barva uporablja kot mešanica dveh pigmentov, ki se med proizvajalci razlikuje. Žal je vsaka mešanica le približek original barvi. Slednja je izredno popularna zaradi barv, ki smo jih dobili z mešanjem.</p>

            <div className='blog_1-img-descr-ctn'>
                <img src={img_1} alt="Quinacridone gold hue" className="blog_1-img_1" />
                <p className="blog_1-img_1-description">Slika 1: Quinacridone gold hue, ki je mešanica dveh pigmentov (PY 150, PR 110) ter original Quinacridone gold (PO 49), katerega ni več možno kupiti.</p>
            </div>

            <p>Barve, ki se prodajajo se največkrat delijo na dve skupini: akademske barve (te so slabše kvalitete in tudi cenovno bolj ugodne) in umetniške barve (to so barve najvišje kvalitete določene znamke in so cenovno dražje). Barve slabe kvalitete nam ne nudijo tako intenzivnega in globokega videza, kot bi si želeli, ker je v njih ponavadi veliko veziva proti pigmentu. Prav tako je pri teh barvah pogosto, da so produkt mešanice večih pigmentov, zaradi katerih lahko dobimo neželene učinke, ko začnemo mešati na paleti. Velikokrat razlog tiči v temu, da so nekateri pigmenti dražji od drugih in jih posledično proizvajalci želijo poustvariti (npr. cerulean blue ’hue’, cadmium yellow ’hue’, itd., ki nam pove, da je to le odtenek oz. približek original pigmentu).
            </p>
            <p>Čeprav nas mikajo cenovno bolj ugodne barve, sploh ko smo na začetku ali pa bi se mogoče le sprobali v risanju, pa vseeno priporočam za nakup kvalitetnih barv, ker lahko le s tremi barvami namešamo skoraj vse kar želimo (rumena, magenta in cian barva kot primarne barve). Pri akvarelnem risanju se prav tako ne uporablja bele barve, čisto črno pa uporabljamo bolj redko. Nakup treh barv nam tako ne bo predstavljal velik začetni strošek in naučili se bomo veliko o mešanju barv in barvni teoriji. Kasneje pa lahko svojo paleto razširimo po našem okusu.</p>
            <p>Večinoma se pričakuje, da imajo priznane znamke naveden t.i. ’Barvni indeks generično ime’ (=Pigment C.I. generic name) barve, ki kupujemo. Ta barvni indeks je le standardiziran sistem proizvajalcev in potrošnikov za identifikacijo barv. Te so združene v skupine glede na njihovo kemično sestavo. Kot primer: če želimo kupiti ultramarin modro, vemo da je le-ta kategoriziran kot PB29 (P = pigment, B = blue, in sledeča številka je le kronološki vrstni red registracije v indeksu). Na tak način vemo, da bomo vedno kupili isti pigment, ne glede na to od katerega proizvajalca bo. Če pigment ni naveden na tubi potem odpriporočam nakup.</p>

            <div className="blog_1-img-descr-ctn">    
                <img src={img_2} alt="Permanent Alizarin Crimson" className="blog_1-img_2" />
                <p className="blog_1-img_2-description">Slika 2: Primer barvnega indeksa na tubi barve Permanent Alizarin Crimson (PR 177, PV 19, PR 149).</p>
            </div>

            <p>
            Akvareli so zanimivi, saj se karakteristika pigmentov in načina kako so bili obdelani, lepo izrazijo na papirju. Zaradi tega akvarele ločimo glede na neke grobe, glavne lastnosti:
            </p>

            <ul>
                <li>koliko je barva prosojna/prekrivna;</li>
                <li>v kolikšni meri lahko barvo odstranimo iz papirja, ko je ta že nanesena na papir;</li>
                <li>kakšna je obstojnost barve;</li>
                <li>kakšna je maksimalna moč barve ter</li>
                <li>kakšna je stopnja granulacije.</li>
            </ul>

            <p>Koliko je barva prosojna/prekrivna, kako močno se vpija v papir, vrednost in obstojnost barve je označena s specifičnimi znaki in ponavadi navedena na tubi. Znaki se med proizvajalci razlikujejo, a ne bistveno. Informacije lastnosti pigmentov lahko najdemo tudi na spletni strani proizvajalca. Sčasoma bomo vedeli kaj si želimo oz. pričakujemo od določene barve in temu nakup prilagodimo, nikakor si nam pa ni treba že na začetku beliti glave.</p>

            <div className="blog_1-img-descr-ctn">
                <img src={img_3} alt="Quinacridone gold hue tube" className="blog_1-img_3" />
                <p className="blog_1-img_3-description">Slika 3: Slika tube Quinacridone gold hue in njenih lastnosti. V tem primeru nam delno poln trikotnik pove, da se barva srednje močno vpije v papir, prazen kvadrat da je barva prosojna, 4 zvezdice (od petih) da ima dobro obstojnost na svetlobi ter obkrožena številka 2, da je v rangu cenejših barv (višje kot gremo, bolj je pigment vreden in posledično dražji. Rang seže do stopnje 8 pri proizvajalcu Schmincke.).</p>
            </div>

            <p>Način kako lahko zabeležimo in prikažemo te lastnosti barv je z barvnimi vzorci, ki so prikazani spodaj. Ne samo, da vidimo kako se barve obnašajo, ampak je tudi dober način za primerjanje barv med seboj in med različnimi znamkami. Lahko tudi vidimo, da čeprav so pigmenti med proizvajalci enaki pa same barve niso povsem identične. Za nekatere pigmente lahko tudi opazimo, da čeprav je uporabljen isti pigment, pa dobimo ven povsem drugačne barve – kot dober primer tega je pigment Pbr7. To je zaradi samega načina obdelave pigmenta, ki je tudi med proizvajalci različen.</p>

            <div className="blog_1-img-descr-ctn">
                <img src={img_4} alt="PBr7_barvni_vzorci" className="blog_1-img_4" />
                <p className="blog_1-img_4-description">
                    Slika 4: Primer pigmenta Pbr 7 oz. barve Sienna in Umber, enega izmed najbolj uporabljenih zemeljskih barv na paleti umetnika. Kakšno barvo dobimo je odvisno od načina obdelave. Pri obdelavi višje temperature gre odtenek bolj proti rdečkastem tonu.

                </p>
            </div>




            </div>
        </div>
    )
}

export default Blog_1