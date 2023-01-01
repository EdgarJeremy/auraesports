import { Case, Switch } from 'react-if';
import { useSearchParams } from 'react-router-dom';

export default function Company() {
  document.body.classList.remove('bg-pubg');
  document.body.classList.remove('bg-ml');
  document.body.classList.remove('bg-ba');

  const [search, setSearchParams] = useSearchParams({
    type: "about"
  });

  const getActiveType = (menu) => menu === search.get('type') ? 'active' : '';

  const changeMenu = (cat, menu) => {
    search.set(cat, menu);
    setSearchParams(search);
  }

  return (
    <>
      <div className="page-title">
        Aura<span>Company</span>
      </div>
      <div className="page-container">
        <div className="page-nav">
          <a onClick={() => changeMenu("type", "about")} className={`${getActiveType("about")}`}>ABOUT US</a>{' '}<span>|</span>{' '}
          <a onClick={() => changeMenu("type", "partners")} className={`${getActiveType("partners")}`}>PARTNERS</a>{' '}<span>|</span>{' '}
          <a onClick={() => changeMenu("type", "contacts")} className={`${getActiveType("contacts")}`}>CONTACTS</a>
        </div>
        <Switch>
          <Case condition={search.get('type') === 'about'}><About /></Case>
          <Case condition={search.get('type') === 'partners'}><Partners /></Case>
          <Case condition={search.get('type') === 'contacts'}><Contacts /></Case>
        </Switch>
      </div>
    </>
  )
}

function About() {
  return (
    <>
      <div className="company-info-container">
        <h3>VISI</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique sed suscipit, nihil vero rem, eius amet delectus laboriosam laudantium quas dolores. Accusamus possimus provident ut odit omnis ex fugit.</p>
        <h3>MISI</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique sed suscipit, nihil vero rem, eius amet delectus laboriosam laudantium quas dolores. Accusamus possimus provident ut odit omnis ex fugit.</p>
        <h3>HISTORY</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem similique sed suscipit, nihil vero rem, eius amet delectus laboriosam laudantium quas dolores. Accusamus possimus provident ut odit omnis ex fugit.</p>
      </div>
    </>
  );
}

function Partners() {
  return (
    <>
      <div className='company-info-container partners'>
        <div className='row g-3'>
          <div className='col-md-2'>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className='col-md-10'>
            <h3><a target="_blank" href="https://www.po.co.id/id/">POCO</a></h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure illo repellat deleniti, harum inventore praesentium dolor, voluptate magnam totam, debitis dignissimos assumenda ipsum. Excepturi minus molestiae sunt exercitationem illum?
          </div>
          <div className='col-md-2'>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className='col-md-10'>
            <h3><a target="_blank" href="https://gagafood.co.id/id/">Gaga 100</a></h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure illo repellat deleniti, harum inventore praesentium dolor, voluptate magnam totam, debitis dignissimos assumenda ipsum. Excepturi minus molestiae sunt exercitationem illum?
          </div>
          <div className='col-md-2'>
            <img src="https://via.placeholder.com/200" />
          </div>
          <div className='col-md-10'>
            <h3><a target="_blank" href="https://www.bukalapak.com/">Bukalapak</a></h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure illo repellat deleniti, harum inventore praesentium dolor, voluptate magnam totam, debitis dignissimos assumenda ipsum. Excepturi minus molestiae sunt exercitationem illum?
          </div>
        </div>
      </div>
    </>
  )
}

function Contacts() {
  return (
    <>
      <div className="company-info-container contacts">
        <h3 className='text-center'>PT. Aura Esports</h3>
        <div className='row'>
          <div className='col-md-3'>
            <img src="https://via.placeholder.com/300" />
          </div>
          <div className='col-md-5'>
            <h4>Alamat</h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, vitae exercitationem! Ipsa neque tempora ex voluptatibus ducimus, aliquid, facere molestias ad eius ratione perferendis! Expedita pariatur vitae omnis perspiciatis fugiat?
          </div>
          <div className='col-md-4'>
            <h4>Contacts</h4>
            Phone: +021-222-222-222<br />
            Email: contact@auraesports.com<br />
            Fax: 220220220220
          </div>
        </div>
      </div>
    </>
  );
}