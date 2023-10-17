import React from 'react'
import './Homepage.css'
import img1 from '../Assets/img1.png'
import buy_machine from '../Assets/buy_machine.svg'
import sell_machine from '../Assets/sell_machine.svg'
import servicing from '../Assets/servicing.svg'
import lease_equipment from '../Assets/lease_equipment.svg'
import equipment_loan from '../Assets/equipment_loan.svg'
import shop from '../Assets/shop.svg'
import col1 from '../Assets/col1.svg'
import col2 from '../Assets/col2.svg'
import col3 from '../Assets/col3.svg'
import col4 from '../Assets/col4.svg'
import img2 from '../Assets/img2.png'
import img3 from '../Assets/img3.png'
import img4 from '../Assets/img4.png'
import img5 from '../Assets/img5.png'
import img6 from '../Assets/img6.png'
import img7 from '../Assets/img7.png'
import arrowLeft from '../Assets/arrowLeft.svg'
import arrowRight from '../Assets/arrowRight.svg'
import img8 from '../Assets/img8.png'
import img9 from '../Assets/img9.png'
import img10 from '../Assets/img10.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import adv1 from '../Assets/adv1.svg'
import adv2 from '../Assets/adv2.svg'
import adv3 from '../Assets/adv3.svg'
import adv4 from '../Assets/adv4.svg'
import adv5 from '../Assets/adv5.svg'
import pic1 from '../Assets/pic1.png'
import pic2 from '../Assets/pic2.png'
import image from '../Assets/image.png'

