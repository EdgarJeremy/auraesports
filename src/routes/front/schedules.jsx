import { useSearchParams } from "react-router-dom";

export default function Schedules() {
  document.body.classList.remove('bg-pubg');
  document.body.classList.remove('bg-ml');
  document.body.classList.remove('bg-ba');

  const [search, setSearchParams] = useSearchParams({
    type: "result",
    category: "all"
  });

  const getActiveType = (menu) => menu === search.get('type') ? 'active' : '';
  const getActiveCategory = (menu) => menu === search.get('category') ? 'aura-btn-tint active' : 'aura-btn-white';

  const changeMenu = (cat, menu) => {
    search.set(cat, menu);
    setSearchParams(search);
  }

  return (
    <>
      <div className="page-title">
        All<span>Schedules</span>
      </div>
      <div className="page-container">
        <div className="page-nav">
          <a onClick={() => changeMenu("type", "result")} className={`${getActiveType("result")}`}>RESULT</a>{' '}<span>|</span>{' '}
          <a onClick={() => changeMenu("type", "upcoming")} className={`${getActiveType("upcoming")}`}>UPCOMING</a>
          <div className="page-categories">
            <button onClick={() => changeMenu("category", "all")} className={`aura-btn ${getActiveCategory('all')}`}>All Categories</button>
            <button onClick={() => changeMenu("category", "pubg")} className={`aura-btn ${getActiveCategory('pubg')}`}>PUBG Mobile</button>
            <button onClick={() => changeMenu("category", "ml")} className={`aura-btn ${getActiveCategory('ml')}`}>Mobile Legends</button>
          </div>
        </div>
        <div className="schedule-list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="schedule-card">
              <div className="team">
                <img src="/assets/aura-logo.png" />
                <div className="score">3</div>
              </div>
              <div className="tour-detail">
                <div className="datetime">
                  12/12/2022 | 05:00 PM
                </div>
                <div className="title">
                  MPL Season 7
                  {/* PIALA PRESIDEN ESPORTS 2022 - PUBGM */}
                </div>
              </div>
              <div className="team">
                <img src="/assets/logo-evos.png" />
                <div className="score">2</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

