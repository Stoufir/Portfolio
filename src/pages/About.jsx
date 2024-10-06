import Banner from '../components/Banner'
import Collapses from '../components/Collapses'
import data from '../about.json'
import Mountainpicture from '../assets/Mountain_picture.png'

function About () {
    return (<div>
        <Banner imgSrc={Mountainpicture} text="" />
        <div className='about'>
        <Collapses data={data}/>
        </div>
        </div>
    )
}


export default About