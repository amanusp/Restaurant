import React, {useState} from 'react';
import pizza from '/home/aman/food/src/images/pizza1.jpg';
import burger from '/home/aman/food/src/images/burger1.jpg';
import french from '/home/aman/food/src/images/french1.jpg';
import spring from '/home/aman/food/src/images/spring1.jpg';
import dosa from '/home/aman/food/src/images/Dosa1.jpg';
import uttapam from '/home/aman/food/src/images/Uttapam1.jpg';
import idli from '/home/aman/food/src/images/Idli1.jpg';
import poori from '/home/aman/food/src/images/Poori1.jpg';
import pasta from '/home/aman/food/src/images/Pasta1.jpg';
import salad from '/home/aman/food/src/images/salad.jpg';
import bruscheta from '/home/aman/food/src/images/Bruschetta.jpg';
import risotto from '/home/aman/food/src/images/risotto.jpg';
import coffee from '/home/aman/food/src/images/coffee1.jpg';
import coke from '/home/aman/food/src/images/coke.jpg';
import shakes from '/home/aman/food/src/images/Shakes.jpg';
import tea from '/home/aman/food/src/images/tea.jpg';
import './Cuisine.css';


function Cuisine(){

     return(
        <div>
            <div className="container">
            <h1 className="type">Quick Bites</h1>
            </div>
            <div className="t1">
            <span className="post">
                <img src={pizza} className="show" alt="Pizza"/>
                <p className="quote">"Every pizza is a personal pizza if you try hard and believe in yourself."</p>
            </span>
            <span className="post">
                <img src={burger} className="show" alt="Burger"/>
                <p className="quote">"Life is too short to miss out on double cheeseburgers"</p>
                </span>
            <span className="post">
                <img src={french} className="show" alt="French fries"/>
                <p className="quote">"There's no 'we' in fries." :)))</p>
                </span>
            <span className="post">
                <img src={spring} className="show" alt="Spring rolls"/>
                <p className="quote">"Feeling low? Grab some spring rolls!!"</p>
                </span>
            </div>
            <div className="container">
            <h1 className="type">South Indian</h1>
            </div>
            <div className="t1">
            <span className="post">
                <img src={dosa} className="show" alt="Dosa"/>
                <p className="quote">"Something healthy, crispy and tasty at same time--Dosa"</p>
                </span>
            <span className="post">
                <img src={uttapam} className="show" alt="Uttapam"/>
                <p className="quote">"Nothing much just a highly educated dosa, it's Uttapam"</p>
                </span>
            <span className="post">
                <img src={idli} className="show" alt="Idli"/>
                <p className="quote">"May the softness and flavour of Idli guide you towards health and happiness"</p>
                </span>
            <span className="post">
                <img src={poori} className="show" alt="Poori Masala"/>
                <p className="quote">"Start your day with the fluffy hot puri"</p>
                </span>
            </div>
            <div className="container">
            <h1 className="type">Pure Italian</h1>
            </div>
            <div className="t1">
            <span className="post">
                <img src={pasta} className="show" alt="Pasta"/>
                <p className="quote">"Eat PASTA run FASTA" ;))</p>
                </span>
            <span className="post">
                <img src={salad} className="show" alt="Caprese Salad"/>
                <p className="quote">Caprese pasta-Healthy, tasty, fast, cheap.</p>
                </span>
            <span className="post">
                <img src={bruscheta} className="show" alt="Bruschetta"/>
                <p className="quote">"Fill your apettite with spicy Bruschetta"</p>
                </span>
            <span className="post">
                <img src={risotto} className="show" alt="Mushroom Risotto"/>
                <p className="quote">"Thick and creamy egg and the rice! It all makes such a satisfying combination!-Risotto"</p>
                </span>
            </div>
            <div className="container">
            <h1 className="type">Beverages</h1>
            </div>
            <div className="t1">
            <span className="post">
                <img src={coffee} className="show" alt="Coffee"/>
                <p className="quote">"Order from office or invite someone special for a cup of coffee at our cafe"</p>
                </span>
            <span className="post">
                <img src={coke} className="show" alt="Diet Coke"/>
                <p className="quote">"Add adventure to your meal"</p>
                </span>
            <span className="post">
                <img src={shakes} className="show" alt="Shakes"/>
                <p className="quote">"Shakes are the gift from god that comes in different flavour"</p>
                </span>
            <span className="post">
                <img src={tea} className="show" alt="Ginger Tea"/> 
                <p className="quote">"Don't wanna order food order feelings(Tea)"</p>
                </span>
            </div>
        </div>
    )
}
export default Cuisine;