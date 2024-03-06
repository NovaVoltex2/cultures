import './css/Hero.css';
import HeroCarousel from './HeroCarousel';
// import required modules




const Hero = () => {

  return (
    <section className="hero-section">
      <div className="container">
        <div className="col1">
          <h1>Connect with Your Origins,</h1>
          <h2>Embrace Your Identity</h2>
          <button className="learn-more">Learn More</button>
        </div>
        <HeroCarousel/>
      </div>
    </section>
  );
};

export default Hero;
