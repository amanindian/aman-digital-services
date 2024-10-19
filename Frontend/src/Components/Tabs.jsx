import React, { useContext, useEffect, useState } from 'react'
import { ProjectInfoContext } from '../Context/ProjectInfo';
import './Tab.css'

const Tabs = () => {
  const { TabsData } = useContext(ProjectInfoContext);
  const [activeTab, setActiveTab] = useState({ ...TabsData[0] });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    TabsData.filter((e) => {
      return e.id === activeTab
    })
  }, [activeTab, TabsData])
  return (
    <section id='tab'>
      <div className="container tab">
        <div className="tab-buttons">
          {
            TabsData.map((e) => {
              return (
                <button key={e.id} onClick={() => handleTabClick(e)} className={activeTab.id === e.id ? "active" : "tab-btn"}
                >{e.Title}</button>
              )
            })
          }
        </div>




        <div className="tab-content">
          <div className="tab-text">
            <h3 className='tab-title'>{activeTab.Title}</h3>
            <p className='tab-description'>{activeTab.Description}</p>
          </div>
          <div className="tab-image">
            {activeTab.Image && <img src={activeTab.Image} alt="" />}
            {activeTab.Icon && <i className={"fa-solid " + activeTab.Icon}></i>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
