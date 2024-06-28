import React from 'react';
import { HashRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { LinkedInEmbed } from 'react-social-media-embed';
import emailjs from 'emailjs-com';

function App() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhq3krc', 'template_k3554ej', e.target, '3-U8SRnrQJTfjnrhO')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email.');
      });

    e.target.reset(); // Reset the form after submission
  };

  window.onscroll = function () {

    let navbars = document.getElementsByClassName('navbar');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      console.log('Adding scrolled class');
      for (let i = 0; i < navbars.length; i++) {
        navbars[i].classList.add('scrolled');
      }
    } else {
      console.log('Removing scrolled class');
      for (let i = 0; i < navbars.length; i++) {
        navbars[i].classList.remove('scrolled');
      }
    }
  }


  return (
    <div className="App">
      {/* Navbar */}
      < nav className="navbar navbar-expand-lg bg-light" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Aditya Ved</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="social-icon" href="https://github.com/aved2" target="_blank" rel="noopener noreferrer"><i className="ri-github-line"></i></a>
              </li>
              <li className="nav-item">
                <a className="social-icon" href="https://linkedin.com/in/aditya-ved/" target="_blank"
                  rel="noopener noreferrer"><i
                    className="ri-linkedin-box-line"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav >
      {/* Home */}
      < section id="home" className="d-flex align-items-flex-start min-vh-100" >
        <div className="container">
          <div className="home-row">
            <div className="col-md-6">
              <h1 className="display-2 fw-bold">Hi there! I am <span className="text-brand">Aditya Ved.</span></h1>
              <h4 className="mt-3 mb-5">Passionate student and software engineer.</h4>
              <a href="#contact" className="btn btn-brand">Get Connected</a>
              <a href="resume.pdf" data-fancybox data-type="pdf" className="btn btn-brand" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <div className="col-md-6">
              <img className="headshot" src="./images/headshot.png" alt="Headshot" />
            </div>
          </div>
        </div>
      </section >

      {/* About */}
      < section id="about" className="section-padding " style={{ boxShadow: '0 -10px 10px -10px var(--shadow)' }
      }>
        <div className="container" data-aos="fade-up">
          <div className="row text-center">
            <div className="col-12">
              <div className="setion-title text-center">
                <h1 style={{ color: 'var(--c-brand)' }}>About Me</h1>
                <p style={{ color: 'white', fontSize: '20px' }}>Hi! I'm Aditya, a student studying Mathematics and Computer
                  Science at the University of Illinois Urbana-Champaign. With experience in Full Stack Development and AI/ML, I am driven to apply my passion, knowledge, and
                  experience to create impactful and innovative software solutions in the industry.</p>
                <div className="line">
                </div>
              </div>
              <h2 style={{ color: "var(--c-brand)" }}>Tech Stack</h2>
              <div className="langs-list">
                <p style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginRight: '10px'
                }}>
                  Languages: </p>
                <p className="python">Python</p>
                <p className="c">C++</p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(164, 128, 29)',
                  width: '46px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px'
                }}>
                  Java
                </p>
                <p className="JavaScript">JavaScript</p>
                <p className="HTML">HTML/CSS</p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(169, 88, 153)',
                  width: '40px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px'
                }}>
                  SQL
                </p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(29, 153, 164)',
                  width: '56px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px'
                }}>
                  LaTeX
                </p>
              </div>
              <div className="langs-list">
                <p style={{
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginRight: '10px'
                }}>Full Stack Development:
                </p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(147, 12, 7)',
                  width: '60px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px'
                }}>
                  ReactJS
                </p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(121, 18, 120)',
                  width: '90px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px'
                }}>
                  React Native
                </p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(153, 81, 18)',
                  width: '120px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px',
                  marginBottom: '20px'
                }}>
                  Google Firebase
                </p>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  backgroundColor: 'rgb(14, 123, 108)',
                  width: '75px',
                  height: '24px',
                  borderRadius: '2px',
                  margin: '0px 3px'
                }}>
                  MongoDB
                </p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 128, 29)", width: "50px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Flask</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(17, 17, 163)", width: "75px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Bootstrap</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(154, 81, 81)", width: "90px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>RESTful API</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 29, 85)", width: "70px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Streamlit</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(9, 168, 49)", width: "100px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>React Router</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(29, 114, 164)", width: "40px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>MUI</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(105, 29, 164)", width: "80px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>ReactFlow</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(105, 58, 71)", width: "85px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Context API</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(35, 186, 21)", width: "40px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>AWS</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(61, 97, 106)", width: "70px", height: "24px", borderRadius: "2px", margin: "0px 3px", marginBottom: "20px" }}>GHPages</p>
              </div>
              <div className="langs-list">
                <p style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>AI/ML: </p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(40, 70, 130)", width: "65px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>PyTorch</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 128, 29)", width: "82px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>OpenAI API</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(29, 153, 164)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Llama3</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(60, 80, 80)", width: "67px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>LMStudio</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(90, 134, 8)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Phidata</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(165, 30, 180)", width: "75px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>LangChain</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(163, 153, 22)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>FAISS</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(206, 79, 59)", width: "80px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>TensorFlow</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(108, 54, 134)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>BERT</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(121, 130, 231)", width: "45px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Scipy</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(154, 81, 81)", width: "75px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>MatPlotLib</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(132, 91, 42)", width: "90px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>SciKit-Learn</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(90, 8, 134)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Numpy</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(8, 54, 134)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Pandas</p>
              </div>
              <div className="langs-list">
                <p style={{ color: "white", fontSize: "20px", fontWeight: "bold", marginRight: "10px" }}>Quant: </p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(90, 134, 8)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Alpaca</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(90, 8, 134)", width: "60px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Lumibot</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(206, 79, 59)", width: "58px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>finBERT</p>
              </div>
              <div className="line">
              </div>
            </div>
          </div>
        </div>

      </section >

      {/* Projects */}
      < section id="projects" className="section-padding" data-aos="fade-up" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="setion-title text-center">
                <h1>Personal Projects</h1>
                <p>"I prefer to learn by doing. It's quicker. There's less talk, less explanation, and fewer misunderstandings." - Walt Disney</p>
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="row text-center">
          <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>ML Trading Bot</h5>
                  <p>Fully automatated algorithmic trading bot powered by ML with sentiment analysis</p>
                  <div className="langs">
                    <p className="python">Python</p>
                    <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(40, 70, 130)", width: "65px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>PyTorch</p>
                    <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(190, 134, 108)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Alpaca</p>
                  </div>
                  <span className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </span>
                </div>
              </div>} modal nested
            >
              {close => (
                <div>
                  <div className="container" style={{ flexShrink: 2 }}>
                    <div className="row text-center" style={{ flexShrink: 5 }}>
                      <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => { close() }}><i class="ri-arrow-left-s-line"></i>Back</button>
                      <div className="col-12">
                        <div className="setion-title text-center">
                          <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>ML Trading Bot</h1>
                          <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                            <p class="python">Python</p>
                            <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(40, 70, 130)", width: "65px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>PyTorch</p>
                            <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(190, 134, 108)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Alpaca</p>
                            <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(90, 8, 134)", width: "60px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Lumibot</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(206, 79, 59)", width: "58px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>finBERT</p>
                <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(154, 81, 81)", width: "90px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>RESTful API</p>
                          </div>
                          <div className="line"></div>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Automated algorithmic trading bot, using ML and sentiment analysis to analyze news articles and make trades
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Uses PyTorch to train Hugging Face sentiment analysis model with finBERT
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Alpaca API from Lumibot as a trading and brokerage platform
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • RESTful API from Alpaca to manage and make trades
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Backtracking tested on SPY index from Jan 2020 to Dec 2023 with 36.24% anual return, 234% total return, and 0.72 Sharpe Ratio
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • ML model integratable with any trading strategy
                          </p>
                          <div style={{ display: "flex", marginTop: "5%" }}>
                            <h4 style={{ marginRight: '10px' }}><i class="ri-line-chart-line"></i></h4>
                            <h4 style={{ marginRight: '15px' }}>View Tearsheet: </h4>
                            <a href="tearsheet.pdf" data-fancybox data-type="pdf" className="email" target="_blank" rel="noopener noreferrer">tearsheet.pdf</a>
                          </div>
                          <div style={{ display: "flex", marginTop: "5%" }}>
                            <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                            <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                            <a href="https://github.com/aved2/ML-Trading-Bot" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/ML-Trading-Bot</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>AI Equity Research Tool</h5>
                  <p>GPT powered chat interface that curates custom data to provide an efficient tool for investment opportunity analysis</p>
                  <div className="langs">
                    <p className="python">Python</p>
                    <p className="jupyter">Jupyter Notebook</p>
                  </div>
                  <span className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </span>
                </div>
              </div>} modal nested
            >
              {close => (
                <div>
                  <div className="container" style={{ flexShrink: 2 }}>
                    <div className="row text-center" style={{ flexShrink: 5 }}>
                      <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => { close() }}><i class="ri-arrow-left-s-line"></i>Back</button>
                      <div className="col-12">
                        <div className="setion-title text-center">
                          <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>AI Equity Research Tool</h1>
                          <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                            <p class="python">Python</p>
                            <p class="jupyter">Jupyter Notebook</p>
                            <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 108, 89)", width: "82px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>OpenAI API</p>
                            <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 29, 85)", width: "70px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Streamlit</p>
                          </div>
                          <div className="line"></div>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • GPT powered LLM Chat Bot on custom data to make investment opportunity analysis more efficient
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Allows users to input news articles, company reports, and other data, then uses the given data to answer user input questions
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Text embedding with OpenAI API and Vector Database managed with Facebook AI Similarity Search (FAISS)
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • Recursive text splitting to limit token size and manage API costs
                          </p>
                          <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                            • UI built and deployed with Streamlit
                          </p>
                          <div style={{ display: "flex", marginTop: "5%" }}>
                            <h4 style={{ marginRight: '10px' }}><i class="ri-cursor-line"></i></h4>
                            <h4 style={{ marginRight: '15px' }}>Website Link: </h4>
                            <a href="https://aditya-ved-ai-equity-research-tool.streamlit.app/" target="_blank" rel="noopener noreferrer" className="email">aditya-ved-ai-equity-research-tool.streamlit.app/</a>
                          </div>
                          <div style={{ display: "flex", marginTop: "5%" }}>
                            <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                            <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                            <a href="https://github.com/aved2/AI-Equity-Research-Tool" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/AI-Equity-Research-Tool</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>SortMe</h5>
                  <p>Data sorting algorithm visualizer with animated side by side time complexity comparisons</p>
                  <div className="langs">
                    <p className="React">React</p>
                    <p className="JavaScript">JavaScript</p>
                    <p className="HTML">HTML/CSS</p>
                    <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(35, 186, 21)", width: "40px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>AWS</p>
                  </div>
                  <span className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </span>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>SortMe</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="React">React</p>
                        <p className="JavaScript">JavaScript</p>
                        <p className="HTML">HTML/CSS</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(35, 186, 21)", width: "40px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>AWS</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Front-end ReactJS web application with a fully functioning DOM-based UI, complete with
                        HTML/CSS Styling, Interactive UI Components, and Routing
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • SortMe visually compares the efficiency of common Data Sorting Algorithms with live side by side CSS animated
                        visuals
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Designed as a learning tool for new programmers, displaying the efficiency and sorting techniques of different algorithms in real time
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Deployed with AWS S3
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i class="ri-cursor-line"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Website Link: </h4>
                        <a href="http://adityaved-sortme.s3-website-us-west-1.amazonaws.com/" target="_blank" rel="noopener noreferrer" className="email">adityaved-sortme.s3-website-us-west-1.amazonaws.com/</a>
                      </div>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/SortMe" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/SortMe</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>AI Web Search Assistant</h5>
                  <p>Generative AI assisted search engine powered by DuckDuckGo and OpenAI GPT-4o</p>
                  <div className="langs">
                    <p className="python">Python</p>
                  </div>
                  <span className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </span>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>AI Search Assistant</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="python">Python</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 128, 29)", width: "82px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>OpenAI API</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(90, 134, 8)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Phidata</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(40, 80, 70)", width: "90px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>DuckDuckGo</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 29, 85)", width: "70px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Streamlit</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Generative AI assisted search engine powered by DuckDuckGo and OpenAI GPT-4o
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Leveraged Phidata Assistants to create AI assistant that generates search results based on user input and provides a summary of the top search results
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • UI built and deployed with Streamlit
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Sample query: "What are the odds for the next SF 49ers game, why should I bet on the 49ers?"
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i class="ri-cursor-line"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Website Link: </h4>
                        <a href="https://aditya-ved-ai-search-assistant.streamlit.app/" target="_blank" rel="noopener noreferrer" className="email">aditya-ved-ai-search-assistant.streamlit.app/</a>
                      </div>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/ai-search-assistant" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/ai-search-assistant</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>Path Planner</h5>
                  <p>Generates an image to represent a topological map from a given set of elevation datapoints, then draws the most efficient path through the terrain.</p>
                  <div className="langs">
                    <p className="c">C++</p>
                  </div>
                  <a href="#" className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>Path Planner</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="c">C++</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Creates a ppm image of a topological map from a given set of elevation data points, then draws all possible paths through the terrain, highlighting the most efficient path.
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Input elevation dataset formatted as per NOAA (National Oceanic and Atmospheric Administration) standards.
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Implements a greedy algorithm by making locally optimal choices at each step with to find the global optimum.
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Sample outputs below (Green line indicates most efficient path, Red lines indicate other possible paths):
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/Path-Planner" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/Path-Planner</a>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <img src="../images/pp1.png" alt="Path Planner" style={{ height: "320px", width: "320px", margin: "20px" }} />
                        <img src="../images/pp2.png" alt="Path Planner" style={{ height: "320px", width: "320px", margin: "20px" }} />
                        <img src="../images/pp3.png" alt="Path Planner" style={{ height: "320px", width: "320px", margin: "20px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>Content Aware Image Resizing</h5>
                  <p>Resizes an image using a content aware technique called "seam carving", preserving an image's most important parts to resize it without distortion.</p>
                  <div className="langs">
                    <p className="c">C++</p>
                  </div>
                  <a href="#" className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>Content Aware Image Resizing</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="c">C++</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Resizes an image using a content aware technique called "seam carving".
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Rather than traditional image cropping, seam carving analyzes images for vertical and/or horizontal "seams", i.e paths of pixels that do not hold te main content of the image, and deletes those.
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • This results in a resized image that preserves the image's main content.
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Sample resizing below:
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/Content-Aware-Image-Resizing" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/Content-Aware-Image-Resizing</a>
                      </div>
                      <video autoPlay loop muted playsInline style={{ height: "320px", width: "320px", marginTop: "20px" }} src="../images/resize.mov">

                      </video>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>Coin Stats</h5>
                  <p>Portfolio styled cryptocurrency tracking web app using CoinGecko API and Google Firebase Auth + Backend</p>
                  <div className="langs">
                    <p className="React">React</p>
                    <p className="JavaScript">JavaScript</p>
                    <p className="HTML">HTML/CSS</p>
                  </div>
                  <a href="#" className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>Coin Stats</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="React">React</p>
                        <p className="JavaScript">JavaScript</p>
                        <p className="HTML">HTML/CSS</p>
                        <p style={{
                          fontSize: '14px',
                          color: 'white',
                          backgroundColor: 'rgb(153, 81, 18)',
                          width: '120px',
                          height: '24px',
                          borderRadius: '2px',
                          margin: '0px 3px',
                          marginBottom: '20px'
                        }}>
                          Google Firebase
                        </p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(29, 114, 164)", width: "40px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>MUI</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(105, 58, 71)", width: "85px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Context API</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(61, 97, 106)", width: "70px", height: "24px", borderRadius: "2px", margin: "0px 3px", marginBottom: "20px" }}>GHPages</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Full Stack ReactJS web application
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Utilized CoinGecko API to build Cryptocurrency tracking application with functionality for 11 different currencies
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Login authentication, Google sign-in, and user management created with Google Firebase backend
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Live, continually updating data visualized using Chart JS graphs
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Push notification capability, UI compatible with phone and tablet as well
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Deployed with Github Pages
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i class="ri-cursor-line"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Website Link: </h4>
                        <a href="https://coin-stats-4ad40.web.app/#/" target="_blank" rel="noopener noreferrer" className="email">https://coin-stats-4ad40.web.app/#/</a>
                      </div>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/Coin-Stats" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/Coin-Stats</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>ColorTaiko!</h5>
                  <p>Combinatorial game with a visual approach to proving Kaplansky's Zero Divisor Conjecture. Research project with Prof. Igor Mineyev</p>
                  <div className="langs">
                    <p className="React">React</p>
                    <p className="JavaScript">JavaScript</p>
                    <p className="HTML">HTML/CSS</p>
                  </div>
                  <a href="#" className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>ColorTaiko!</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="React">React</p>
                        <p style={{
                          fontSize: '14px',
                          color: 'white',
                          backgroundColor: 'rgb(80, 120, 120)',
                          width: '90px',
                          height: '24px',
                          borderRadius: '2px',
                          margin: '0px 3px'
                        }}>
                          React Native
                        </p>
                        <p className="JavaScript">JavaScript</p>
                        <p className="HTML">HTML/CSS</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(105, 29, 164)", width: "80px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>ReactFlow</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Front end web application with custom ReactFlow graph components
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Mobile version packaged into native app with Apache Cordova
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • This project is in the pre-release stage, and is a crowd sourcing method to finding valid counter examples to Kaplansky's conjecture
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Research project alongside Professor Igor Mineyev, check out my LinkedIn post at the link below to learn more!
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px', color: "var(--c-brand)" }}><i class="ri-arrow-right-circle-fill"></i></h4>
                        <h4 style={{ marginRight: '15px', color: "var(--c-brand)" }}>More Info: </h4>
                        <a href="https://www.linkedin.com/posts/aditya-ved_reflecting-upon-my-semester-as-a-researcher-activity-7194373059896643584-CpNL?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="email">linkedin.com/posts/aditya-ved_reflecting-upon-my-semester-as-a-researcher</a>
                      </div>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code (Web App): </h4>
                        <a href="https://github.com/aved2/ColorTaiko" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/ColorTaiko</a>
                      </div>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code (Mobile App): </h4>
                        <a href="https://github.com/aved2/ColorTaikoCordova" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/ColorTaikoCordova</a>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>Local ChatBot</h5>
                  <p>Local chatbot similar to ChatGPT using Meta's Llama3 locally hosted with LM Studio so you can chat internet-free.</p>
                  <div className="langs">
                    <p className="python">Python</p>
                  </div>
                  <a href="#" className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>Local Chatbot</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="python">Python</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(29, 153, 164)", width: "56px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Llama3</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(60, 80, 80)", width: "67px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>LMStudio</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(164, 29, 85)", width: "70px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Streamlit</p>
                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • LMStudio and Llama3 to create a local chatbot similar to ChatGPT
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Capability to converse with the chatbot without internet connection
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • UI built with Streamlit
                      </p>
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/Local-ChatBot" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/Local-ChatBot</a>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
            <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
              <div className="col-lg-3 col-sm-6">
                <div className="projects py-5 px-4 border">
                  <h5>Portfolio Website</h5>
                  <p>Personal portfolio website with dynamic UI/UX design and responsive layout for all devices.</p>
                  <div className="langs">
                    <p className="React">React</p>
                    <p className="JavaScript">JavaScript</p>
                    <p className="HTML">HTML/CSS</p>
                  </div>
                  <a href="#" className="custom-link">
                    <span className="rm">Read more</span>
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                </div>
              </div>} modal nested
            >
              {close => (<div className="container">
                <div className="row text-center">
                  <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                  <div className="col-12">
                    <div className="setion-title text-center">
                      <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>Portfolio Website</h1>
                      <div style={{ display: "flex", justifyContent: "center", flexShrink: "2" }}>
                        <p className="React">React</p>
                        <p className="JavaScript">JavaScript</p>
                        <p className="HTML">HTML/CSS</p>
                        <p style={{ fontSize: "14px", color: "white", backgroundColor: "rgb(17, 17, 163)", width: "75px", height: "24px", borderRadius: "2px", margin: "0px 3px" }}>Bootstrap</p>

                      </div>
                      <div className="line"></div>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Personal portfolio website, fully responsive UI for all devices
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Bootstrap for responsive design, React for dynamic UI/UX
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • NodeJS???
                      </p>
                      <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                        • Deployed with AWS???
                      </p>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i class="ri-cursor-line"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Website Link: </h4>
                        <a href="https://coin-stats-4ad40.web.app/#/" target="_blank" rel="noopener noreferrer" className="email">https://coin-stats-4ad40.web.app/#/</a>
                      </div>
                      <div style={{ display: "flex", marginTop: "5%" }}>
                        <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                        <h4 style={{ marginRight: '15px' }}>Source Code: </h4>
                        <a href="https://github.com/aved2/Coin-Stats" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2/Coin-Stats</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
            </Popup>
          </div>
        </div>
      </section >

      {/* Experience */}
      < section id="experience" className="section-padding" data-aos="fade-up" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="setion-title text-center">
                <h1 style={{ color: 'var(--c-brand)' }}>Experience</h1>
                <div className="line"></div>
              </div>
              <div className="langs-list" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                <img className="exp-logo" src="./images/IGL.png" alt="Illinois Mathematics Lab" />
                <div>
                  <h5 className="exp-name">Software Engineer - Undergraduate Research</h5>
                  <h6 className="exp-title">Illinois Mathematics Lab</h6>
                  <div>
                    <p className="exp-date">December 2023 - Present</p>
                    <p className="exp-text">• Research Assistant to Professor Igor Mineyev, researching innovative solutions to popularize and disprove Kaplansky's Zero Divisor and Unit Conjecture, popular topics in modern Ring Theory and Topology.</p>
                    <p className="exp-text">• Used ReactJS with custom ReactFlow components to develop a web-based game “Color Taiko”, Apache Cordova to package directories into a mobile compatible version</p>
                    <p className="exp-text">• “ColorTaiko!” is a crowd sourcing method to finding valid counter examples to Kaplansky's conjecture</p>
                  </div>
                  <Popup contentStyle={{ width: "95vw", borderRadius: "10px", paddingBottom: "20px", marginTop: "90px", maxHeight: "90vh", overflowY: "auto" }} trigger={
                    <span className="custom-link" style={{ justifyContent: 'left' }}>
                      <span className="rm" style={{ color: 'white', fontSize: '18px' }}>Read more</span>
                      <i className="ri-arrow-right-s-line"></i>
                    </span>}
                    modal nested >
                    {close => (<div className="container">
                      <div className="row text-center">
                        <button className="btn btn-brand" style={{ width: "110px", display: "flex", marginTop: "20px", justifyContent: "space-between" }} onClick={() => close()}><i class="ri-arrow-left-s-line"></i>Back</button>
                        <div className="col-12">
                          <div className="setion-title text-center">
                            <h1 style={{ color: 'var(--c-dark)', padding: "10px" }}>ColorTaiko</h1>
                            <div className="line"></div>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              This past semester, I had the pleasure of working as a research assistant alongside Professor Igor Mineyev at Illinois Mathematics Lab (Formerly Illinois Geometry Lab), expanding my knowledge in Topology, Graph Theory, and Geometry while bridging Mathematics and Technology. As a great educational and professional experience, here is a summary of my work and contributions:
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              ▶ Background:
                              Our work focused specifically upon the the zero divisor and unit conjecture of Kaplansky's conjecture, two significant hypotheses in the field of ring theory. In a nutshell, the zero divisor conjecture states that if G is a torsion free group and K is a ring, the group ring K[G] has no zero divisors. For deeper explanation and mathematical proof you can refer to Professor Mineyev's paper linked below.
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              ▶ Our Mission:
                              Using technology to create innovative solutions to popularize and provide counterexamples for a longstanding mathematical conjecture known as Kaplansky's zero divisor conjecture.
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              ▶ Our Work:
                              To provide a counterexample for this long standing conjecture, our solution was creating "ColorTaiko!" a simple online game with the vision of using crowdsourcing to provide a possible solution.
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              "ColorTaiko!" is a purely combanatorial way of providing counterexamples (instead of using algebraic process). Users join vertices of a bipartite "taiko" (product graph, pictured below) to create edges and cells, that are given certain colors based upon equivalence class conditions of a torsion free group ring. Ultimately, if a user creates these classes under the conditions provided from one node to every other node, a counterexample has been provided.
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              The preliminary stage of our project included a web version of the game. The game was developed using ReactJS and ReactFlow, an open source library we used to create the custom bipartite graph component. We transcribed the mathematical conditions of the conjecture (p. 24 of the paper) into logical conditions that we inserted into the gameplay.
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              The next stage of our project was a mobile app. Using Apache Cordova to package our ReactJS directories into a compatible mobile version (as the ReactFlow custom component is not directly native compatible). The mobile app also features a further developed UI/UX, and educational features.
                            </p>
                            <p style={{ color: 'var(--c-dark)', fontSize: '20px', textAlign: "left" }}>
                              As the mobile app is still in the pre-release stage, further steps include head to head gameplay capability, where users can compare their progress to other players around the world, and obviously public release and deployment
                            </p>
                            <div style={{ display: "flex", marginTop: "5%" }}>
                              <h4 style={{ marginRight: '10px' }}><i class="ri-cursor-line"></i></h4>
                              <h4 style={{ marginRight: '15px' }}>Professor Mineyev's Paper: </h4>
                              <a href="https://mineyev.web.illinois.edu/art/top-geom-uzd-origami.pdf" target="_blank" rel="noopener noreferrer" className="email">mineyev.web.illinois.edu/art/top-geom-uzd-origami.pdf</a>
                            </div>
                            <div style={{ display: "flex", flexShrink: "2", justifyContent: 'center' }}>
                              <img src="../images/iml.jpeg" alt="Path Planner" style={{ margin: "20px" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>)}
                  </Popup>
                </div>
              </div>
              <div className="langs-list" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                <img className="exp-logo" src="./images/IRIS.png" alt="Illinois Mathematics Lab" />
                <div>
                  <h5 className="exp-name" style={{ marginTop: '10px' }}>Autonomous Navigation Engineer</h5>
                  <h6 className="exp-title">Illinois Robotics in Space</h6>
                  <div>
                    <p className="exp-date">August 2023 - February 2024</p>
                    <p className="exp-text">• Integrated ROS2, RTAB-Maps, Nav2, Gazebo, Python to build an autonomous navigation system for a lunar rover</p>
                    <p className="exp-text">• Navigation algorithm based on A-star, fine-tuned to allow the rover to perform tasks such as digging and carrying material</p>
                    <p className="exp-text">• Completed lunar rover to be submitted to the NASA Lunabotics competition at the Kennedy Space Center, FL</p>
                    <p className="exp-text">• Participated in public outreach, presenting at local schools, an effort that won the 3rd Place Award for Public Outreach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contact */}
      < section id="contact" className="section-padding" data-aos="fade-up" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="setion-title text-center">
                <h1 style={{ color: 'var(--c-dark)' }}>Contact</h1>
                <div className="line"></div>
              </div>
              <div className="contact-list" style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <div>
                  <div className="langs-list" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                    <div className="contact-box">
                      <h4 style={{ marginRight: '10px' }}><i className="ri-mail-line"></i></h4>
                      <h4 style={{ marginRight: '15px' }}>Email: </h4>
                      <a href="mailto:adityaved2@gmail.com?body=" className="email">adityaved2@gmail.com</a>
                    </div>
                  </div>
                  <div className="langs-list" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                    <div className="contact-box">
                      <h4 style={{ marginRight: '10px' }}><i className="ri-phone-line"></i></h4>
                      <h4 style={{ marginRight: '15px' }}>Phone: </h4>
                      <h5>(925)-856-0000</h5>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="langs-list" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                    <div className="contact-linkd">
                      <h4 style={{ marginRight: '10px' }}><i className="ri-linkedin-box-line"></i></h4>
                      <h4 style={{ marginRight: '15px' }}>LinkedIn: </h4>
                      <a href="https://linkedin.com/in/aditya-ved/" target="_blank" rel="noopener noreferrer" className="email">linkedin.com/in/aditya-ved</a>
                    </div>
                  </div>
                  <div className="langs-list" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
                    <div className="contact-git">
                      <h4 style={{ marginRight: '10px' }}><i className="ri-github-fill"></i></h4>
                      <h4 style={{ marginRight: '15px' }}>Github: </h4>
                      <a href="https://github.com/aved2" target="_blank" rel="noopener noreferrer" className="email">github.com/aved2</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form onSubmit={sendEmail} className="row g-3" style={{ marginTop: '20px' }}>
                    <div className="form-group col-md-4">
                      <input type="text" className="form-control" placeholder="Name" name="name" required />
                    </div>
                    <div className="form-group col-md-4">
                      <input type="email" className="form-control" placeholder="Email Address" name="email" required />
                    </div>
                    <div className="form-group col-md-4">
                      <input type="text" className="form-control" placeholder="Phone Number" name="phone" />
                    </div>
                    <div className="form-group col-md-12">
                      <input type="text" className="form-control" placeholder="Enter Subject" name="subject" required />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea rows="4" className="form-control" placeholder="Message" name="message" required></textarea>
                    </div>
                    <div className="form-group text-center col-md-12">
                      <button type="submit" className="btn btn-brand">Send Message</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div>
  );
}

export default App;



