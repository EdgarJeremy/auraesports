import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <video className="landing-video" autoPlay muted loop id="myVideo">
        <source src="/assets/landing-background.mp4" type="video/mp4" />
      </video>
      <div className="background-container">
        <div className="landing-component">
          <div className="row">
            <div className="col align-self-center justify-content-end flex-1">
              <div className="landing-title">
                <span className="welcome">WELCOME TO</span>
                <span className="title">AURA ESPORTS</span>
              </div>
              <div className="landing-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam soluta nobis similique harum officiis natus esse voluptatum reiciendis blanditiis dicta? Incidunt autem quisquam ipsum dolores odit. Adipisci maiores illum cumque!</div>
              <div className="landing-action">
                <Link to="/front/" className="aura-btn"><i className="bi-arrow-right"></i> Explore!</Link>
              </div>
            </div>
            <div className="col align-self-center">
              <div className="landing-image">
                <img src="/assets/aura-logo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}