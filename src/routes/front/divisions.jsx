import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Division() {
  const [chosen, setChosen] = useState("pubg");

  useEffect(() => {
    document.body.classList.remove('bg-pubg', 'bg-ml', 'bg-ba');
    document.body.classList.add(`bg-${chosen}`);
  });

  const getActive = (val) => val === chosen ? 'active' : '';

  return (
    <>
      <div className="page-title">
        Our<span>Division</span>
      </div>
      <div className="division-container">
        <div className="row d-flex align-items-center">
          <div className="col-md-3">
            <div className="division-menu">
              <ul>
                <li><button onClick={() => setChosen("pubg")} className={`btn-pubg ${getActive("pubg")}`}><img src="/assets/pubg-icon.png" /></button></li>
                <li><button onClick={() => setChosen("ml")} className={`btn-ml ${getActive('ml')}`}><img src="/assets/ml-icon.png" /></button></li>
                <li><button onClick={() => setChosen("ba")} className={`btn-ba ${getActive('ba')}`}><i className="bi bi-person-fill"></i></button></li>
              </ul>
            </div>
          </div>
          <div className="col-md-9">
            <div className="division-info">
              <div className="division-info-title">
                INTRODUCTION
              </div>
              <div className="division-info-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima neque, consectetur, tempora sint praesentium impedit harum ad necessitatibus placeat quasi ipsam dolorum nesciunt voluptates eum in quaerat voluptatem aut earum.
                <div className="division-info-action">
                  <Link to={'#'} className="aura-btn aura-btn-tint"><i className="bi-arrow-right"></i> VIEW MORE</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}