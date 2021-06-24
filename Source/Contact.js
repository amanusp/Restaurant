import React from 'react';
import './Contact.css';
import add from '/home/aman/food/src/images/add.jpg';
import mail from '/home/aman/food/src/images/mail.png';

function thanks(){
    alert("Thank you for your time!!!");
}

function Contact(){
    return(
        <div className="cook1">
            <div className="sec1">
                <h1 className="cntct">Contact Us</h1>
                <p className="cline">In case of any query or help please contact us. We will be happy to help!!!</p>

            </div>
            <div className="sec2">
                <img src={add} alt="addresspoint" className="apnt"/>
                <h2 className="cli">Address</h2>
                <p className="cli"><b>32 KA Green Park,Amroha</b></p>
                <img src={mail} alt="mailbox" className="apnt"/>
                <h2 className="cli">E-mail</h2>
                <p className="cli"><b>ar2553449@gmail.com</b></p>
            </div>
            <div className="sec3">
                <div className="cnta">
                    <h2 className="clin">Send Message</h2>
                    <textarea className="tf" placeholder="Name"></textarea>
                    <textarea className="tf" placeholder="Email"></textarea>
                    <textarea className="tf" placeholder="Message"></textarea>
                    <button className="cbtn" onClick={thanks}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Contact;