function Homepage (){
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='main'>
      <div className='mainbox'>
      <img src={img1} alt="" />
      <div className='leftbox'>
        <h1>One Stop Solution <br/> for all your <br/> Machine needs</h1>
        <p>From Machine to tools to finance everything<br/>you need in one place</p>
      </div>
      <div className='rightbox'>
        <h3>CTC Machine</h3>
        <p>ORIGA is the only Asset Life Cycle Management Company <br />
        in India that provides very easy and effective solution</p>
      </div>
      </div>
      <div className='page1'>
        <h1>What Are You Looking For?</h1>
        <p>From Machine to tools to finance everything you need in one place</p>
        <div className='services'>
          <img className='s1' src={buy_machine} alt="" />
          <img className='s2' src={sell_machine} alt="" />
          <img className='s3' src={servicing} alt="" />
          <img className='s4' src={lease_equipment} alt="" />
          <img className='s5' src={equipment_loan} alt="" />
          <img className='s6' src={shop} alt="" />
          </div>
          <div className='serviceTxt'>
          <p>Buy Machine</p>
          <p>Sell Machine</p>
          <p>Sevicing</p>
          <p>Lease Equipment</p>
          <p>Equipment Loan</p>
          <p>Shop</p>
        </div>
      </div>
      <div className='page2'>
        <div className='page2Left'>
          <div id='pg21'>
          <a>Looking to Buy</a>
          <a>Looking to Sell</a>
          </div>
          <div id='pg22'>
          <h2>Search for a Machine</h2>
          <p>Find a wide variety of machines from across India <br />to fit your requirements</p>
          <input type="text" placeholder='Which Machine are you looking for?' />
          </div>
          <div id='pg23'>
            <button>Search</button>
            <h4>Learn More</h4>
          </div>
        </div>
        <div className='page2Right'>
          <div id='col1'>
            <img src={col1} alt="" />
            <h3>250+ Checks</h3>
            <p>Our Engineers check every <br />
            machine in order to assure the <br />
            best quality for your money</p>
          </div>
          <div id='col2'>
          <img src={col2} alt="" />
          <h3>Delivered to you</h3>
            <p>No matter which machine you <br />
            select from across the country <br />
            we will get it delivered to you</p>
          </div>
          <div id='col3'>
          <img src={col3} alt="" />
          <h3>Get Service & C</h3>
            <p>Origa will provide sevicing for <br />
            your machine so you don't need <br />
            to worry about anything...</p>
          </div>
          <div id='col4'>
          <img src={col4} alt="" />
            <h3>Financial Support</h3>
            <p>Origa can provide a lease and <br />
            loan to enable you to purchase <br />
            the machine you need</p>
          </div>
        </div>
      </div>
      <div className="page3">
        <div id="pg31">
          <h2>Maintenance Services</h2>
          <p>From Machine to tools to finance everything you need in one place</p>
        </div>
        {/* parent start */}
        <div className='page4'>
        <div className="grid-itemL1">
        <img src={img2} alt="" />
        <h3 id='txt1'>One Time Repair</h3>
      </div>
      <div className="grid-itemR1">
        <h3 id='txt2'>Comissioning & Decommissioning</h3>
        {/* <p id='hide'>Avail transportation from to <br />
        get your machine moved transportation <br />
        services from to get you machiine <br />
        moved aacross</p>
        <button id='hide'>Avail Service</button> */}
        <img src={img3} alt="" />
      </div>
      <div className="grid-itemL2">
        <img src={img4} alt="" />
        <h3 id='txt3'>AMC</h3>
      </div>
      <div className="grid-itemR2">
        <h3 id='txt4'>Logistics</h3>
        <img src={img5} alt="" />
      </div>
      </div>
      </div>
      <div className="page5">
        <h1>We offer Equipment Financing</h1>
        <p>Origa provides tailored machine finance solutions, offering flexible lease and</p>
        <p>loan options to help you get the Equipment according to your needs</p>
      <div className="card">
        <div id="card1">
          <img src={img6} alt="" />
          <h3>Lease Equipment</h3>
          <button>Avail Services</button>
          {/* <img id='img7'src={img7} alt="" /> */}
        </div>
      </div>
      </div>
      <div className="page6">
        <div className="page61">
          <h1>Shop at Origa for</h1>
          <p>From Machine to tools to finance everything you need in one place</p>
        </div>
        <div className="page62">
          <h4>View Shop</h4>
          <img src={arrowRight} alt="" />
        </div>
        <div className="page7">
         <div className="page7card1">
         <div className="content">
          <img src={img8} alt="" />
         </div>
            <h3>Machine Spares</h3>
            <p>Get a one time repair service if your machine has <br />
            broken down</p>
            <button>Search</button>
         </div>
         <div className="page7card2">
         <div className="content">
          <img src={img9} alt="" />
         </div>
            <h3>Machine Spares</h3>
            <p>Get a one time repair service if your machine has <br />
            broken down</p>
            <button>Search</button>
         </div>
         <div className="page7card3">
         <div className="content">
          <img src={img10} alt="" />
         </div>
            <h3>Machine Spares</h3>
            <p>Get a one time repair service if your machine has <br />
            broken down</p>
            <button>Search</button>
         </div>
        </div>
      </div>
      <div className="page8">
        <div className="page81">
          <h1>Our Product categories</h1>
          <p>From Machine to tools to finance everything you need in one place</p>
        </div>
        <div className="page82">
          <img id='leftarrow'src={arrowLeft} alt="" />
          <img id='rightarrow'src={arrowRight} alt="" />
        </div>
    </div>
    <div className="page9">
    {/* <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cards-wrapper">
      <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={img4} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper">
      <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={img8} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper">
      <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={img2} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

      </div>
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper">
      <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={img9} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

      </div>
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div> */}
<div className='card'>
      <Carousel responsive={responsive} >
        <div className='card1'>
          <p>Up to 25% OFF</p>
          <img src={img4} alt="" />
          <p>200+ Product Available</p>
          <h2>Lubricants & Oils</h2>
          <p>Get a one time repair service if your <br />
          machine has broken down</p>
        </div>
        <div className='card2'>
          <p>Up to 25% OFF</p>
          <img src={img8} alt="" />
          <p>200+ Product Available</p>
          <h2>Welding & Soldering</h2>
          <p>Get a one time repair service if your <br />
          machine has broken down</p>
        </div>
        <div className='card3'>
          <p>Up to 25% OFF</p>
          <img src={img2} alt="" />
          <p>200+ Product Available</p>
          <h2>Safety Equipment</h2>
          <p>Get a one time repair service if your <br />
          machine has broken down</p>
        </div>
        <div className='card4'>
          <p>Up to 25% OFF</p>
          <img src={img9} alt="" />
          <p>200+ Product Available</p>
          <h2>Electric Components</h2>
          <p>Get a one time repair service if your <br />
          machine has broken down</p>
        </div>
      </Carousel>;
    </div>
    </div>
    <div className="page10">
        <div className="page101">
          <h1>Recently Viewed Machines</h1>
          <p>From Machine to tools to finance everything you need in one place</p>
        </div>
        <div className="page102">
          <h4>View Shop</h4>
          <img src={arrowRight} alt="" />
        </div>
        <div className="page11">
          <div className="page11card1">
            <div className="content">
              <img src={img4} alt="" />
            </div>
            <div className='card11'>
            <h3>CNC Machine</h3>
            <p id="p1">Hitachi | Mumbai</p>
            <p>7 Year Old</p>
            <p>Rs.7,55,000</p>
            <button>Avail Service</button>
            </div>
          </div>
          <div className="page11card2">
            <div className="content">
              <img src={img4} alt="" />
            </div>
            <h3>CNC Machine</h3>
            <p id="p1">Hitachi | Mumbai</p>
            <p>7 Year Old</p>
            <p>Rs.7,55,000</p>
            <button>Avail Service</button>
          </div>
          <div className="page11card3">
            <div className="content">
              <img src={img4} alt="" />
            </div>
            <h3>CNC Machine</h3>
            <p id="p1">Hitachi | Mumbai</p>
            <p>7 Year Old</p>
            <p>Rs.7,55,000</p>
            <button>Avail Service</button>
          </div>
          <div className="page11card4">
            <div className="content">
              <img src={img4} alt="" />
            </div>
            <h3>CNC Machine</h3>
            <p id="p1">Hitachi | Mumbai</p>
            <p>7 Year Old</p>
            <p>Rs.7,55,000</p>
            <button>Avail Service</button>
          </div>
        </div>
    </div>
    <div className="page12">
      <h1>Origa Advantage</h1>
      <p>From Machine to tools to finance everything you need in one place</p>
    </div>
    <div className="page13">
      <img src={adv1} alt="" />
      <img src={adv2} alt="" />
      <img src={adv3} alt="" />
      <img src={adv4} alt="" />
      <img src={adv5} alt="" />
    </div>
    <div className="page13text">
      <p>Best value for <br />your machine</p>
      <p>Machines with over <br />200 quality checks</p>
      <p>Easy 3 step process <br />for selling</p>
      <p>360 Degree <br />experience for leasing</p>
      <p>One stop solution for <br />all your machine need</p>
    </div>
    <div className="page14">
      <div className="outer">
    <div className="container1">
  <div className="row1">
    <div className="col">
      <img src={pic1} alt="" />
      <p>Health & Life Sciences</p>
    </div>
    <div className="col order-5">
      <img src={pic2} alt="" />
      <p>Health & Life Sciences</p>
    </div>
    <div className="col order-1">
      <img src={pic1} alt="" />
      <p>Health & Life Sciences</p>
    </div>
    <div className="col order-1">
      <img src={pic2} alt="" />
      <p>Health & Life Sciences</p>
    </div>
  </div>
  </div>
    <div className="container2">
  <div className="row2">
    <div className="col">
      <img src={pic2} alt="" />
      <p>Health & Life Sciences</p>
    </div>
    <div className="col order-5">
      <img src={pic1} alt="" />
      <p>Health & Life Sciences</p>
    </div>
    <div className="col order-1">
      <img src={pic2} alt="" />
      <p>Health & Life Sciences</p>
    </div>
    <div className="col order-1">
      <img src={pic1} alt="" />
      <p>Health & Life Sciences</p>
    </div>
  </div>
  </div>
  </div>
  <div className="inner">
    <h1>We cater to over 65 <br />Industries</h1>
    <p>From Machine to tools to finance everything <br />you need in one place</p>
  </div>
    </div>
    <div className="page15">
      <div className="page15left">
        <img src={image} alt="" />
      </div>
      <div className="page15right">
        <h1>Lets your services reach <br />a new audience!!</h1>
        <p>Partner with us to deliver exceptional services in <br />
        multiple cities across the Country, to build across <br />
        the Country, to build exceptional <br />
        customer experience from repair to logistics</p>
        <button>Search</button>
      </div>
    </div>
    </div>
  )
}

export default Homepage;
