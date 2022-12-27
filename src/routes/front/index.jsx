import { Link } from 'react-router-dom';

export default function Index() {
  document.body.classList.remove('bg-pubg');
  document.body.classList.remove('bg-ml');
  document.body.classList.remove('bg-ba');

  return (
    <>
      <div className="front-tagline d-flex justify-content-center">
        <img src="/assets/aura-tagline.png" />
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="front-card">
            <div className="front-card-title d-flex justify-content-center">
              <h2><img src="/assets/instagram.svg" /> <i>@auraesports</i></h2>
            </div>
            <div className="front-card-body">
              <div className="front-feed">
                <div className="row g-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="col-md-4">
                      <div>
                        <img src="https://via.placeholder.com/150" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a target="_blank" href="https://instagram.com/auraesports" className="aura-btn aura-btn-tint"><i className="bi-arrow-right"></i> VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="front-card">
            <div className="front-card-title d-flex justify-content-center">
              <h2><img src="/assets/instagram.svg" /> <i>@auraesportsfamily</i></h2>
            </div>
            <div className="front-card-body">
              <div className="front-feed">
                <div className="row g-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="col-md-4">
                      <div>
                        <img src="https://via.placeholder.com/150" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <a target="_blank" href="https://instagram.com/auraesportsfamily" className="aura-btn aura-btn-tint"><i className="bi-arrow-right"></i> VIEW MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="front-card">
        <div className="front-card-title d-flex justify-content-center">
          <h2><img src="/assets/youtube.svg" /> <i>AuraTV</i></h2>
        </div>
        <div className="front-card-body">
          <div className="front-feed">
            <div className="row g-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="col-md-4">
                  <div>
                    <img src="https://via.placeholder.com/500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a target="_blank" href="https://youtube.com/@auratv" className="aura-btn aura-btn-tint"><i className="bi-arrow-right"></i> VIEW MORE</a>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="front-card" style={{ maxWidth: 800 }}>
          <div className="front-card-title d-flex justify-content-center">
            <h2><i>Divisions</i></h2>
          </div>
          <div className="front-card-body">
            <div className="front-feed">
              <div className="row g-2">
                <div className="col-md-6">
                  <div className="front-division-container">
                    <div className="division-overlay">
                      <img src="/assets/object.png" />
                    </div>
                    <img className="division-cover" src="/assets/ml-division.png" />
                    <div className="division-ctrl">
                      <img src="/assets/ml-icon.png" />
                      <div className="p-5">
                        <Link to={'/division'} className="aura-btn aura-btn-white"><i>VIEW MORE</i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="front-division-container">
                    <div className="division-overlay">
                      <img src="/assets/object.png" />
                    </div>
                    <img className="division-cover" src="/assets/pubg-division.png" />
                    <div className="division-ctrl">
                      <img src="/assets/pubg-icon.png" />
                      <div className="p-5">
                        <Link to={'/division'} className="aura-btn aura-btn-white"><i>VIEW MORE</i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="front-card">
        <div className="front-card-title d-flex justify-content-center">
          <h2><i>Partners</i></h2>
        </div>
        <div className="front-card-body">
          <div className="front-feed d-flex justify-content-center">
            <div className="row g-3 d-flex align-items-center">
              <div className="col-md-4">
                <div className="partners-logo">
                  <img src="/assets/BUKALAPAK.png" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="partners-logo">
                  <img src="/assets/GAGA 100.png" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="partners-logo">
                  <img src="/assets/POCO.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}