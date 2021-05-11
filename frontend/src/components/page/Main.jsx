
import { ModalTypes } from '../modal/modalType';
import './mainpage.css';
import './main.css';

export const Main = ({showModal}) => {
  
    return (
      <div className="main-page-container">
        
        <div id="page-wrapper">
          {/* <!-- Header --> */}
          <section id="header">
            <div className="container">
              {/* <!-- Logo --> */}
              <h1 id="logo">
                <div>Closet X</div>
              </h1>
              <p>
                An interactive and responsive online closet. Create and share
                outfits with your friends.
              </p>

              {/* <!-- Nav --> */}
              <nav id="nav">
                <ul>
                  <li>
                    <div>
                      <button onClick={()=>showModal(ModalTypes.LOG_IN_MODAL)}>Login</button>
                    </div>
                  </li>
                  <li >
                    <div>
                      <button onClick={()=>showModal(ModalTypes.SIGN_UP_MODAL)}>Signup</button>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </section>

          {/* <!-- Banner --> */}
          <section id="banner">
            <div className="container">
              <p>
                "Gosh, I <strong>never</strong> know what to wear.
                <br />
                Oh wait, I can just go on <strong>Closet X</strong>!"
              </p>
            </div>
          </section>

          {/* <!-- Features --> */}
          <section id="features">
            <div className="container">
              <header>
                <h2>
                  Behold! This is <strong>Closet X</strong>!
                </h2>
              </header>
              <div className="row aln-center">
                <div className="col-4 col-6-medium col-12-small">
                  {/* <!-- Feature --> */}
                  <section>
                    <div className="image featured">
                      <img src="images/splash-1.jpg" alt="" />
                    </div>
                    <header>
                      <h3>Okay, so what is this?</h3>
                    </header>
                    <p>
                      This is <strong>Closet X</strong>, a free, fully
                      responsive site catered to your digital closet needs.
                    </p>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  {/* <!-- Feature --> */}
                  <section>
                    <div className="image featured">
                      <img src="images/splash-2.jpg" alt="" />
                    </div>
                    <header>
                      <h3>Nice! What's the point?</h3>
                    </header>
                    <p>
                      Create and share outfits from your closet with your
                      friends! If you run out of outfit ideas, you can have your
                      friends or strangers suggest outfits for you based on your
                      closet!
                    </p>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  {/* <!-- Feature --> */}
                  <section>
                    <div className="image featured">
                      <img src="images/splash-3.jpg" alt="" />
                    </div>
                    <header>
                      <h3>What's this built with?</h3>
                    </header>
                    <p>
                      <strong>Responsive Tools</strong> is a simple set of tools
                      for building responsive sites and apps. We also use
                      <strong>
                        MongoDB, Express JS, React JS, and Node JS!
                      </strong>
                    </p>
                  </section>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <div
                        onClick={()=>showModal(ModalTypes.SIGN_UP_MODAL)}
                        className="button icon solid fa-sitemap"
                      >
                        Signup Today!
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Features --> */}
          <section id="features">
            <div className="container">
              <header>
                <h2>Still not convinced?</h2>
                <h3>Here are some outfits created by our users!</h3>
              </header>
              <div className="row aln-center">
                <div className="col-4 col-6-medium col-12-small">
                  {/* <!-- Feature --> */}
                  <section>
                    <div className="image featured">
                      <img src="/images/splash-4.jpg" alt="" />
                    </div>
                    <header>
                      <h3>
                        <strong>@ILoveFendi</strong>
                      </h3>
                    </header>
                    <p>Classy New York City Look.</p>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  {/* <!-- Feature --> */}
                  <section>
                    <div className="image featured">
                      <img src="images/splash-5.jpg" alt="" />
                    </div>
                    <header>
                      <h3>
                        <strong>@SupremeRUS</strong>
                      </h3>
                    </header>
                    <p>Perfect for a day in Los Angeles.</p>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  {/* <!-- Feature --> */}
                  <section>
                    <div className="image featured">
                      <img src="images/splash-6.jpg" alt="" />
                    </div>
                    <header>
                      <h3>
                        <strong>@Pallette</strong>
                      </h3>
                    </header>
                    <p>Fun summer dress with accessories!</p>
                  </section>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <div
                        onClick={()=>showModal(ModalTypes.LOG_IN_MODAL)}
                        className="button icon solid fa-sitemap"
                      >
                        Signup Today!
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Footer --> */}
          <section id="footer">
            <div className="container">
              <header>
                <h2>
                  Questions or comments? <strong>Get in touch:</strong>
                </h2>
              </header>
              <div className="row">
                <div className="col-6 col-12-medium">
                  <section>
                    <form method="post" action="#">
                      <div className="row gtr-50">
                        <div className="col-6 col-12-small">
                          <input name="name" placeholder="Name" type="text" />
                        </div>
                        <div className="col-6 col-12-small">
                          <input name="email" placeholder="Email" type="text" />
                        </div>
                        <div className="col-12">
                          <textarea name="message" placeholder="Message" />
                        </div>
                        <div className="col-12">
                          <a
                            href="mailto: closet-x@gmail.com"
                            className="form-button-submit button icon solid fa-envelope"
                          >
                            Send Message
                          </a>
                        </div>
                      </div>
                    </form>
                  </section>
                </div>
                <div className="col-6 col-12-medium">
                  <section>
                    <p>
                      We here at Closet X are always looking for feedback. If
                      you have any suggestions on making the site better or just
                      want to say hi, leave us a message here! We are a small
                      team of 3 looking to make a change in the social media
                      fashion industry! Additionally, our LinkedIns and GitHubs
                      are below if you're looking to hire one of us.
                    </p>
                    
                  </section>
                </div>
              </div>
            </div>
            <div id="copyright" className="container">
              <ul className="links">
                <li>&copy; ClosetX. All rights reserved.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  
}


