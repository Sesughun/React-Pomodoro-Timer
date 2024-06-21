import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AudioPlayerss from "./MusicPlayer3";

const QuoteCarousel = () => {
  return (
    <div className="container">
      <div className="row" style={{ backgroundColor: "lightblue" }}>
        <div className="col-md-8">
          <AudioPlayerss />
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <Carousel
            interval={3000}
            controls={false}
            indicators={false}
            className="w-100"
          >
            <Carousel.Item>
              <div
                className="d-flex align-items-center"
                style={{ height: "150px" }}
              >
                <blockquote
                  className="blockquote text-center"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  <p className="mb-0">
                    "The best way to predict the future is to create it."
                  </p>
                  <footer className="blockquote-footer">
                    <br />- Peter Drucker
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-flex align-items-center"
                style={{ height: "150px" }}
              >
                <blockquote
                  className="blockquote text-center"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  <p className="mb-0">
                    "Life is 10% what happens to us and 90% how we react to it."
                  </p>
                  <footer className="blockquote-footer">
                    <br />- Charles R. Swindoll
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="d-flex align-items-center"
                style={{ height: "150px" }}
              >
                <blockquote
                  className="blockquote text-center"
                  style={{ color: "blue", fontWeight: "bold" }}
                >
                  <p className="mb-0">
                    "Your time is limited, don’t waste it living someone else’s
                    life."
                  </p>
                  <footer className="blockquote-footer">
                    <br />- Steve Jobs
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default QuoteCarousel;
