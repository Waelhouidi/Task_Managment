import React from 'react';
import './Contact.css';
import Msg_icon from '../../edusity_assets/msg-icon.png';
import Mail_icon from '../../edusity_assets/mail-icon.png';
import Phone_icon from '../../edusity_assets/phone-icon.png';
import Location_icon from '../../edusity_assets/location-icon.png';

function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "87e74613-18b7-4321-a534-1042904e01c2");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'> 
    <div className="contact-col">
        <h3>Send a Message <img src={Msg_icon}  alt="" /></h3>
<p>Fell free to contact us </p>
<ul>
    <li>
        <img src={Mail_icon} alt="" />
        Email:wael@gmail.com
    </li>
    
    <li>
        <img src={Phone_icon} alt="" />
+216 88888888    </li>
<li>
    <img src={Location_icon} alt="" />
    Mahdia, <strong>sidiMassoud</strong>
</li>
</ul>
    </div>
    <div className="contact-col">
      <form onSubmit={onSubmit}>
      <label htmlFor="name" >Your Name : </label>
        <input type="text" id="name" placeholder='Your Name Here ' required/>
        <label htmlFor="Number" >Your Number  : </label>
        <input type="number" id="name" placeholder='Your Number Here ' required/>
        <label htmlFor="msg" > Write Your Message here  : </label>
<textarea name="msg" id="msg"  rows="6" placeholder='Your message here'></textarea>
<button className='btn dark-btn' type="submit" >Submit</button>      </form>
<span>{result}</span>  
    </div>

    </div>
  )
}

export default Contact