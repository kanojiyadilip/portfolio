import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';


const Home = ()=>{
    const lin = '/img/lin.svg';
    const im = '/img/dilip2.jpg'

    const styles = `
    
    .rimg {
        overflow: hidden;
        border-radius: 50%;
        width: 190px;
        zoom: 1;
        border: 5px;
        border-style: solid;
        border-color: white;
      }
     .home{
        text-align: center;
     } 
     .aboutbtn{
        border-radius: 50%;
        background-color: #3498db; /* Change the background color as needed */
        color: #fff; /* Change the text color as needed */
        padding: 6px 12px; /* Adjust padding as needed */
        font-size: 16px;
        cursor: pointer;
        border: none;
     }
    `;

    const scrollToSection = () => {
        // Replace 'sectionId' with the ID of the element you want to scroll to
        const sectionId = 'sectionId';
        
        // Scroll to the specified section with smooth behavior
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div>
            <style>{styles}</style>
            <div className="home-wrapper">
                <div className='home'>
                    <img src={im} className="rimg" alt="logo" />
                    <br/>
                    <div>
                    <TypeAnimation
                        sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Hi, I'm Dilip Kanojiya. 👋 \n I'm a Software developer.",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        // "I'm a full-stack web developer. ",
                        // 1000
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ fontSize: '2em', display: 'block', whiteSpace: 'pre-line',  color: "#fff", fontWeight: '600', textAlign: 'center'}}
                        repeat={Infinity}
                    />
                    </div>
                    <br/>
                    <br/>
                    <div style={{textAlign: 'center'}}>
                    {/* https://www.linkedin.com/in/dilip-kanojiya-a72a4a136/ */}
                    <a
                  href="https://www.linkedin.com/in/dilip-kanojiya-a72a4a136/"
                  target="_blank">
                        <img src={lin} style={{width: "80px", height: "50px"}} alt="logo" />
                        </a>
                    </div>
                    <br/>
                    <br/>
                    <button className="aboutbtn" onClick={scrollToSection}>↓</button>
                </div>
            </div>
        </div>
    )
}

export default Home;