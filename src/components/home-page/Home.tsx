
import "./home.scss";
import image1 from "./../../images/slider-img.png";
import HowTo from "../how/HowTo";
import About from "../about-page/About";
import Sign from "../sign in/Sign";


const Home = () => {

  let spans = document.querySelectorAll(".spanSlider span");
  let divs = Array.from(document.querySelectorAll(".home .hom-text"));

  function removeactive(this: any )  {
    spans.forEach((span)=> {
      span.classList.remove("active");
      this.classList.add("active");
    })
  }

  function manageDivs(this: any) {
    divs.forEach((img: any) => {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cate).forEach((el) => {
      el.style.display = "block";
    });
  }
  
  spans.forEach((span) => {
    span.addEventListener("click", removeactive);
    span.addEventListener("click", manageDivs);
  })



  
  

  return (
    <>
    <div className="home">

      <div className="home-text one">
        <div className="text">
        <h2>Digital Currency
          The Future of Trading.</h2>
        <a href="#">Get Started</a>
        </div>
        <div className="image-home">
          <img src={image1} />
        </div>
      </div>
      <div className="home-text two">
      <div className="text">
        <h2>Digital Currency
          The Future of Trading.</h2>
        <a href="#">Get Started</a>
        </div>
        <div className="image-home">
          <img src={image1} />
        </div>
      </div>
      <div className="home-text three">
      <div className="text">
        <h2>Digital Currency
          The Future of Trading.</h2>
        <a href="#">Get Started</a>
        </div>
        <div className="image-home">
          <img src={image1} />
        </div>
      </div>
      <div className="home-text four">
      <div className="text">
        <h2>Digital Currency
          The Future of Trading.</h2>
        <a href="#">Get Started</a>
        </div>
        <div className="image-home">
          <img src={image1} />
        </div>
      </div>
      <div className="home-text five">
      <div className="text">
        <h2>Digital Currency
          The Future of Trading.</h2>
        <a href="#">Get Started</a>
        </div>
        <div className="image-home">
          <img src={image1} />
        </div>
      </div>
      <div className="spanSlider">
        <span data-cate=".one"></span>
        <span data-cate=".two"></span>
        <span data-cate=".three"></span>
        <span data-cate=".four"></span>
        <span data-cate=".five"></span>
      </div>
    </div>
    <HowTo />
    <About />
    <Sign />
    </>
    
  )
}

export default Home;