import { useSearchParams, Link, useParams } from "react-router-dom";
import { Switch, Case, Default } from 'react-if';

export default function Community() {
  document.body.classList.remove('bg-pubg');
  document.body.classList.remove('bg-ml');
  document.body.classList.remove('bg-ba');

  const params = useParams();

  return (
    <>
      <div className="page-title">
        Aura<span>Community</span>
      </div>
      <div className="page-container">
        <Switch>
          <Case condition={params.menu === 'teams'}><Teams /></Case>
          <Case condition={params.menu === 'events'}><Events /></Case>
          <Case condition={params.menu === 'activities'}><Activities /></Case>
          <Default>
            <div className="row g-3">
              <div className="col-md-3">
                <div className="community-image">
                  <img src="https://via.placeholder.com/200" />
                </div>
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="community-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque esse asperiores similique, illo veniam a id cupiditate soluta iste, nobis magni iure quod ipsam amet assumenda molestiae ad quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis deleniti nulla magni voluptate. Est deleniti voluptas, doloribus velit libero pariatur tenetur dolore amet adipisci blanditiis, architecto neque facilis saepe.
                  <div className="community-action">
                    <Link to="/front/community/teams" className="aura-btn">MORE</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="community-text text-end">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque esse asperiores similique, illo veniam a id cupiditate soluta iste, nobis magni iure quod ipsam amet assumenda molestiae ad quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis deleniti nulla magni voluptate. Est deleniti voluptas, doloribus velit libero pariatur tenetur dolore amet adipisci blanditiis, architecto neque facilis saepe.
                  <div className="community-action">
                    <Link to="/front/community/events" className="aura-btn">MORE</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="community-image">
                  <img src="https://via.placeholder.com/200" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="community-image">
                  <img src="https://via.placeholder.com/200" />
                </div>
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="community-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, atque esse asperiores similique, illo veniam a id cupiditate soluta iste, nobis magni iure quod ipsam amet assumenda molestiae ad quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quis deleniti nulla magni voluptate. Est deleniti voluptas, doloribus velit libero pariatur tenetur dolore amet adipisci blanditiis, architecto neque facilis saepe.
                  <div className="community-action">
                    <Link to="/front/community/activities" className="aura-btn">MORE</Link>
                  </div>
                </div>
              </div>
            </div>
          </Default>
        </Switch>
      </div>
    </>
  )
}

function Teams() {
  return (
    <>
      <div className="community-team-title">
        TEAM COMMUNITY
      </div>
      <div className="community-team-logos">
        <img src="/assets/ml-logo-white.png" />
        <img src="/assets/pubg-logo-white.png" />
        <img src="/assets/ff-logo-white.png" />
        <img src="/assets/apex-logo-white.png" />
        <img src="/assets/valorant-logo-white.png" />
        <div className="zepeto">
          ZEPETO
        </div>
      </div>
      <div className="community-team-discord">
        <a href="#">
          <img src="/assets/discord-white.png" />
        </a>
        <p>Join with us!</p>
      </div>
    </>
  )
}

function Events() {
  const [search, setSearchParams] = useSearchParams({
    type: "tournament"
  });

  const getActiveType = (menu) => menu === search.get('type') ? 'active' : '';

  const changeMenu = (cat, menu) => {
    search.set(cat, menu);
    setSearchParams(search);
  }

  return (
    <>
      <div className="page-nav">
        <a onClick={() => changeMenu("type", "tournament")} className={`${getActiveType("tournament")}`}>TOURNAMENT</a>{' '}<span>|</span>{' '}
        <a onClick={() => changeMenu("type", "meetgreet")} className={`${getActiveType("meetgreet")}`}>MEET & GREET</a>{' '}<span>|</span>{' '}
        <a onClick={() => changeMenu("type", "coaching")} className={`${getActiveType("coaching")}`}>COACHING CLINIC</a>
      </div>
      <div className="event-list">
        <div className="row g-3">
          <div className="col-md-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tournamentModal">
              <div className="front-card">
                <img src="https://via.placeholder.com/500" />
                <div className="event-title">TITLE</div>
                <div>ORGANIZER</div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tournamentModal">
              <div className="front-card">
                <img src="https://via.placeholder.com/500" />
                <div className="event-title">TITLE</div>
                <div>ORGANIZER</div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tournamentModal">
              <div className="front-card">
                <img src="https://via.placeholder.com/500" />
                <div className="event-title">TITLE</div>
                <div>ORGANIZER</div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tournamentModal">
              <div className="front-card">
                <img src="https://via.placeholder.com/500" />
                <div className="event-title">TITLE</div>
                <div>ORGANIZER</div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tournamentModal">
              <div className="front-card">
                <img src="https://via.placeholder.com/500" />
                <div className="event-title">TITLE</div>
                <div>ORGANIZER</div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tournamentModal">
              <div className="front-card">
                <img src="https://via.placeholder.com/500" />
                <div className="event-title">TITLE</div>
                <div>ORGANIZER</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <TournamentDetails />
    </>
  )
}

function TournamentDetails(tournament) {
  return (
    <>
      <div className="modal modal-lg tournament-modal fade" id="tournamentModal" tabindex="-1" aria-labelledby="tournamentModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <img src="https://via.placeholder.com/1000" />
              <div className="tournament-modal-title">
                <h2>Tournament Title</h2>
                <div className="tournament-modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, a voluptatibus similique dolor vel reprehenderit quaerat, consectetur architecto blanditiis numquam sint provident. Molestias recusandae nostrum ad cupiditate? Iure, ad velit?</div>
                <span className="divider"></span>
              </div>

              <div className="tournament-modal-series">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="row series-card">
                    <div className="col-md-2">
                      <img src="https://via.placeholder.com/100" />
                    </div>
                    <div className="col-md-8">
                      <h5>Series Title</h5>
                      <p>Registration Date: 20/03/2023</p>
                      <p>Match Date: 02/04/2023</p>
                      <p>Slot: 100</p>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                      <button className="aura-btn aura-btn-tint" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="aura-btn aura-btn-white" data-bs-dismiss="modal"><i className="bi bi-x"></i> Close</button>
            </div>
          </div>
        </div>
      </div>
      <RegisterForm />
    </>
  )
}

function RegisterForm() {
  return (
    <>
      <div className="modal modal-md fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="team-recipient" className="col-form-label">Team Name</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="contact" className="col-form-label">Contact</label>
                  <input type="text" className="form-control" id="contact" />
                </div>
                <div className="mb-3">
                  <label for="message" className="col-form-label">Message</label>
                  <textarea className="form-control" id="message"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="aura-btn aura-btn-white" data-bs-dismiss="modal">Close</button>
              <button type="button" className="aura-btn aura-btn-tint">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Activities() {
  return (
    <>
      <div className="community-activities">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="row series-card">
            <div className="col-md-2">
              <img src="https://via.placeholder.com/100" />
            </div>
            <div className="col-md-8 d-flex flex-column">
              <h5>Activity Title</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis veritatis ratione suscipit ullam! Alias in aut obcaecati error facilis qui dolor, corrupti officia excepturi, quas tempore nobis sit soluta animi?</p>
              <p className="d-flex align-items-end event-date">Event Date: 22/07/2023</p>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-center">
              <div className="activity-action">
                <a href="#">
                  <img src="/assets/discord-default.png" />
                </a>
                <p>Join with us!</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}