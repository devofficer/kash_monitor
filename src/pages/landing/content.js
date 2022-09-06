import React from "react";

function Content() {
  return (
    <div>
      <div className="container content">
        <div className="row">
          <div className="col-sm-6 talk">
            <h1>Start</h1>
            <h1>Your Business</h1>
            <h1>with KashBot</h1>
            <br />
            <h6 className="bold-four">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              nesciunt molestiae ex inventore quibusdam id architecto quos
              cupiditate nobis magnam eum voluptatem quas quis obcaecati dolor
              vero veritatis similique alias.
            </h6>
            <br />
            <h6>
              <a
                className="btn btn-dark start start-two"
                href={process.env.REACT_APP_DISCORD_AUTH_URL}
              >
                Discord Login
              </a>
            </h6>
          </div>
          <div className="col-sm-6 showcase-img">
            {/* <div className="circle"></div> */}
          </div>
        </div>
      </div>

      <section className="features-icons bg-light text-center det-ails">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-screen-desktop m-auto text-primary icon-ails"></i>
                </div>
                <h5>Lorem Tag</h5>
                <p className="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-layers m-auto text-primary icon-ails"></i>
                </div>
                <h5>Morem Tag</h5>
                <p className="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex  icon-bra-ails">
                  <i className="icon-check m-auto text-primary icon-ails"></i>
                </div>
                <h5>Oorem Tag</h5>
                <p className="lead mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
