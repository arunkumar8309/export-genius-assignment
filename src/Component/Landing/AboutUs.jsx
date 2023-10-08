import { useState, useEffect } from "react";

function AboutUs() {
  const data = [
    {
      name: "Arun kumar ",
      date: "10 January",
      content:
        "Lorem ipusm dolor sit amet,consectetur elit,send do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non priodent,sunt in culpa qui officia deserunt",
      profile: "profile1.png",
    },
    {
      name: "sanjay Yadav",
      date: "5 March",
      content:
        "Lorem ipusm dolor sit amet,consectetur elit,send do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non priodent,sunt in culpa qui officia deserunt",
      profile: "profile1.png",
    },
    {
      name: "Rohit Saw ",
      date: "2 June",
      content:
        "Lorem ipusm dolor sit amet,consectetur elit,send do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non priodent,sunt in culpa qui officia deserunt",
      profile: "profile1.png",
    },
    {
      name: "Sachin Rana ",
      date: "17 August",
      content:
        "Lorem ipusm dolor sit amet,consectetur elit,send do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non priodent,sunt in culpa qui officia deserunt",
      profile: "profile1.png",
    },
    {
      name: "Aaron Boby ",
      date: "2 November",
      content:
        "Lorem ipusm dolor sit amet,consectetur elit,send do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehendent in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non priodent,sunt in culpa qui officia deserunt",
      profile: "profile1.png",
    },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
  console.log("windowWidth", windowWidth);

  return (
    <section className="about_us_t_main_section" id="Aboutus">
      <h1>What our Clients say about us</h1>
      <div className="card_cantener_main_block">
        {data.map((testimonial, index) => (
          <div
            className={`aboutus_card_block ${
              index >= currentCard &&
              index < currentCard + (windowWidth >= 768 ? 3 : 1)
                ? "visiblecard"
                : "hiddencard "
            }`}
            key={index}
          >
            <p>{testimonial.content}</p>
            <div className="profile_name_block">
              <div className="profile_block_aboutus">
                <img
                  src={require(`./../../Assets/Images/${testimonial.profile}`)}
                  alt="about-profile"
                />
              </div>
              <div className="name_date_block_aboutus">
                <h2>{testimonial.name}</h2>
                <p>{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* carusole icon */}
      <div className="carousel-navigation-blog-one">
        <button className="prev-button" onClick={prevCard}>
          &#8249;
        </button>
        <button className="next-button" onClick={nextCard}>
          &#8250;
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
