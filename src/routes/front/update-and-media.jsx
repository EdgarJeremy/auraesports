import { useSearchParams } from "react-router-dom";

export default function UpdateMedias() {
  document.body.classList.remove('bg-pubg');
  document.body.classList.remove('bg-ml');
  document.body.classList.remove('bg-ba');

  const [search, setSearchParams] = useSearchParams({
    type: "gallery",
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
        Updates&<span>Medias</span>
      </div>
      <div className="page-container">
        <div className="page-nav">
          <a onClick={() => changeMenu("type", "videos")} className={`${getActiveType("videos")}`}><i className="bi bi-play-circle-fill"></i>&nbsp;&nbsp;VIDEOS</a>{' '}<span>|</span>{' '}
          <a onClick={() => changeMenu("type", "gallery")} className={`${getActiveType("gallery")}`}><i className="bi bi-image-fill"></i>&nbsp;&nbsp;GALLERY</a>{' '}<span>|</span>{' '}
          <a onClick={() => changeMenu("type", "instagram")} className={`${getActiveType("instagram")}`}><i className="bi bi-instagram"></i>&nbsp;&nbsp;INSTAGRAM</a>

          <div className="page-categories">
            <button onClick={() => changeMenu("category", "all")} className={`aura-btn ${getActiveCategory('all')}`}>All Categories</button>
            <button onClick={() => changeMenu("category", "pubg")} className={`aura-btn ${getActiveCategory('pubg')}`}>PUBG Mobile</button>
            <button onClick={() => changeMenu("category", "ml")} className={`aura-btn ${getActiveCategory('ml')}`}>Mobile Legends</button>
          </div>
        </div>

        <div className="gallery-list">
          <div className="row g-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="col-md-2">
                <div className="pict-container">
                  <img src="https://via.placeholder.com/200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}