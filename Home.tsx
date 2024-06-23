import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/Home.css";

function Home() {
    return (
        <div>
            {/* First Section */}
            <section className="first-section">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col">
                            <img src="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Dog" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className="second-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-custom">
                                <img src="https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Jony's Image" />
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Jony</h5>
                                    <p className="card-text fs-4">Jony  dogs and enjoys walks with them. He believes in the joy of companionship that dogs bring.</p>
                                    <Link to="/" className="btn btn-primary fs-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-custom">
                                <img src="https://images.pexels.com/photos/351406/pexels-photo-351406.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Max's Image" />
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Max</h5>
                                    <p className="card-text fs-4">Max is passionate about fostering dogs and helping them find loving homes.</p>
                                    <Link to="/" className="btn btn-primary fs-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-custom">
                                <img src="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Rony's Image" />
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Rony</h5>
                                    <p className="card-text fs-4">Rony's dogs knows no bounds. He believes that every dog deserves a loving home and  tirelessly towards that goal.</p>
                                    <Link to="/" className="btn btn-primary fs-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-custom">
                                <img src="https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg" className="card-img-top" alt="Dog's Image" />
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Buddy</h5>
                                    <p className="card-text fs-4">Buddy is captivated by the gentle and loving nature of dogs. He believes in the power of their presence to bring comfort and joy.</p>
                                    <Link to="/" className="btn btn-primary fs-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-custom">
                                <img src="https://images.pexels.com/photos/776373/pexels-photo-776373.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Dog's Image" />
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Rocky</h5>
                                    <p className="card-text fs-4">Rocky finds inspiration  the boundless energy of dogs. He believes in embracing life with the same zest and spirit.</p>
                                    <Link to="/" className="btn btn-primary fs-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="card card-custom">
                                <img src="https://images.pexels.com/photos/169524/pexels-photo-169524.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="Dog's Image" />
                                <div className="card-body">
                                    <h5 className="card-title fs-3">Bailey</h5>
                                    <p className="card-text fs-4">Bailey is drawn to the unwavering loyalty and devotion of dogs.</p>
                                    <Link to="/" className="btn btn-primary fs-3">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer" style={{ backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <div className="container text-center">
                    <p className="fs-4">&copy; 2024 Pet Adoption. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
