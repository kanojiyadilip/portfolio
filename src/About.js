import LightSpeed from 'react-reveal/LightSpeed';
const About = () => {
    const style = `p {
            color: #fff;
            font-size: 23px;
            font-weight: 400;
        }
        
        .pdiv{
            padding: 0 260px;
        }

        .half-horizontal-line {
            width: 50%;
            // margin: 0 auto; /* Center the line */
            border: 1px solid #fff; /* Change the color as needed */
        }

        @media (max-width: 768px) {
            .pdiv{
                padding: 0 20px;
            }
          }
      `;
    return (
    <div>
        <style>{style}</style>
        <section>
            <div id="sectionId" className="pdiv">
                <p style={{textAlign: "center", fontWeight: '700', fontSize: '30px'}}>About Me</p>
                <br />
                <LightSpeed left>
                <p>Who am i ?</p>
                <p>➯ Currently I'm working as Software Consultant and frocusing on Front-end and backend ✨</p>
                <p>➯ You can find me working with Node.js, Angular, React.Js, Next.Js and JavaScript ✨</p>
                <p>➯ Since 2018 - I have spent my time seeking and learning new technologies and forms of digital expression. This has led to me working on some amazing world-class projects, worked at some amazing places, and worked with some great people. ✨</p>
                <div className="half-horizontal-line"></div>
                <p>🌐 India, Mumbai</p>
                </LightSpeed>
            </div>
        </section>
        <br/>
        <br/>
        <br/>
    </div>
    )
}

export default About;