import React, { Component } from "react";
import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Team from "./Team";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Banner />
        <Services />
        <div className="total-project">
          <div className="row">
            <div className="col-4">
              <p className="total-number">100+</p>
              <p className="total-text">Team Member</p>
            </div>
            <div className="col-4">
              <p className="total-number">300+</p>
              <p className="total-text">Team Project</p>
            </div>
            <div className="col-4">
              <p className="total-number">1300+</p>
              <p className="total-text">Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="getstarted">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <img
                  className="getstarted-img p-md-3"
                  src="img/team1.png"
                  alt=""
                />
              </div>
              <div className="col-6">
                <h5>We Can Take Your Business To The Next Level.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae consequuntur, architecto possimus, iusto eligendi
                  inventore praesentium maxime neque quis dolorum blanditiis
                  vitae explicabo? Voluptate ut, hic nisi beatae atque iusto.
                </p>
                <button className="btn-secondary">Get Started</button>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-6">
                <h5>We Can Take Your Business To The Next Level.</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae consequuntur, architecto possimus, iusto eligendi
                  inventore praesentium maxime neque quis dolorum blanditiis
                  vitae explicabo? Voluptate ut, hic nisi beatae atque iusto.
                </p>
                <button className="btn-secondary">Get Started</button>
              </div>
              <div className="col-6">
                <img
                  className="getstarted-img p-md-3"
                  src="img/team1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Team />
        <Portfolio />
        <div className="questions">
          <h1 className="ques-title">
            Frequently Asked Questions{" "}
            <img className="ques-img" src="img/question.png" alt="?" />
          </h1>
          <br />
          <div className="container">
            <div className="ques-body row">
              <div className="col-6">
                <h3>
                  Find Your Right Solution And Let Us Know If You Need Any Help.
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam neque maiores molestias, ipsa repellendus autem dolor
                  placeat quia natus laudantium sint fuga architecto illo harum
                  assumenda aut et adipisci ex.
                </p>
              </div>
              <div className="ques-list col-6">
                <ul>
                  <li className="qu">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                  <li className="qu">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                  <li className="qu">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                  <li className="qu">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                  <li className="qu">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="feedback">
          <h1 className="feedback-title">Clients Feedback</h1>
          <div className="container">
            <div className="row">
              <div className=" feedback-list col-6">
                <ul>
                  <li className="fe">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, tempore consequat.
                  </li>
                  <li className="fe">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                  <li className="fe">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, tempore consequat.
                  </li>
                </ul>
              </div>
              <div className=" feedback-list col-6">
                <ul>
                  <li className="fe">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, tempore consequat.
                  </li>
                  <li className="fe">
                    Donec ullamcorper metus auctor fringilla. Nullam quis risus
                    eget.{" "}
                  </li>
                  <li className="fe">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, tempore consequat.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
