import React, { useEffect } from 'react';
import './Home.css';
import Aos from 'aos';
import '/home/aman/food/node_modules/aos/dist/aos.css';
import Cafe from '/home/aman/food/src/images/cafe.jpg';
import Circle1 from '/home/aman/food/src/images/circle1.jpg';
import Circle2 from '/home/aman/food/src/images/circle3.jpg';
import Circle3 from '/home/aman/food/src/images/circle2.jpg';

function Home(){
    useEffect(()=>{
     Aos.init({duration:2000});
    },[])
    return(
        <div className="home1">
             <div className="bhram">
                    <img src={Cafe} className="cpic" alt="Hotel View"/>
                    <h1 className="tagline">Central Perk-"Best in town" :)</h1>
                </div>
            <div className="grids">               
                <div data-aos="fade-right" className="box1"><h3>Mission</h3><p>Central Perk will always be 'our' brand – in the sense, that you will always find the warmth and togetherness you expect from a good cup of the finest brew in the world. Customer satisfaction is what we judge ourselves by. If they are delighted, we have served our purpose of  our 'being'.</p></div>
                <div data-aos="fade-left" className="box2"><h3>Our Tale</h3><p>What's a good meal without a good story to accompany it? So here is ours. Like all unusual fables, this one too begins elsewhere. In an event setting – what did you expect? After all, it is the 21st century.</p></div>
                <div data-aos="fade-right" className="box1"><h3>Central Perk Temptation</h3><p>Little touches like a live kitchen serving freshly cooked food, offering home made food and other International variants  from European, Mediterranean, Italian, Mexican, Chinese Cuisines.</p></div>
            </div>
            <div className="anidiv">
                <div data-aos="fade-right" className="ani">
                    <img src={Circle1} className="circle"/>
                </div>
                <div data-aos="fade-up" className="ani">
                <img src={Circle2} className="circle"/>
                </div>
                <div data-aos="fade-left" className="ani">
                <img src={Circle3} className="circle"/>
                </div>
            </div>
        </div>
    )
}
export default Home;