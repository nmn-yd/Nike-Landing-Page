function Hero() {
  return (
    <main>
      <section className="hero">
        <div className="wrapper">
          <div className="container">
            <div className="left flow-content">
              <h1> YOUR FEET DESERVE THE BEST</h1>
              <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
              <div className="know-more ">
                <button className="button ">Show Now </button>
                <button className="button catbtn ">Category</button>
              </div>
              <div className="shopping">
                <p>Also Available On</p>
                <img
                  className="flipkart"
                  src="../public/flipkart.png"
                  alt="flipkart shopping app icon"
                />
                <img
                  src="../public/amazon.png"
                  alt="Amazon shopping app icon"
                />
              </div>
            </div>
            <div className="right">
              <img src="nike.png" alt="shoe Image" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
