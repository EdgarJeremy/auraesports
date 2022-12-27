import { useEffect, useState } from "react";
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
        All <span>Schedules</span>
      </div>
      <div className="schedule-container">
        <div className="schedule-nav">
          <a onClick={() => changeMenu("type", "result")} className={`${getActiveType("result")}`}>RESULT</a>{' '}<span>|</span>{' '}
          <a onClick={() => changeMenu("type", "upcoming")} className={`${getActiveType("upcoming")}`}>UPCOMING</a>
          <div className="schedule-categories">
            <button onClick={() => changeMenu("category", "all")} className={`aura-btn ${getActiveCategory('all')}`}>All Categories</button>
            <button onClick={() => changeMenu("category", "pubg")} className={`aura-btn ${getActiveCategory('pubg')}`}>PUBG Mobile</button>
            <button onClick={() => changeMenu("category", "ml")} className={`aura-btn ${getActiveCategory('ml')}`}>Mobile Legends</button>
          </div>
        </div>
      </div>
    </>
  )
}