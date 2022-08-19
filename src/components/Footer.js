import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';


export default function Footer() {
    const scrollTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    return (
        <>
            <div className='backtotop' onClick={scrollTop}>Back to top</div>
            <div className='navbar-expand-lg'>
                <button className="mob-footer navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#footer" aria-controls="footer" aria-expanded="false" aria-label="Toggle navigation">
                    <span>Footer<i className="fa-solid fa-angle-down"></i></span>
                </button>
                <footer id="footer" className='collapse navbar-collapse'>
                    {/* <div className="footer-newsletter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            </div>
                            <div className="col-lg-6">
                                <form action="" method=""> <input type="email" name="email" placeholder="Your Email Address" /><input type="submit" value="Subscribe" className='bg-primary' /> </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                    <div className="footer-top">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6 col-lg col-md-6 footer-links">
                                    <h4>Heading</h4>
                                    <ul>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg col-md-6 footer-links">
                                    <h4>Heading</h4>
                                    <ul>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg col-md-6 footer-links">
                                    <h4>Heading</h4>
                                    <ul>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg col-md-6 footer-links">
                                    <h4>Heading</h4>
                                    <ul>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                        <li> <Link to="/">Menu Item</Link></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-2 col-md-6 footer-info appdownload">
                                    <h4>Topmaybe APP DOWNLOAD</h4>
                                    <Link to="/"><img src='/images/googlePlay.png' alt='download app' /></Link>
                                    <Link to="/"><img src='/images/appleStore.png' alt='download app' /></Link>
                                    <div className="social-links mt-3">
                                        <h4>Follow Us</h4>
                                        <Link to="/" className="twitter"><i className="fa-brands fa-twitter"></i></Link>
                                        <Link to="/" className="facebook"><i className="fa-brands fa-facebook-f"></i></Link>
                                        <Link to="/" className="instagram"><i className="fa-brands fa-instagram"></i></Link>
                                        <Link to="/" className="linkedin"><i className="fa-brands fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3 col-md-6 footer-contact">
                                    <h4>Contact Us</h4>
                                    <p>C/O gobinda dutta,<br />
                                        Baghajatin colony<br />
                                        WN-5 Dhupguri Jalpaiguri<br />
                                        Jalpaiguri WB 735210 IN<br /> <strong>Phone:</strong> +1 5589 55488 55<br /> <strong>Email:</strong> topmaybe1@gmail.com<br /> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid footer-bottom'>
                        <div className="row align-items-center">
                            <div className='col'><Link to="/sell-on-topmaybe"><i className="fa-solid fa-bag-shopping"></i> <strong> Become a Seller</strong></Link></div>
                            <div className='col'><i className="fa-solid fa-rectangle-ad"></i> Advertise</div>
                            <div className='col'><i className="fa-solid fa-gift"></i> Gift Cards</div>
                            <div className='col'><i className="fa-solid fa-circle-question"></i> Help Center</div>
                            <div className="copyright col-md-3"> © {new Date().getFullYear()} <strong><span>Topmaybe</span></strong>. All Rights Reserved </div>
                            <div className='col-md-3'><img src='/images/payment-method.svg' alt='payment' /></div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
