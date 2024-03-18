

import React, { useState } from 'react';
import "./Campaigns.css";
import searchIcon from "../assets/Searchsearchicon.svg";
import logodropdown from "../assets/Framedropdown.svg";
import logoplus from "../assets/$dyte-iconplus.svg";
import graph from "../assets/Graphgraph.svg";
import logoup from "../assets/solar_arrow-up-boldup.svg";
import logodropdownup from  "../assets/Framelogoup.svg";

import CustomDropdown  from "../container/components/CustomDropdown";
import ListBox from '../container/components/list-box';
import { Layout, Menu, Button, theme, Dropdown } from 'antd';

const submenu1 = (
  <Menu>
    <Menu.Item key="1">Last Month</Menu.Item>
    <Menu.Item key="2">Last 3 months</Menu.Item>
    <Menu.Item key="3">Last 6 months</Menu.Item>
  </Menu>
);

const submenu2 = (
  <Menu>
    <Menu.Item key="1">Live Camapigns </Menu.Item>
    <Menu.Item key="2">Ended Camapigns</Menu.Item>
    <Menu.Item key="3">Upcoming Camapigns</Menu.Item>
  </Menu>
);

const Campaigns = () => {
  const [selectedBox, setSelectedBox] = useState(null); // State to store the id of the selected box

  const handleBoxClick = (boxId) => {
    if (selectedBox === boxId) {
      setSelectedBox(null);
    } else {
      setSelectedBox(boxId);
    }
    console.log("Selected Box:", selectedBox); // Add this line to check selectedBox state
  };
  
  return (
    <div>
            {/* <Content className="ant-layout"> */}
        <div className='submenu'>
          <div className="search-container">
            <input type="text" className="form-control py-2" placeholder="Search by Campaign name" aria-label="Search by Campaign name" aria-describedby="basic-addon2"/>
            <img src={searchIcon} className="search-icon" alt="Search" />
          </div>
          <div className='right_options'>
            {/* <Dropdown className="dropdown-btn"  overlay={submenu1} trigger={['click']}>
              <button className='curr_month'>
                <p className='btn-text'>Current month</p>
                <img src={logodropdown} alt=""/>
                <img src={logodropdownup} alt=""/>
              </button>
            </Dropdown> */}
            <CustomDropdown submenu={submenu1} buttonText="Current month" />
            <CustomDropdown submenu={submenu2} buttonText="All campaigns" />

            {/* <Dropdown className="dropdown-btn"  overlay={submenu2} trigger={['click']}>
              <button className='all_campaigns'>
                <p className='btn-text'>All campaigns</p>
                <img src={logodropdown} alt=""/>
              </button>
            </Dropdown> */}
            <button className='new_campaign'>
                <img src={logoplus} alt=""/>
                <p className='btn-text2'>New campaign</p>
                
            </button>
          </div>
        </div>
        <div className='campaign-content'>
          <div className='campaign-list'>
            <div className='list-data'>
            {/* <div className={`list-box ${clickedBox === '1' ? 'clicked' : ''}`} onClick={() => handleBoxClick('1')}>
                 <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653',position: 'absolute', top: '15px', right: '10px'  }}>
                    Live
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 1


                </div>
                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                  <div className='conversion'>
                  Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div> */}
          <ListBox
            id={1}
            status={{ color: '#27AE603D', textColor: '#219653', text: 'Live' }}
            heading='Campaign Name 1'
            text='Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....'
            conversionRate={{ color: '#27AE60', value: '24', icon: logoup }}
            date='12th Feb, 2024'
            isSelected={selectedBox === 1}

             handleBoxClick={handleBoxClick}
          />
          <ListBox
            id={2}
            status={{ color:  '#9B51E03D', textColor: '#9B51E0', text: 'Upcoming'}}
            heading='Campaign Name 2'
            text='Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....'
            conversionRate={{ color: '', value: 'Nil', icon: "" }}
            date='12th Feb, 2024'
            isSelected={selectedBox === 2}

             handleBoxClick={handleBoxClick}
          />
          <ListBox
            id={3}
            status={{ color: '#27AE603D', textColor: '#219653', text: 'Live' }}
            heading='Campaign Name 3'
            text='Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....'
            conversionRate={{ color: '#27AE60', value: '24', icon: logoup }}
            date='12th Feb, 2024'
            isSelected={selectedBox === 3}

             handleBoxClick={handleBoxClick}
          />
          <ListBox
            id={4}
            status={{ color: '#27AE603D', textColor: '#219653', text: 'Live' }}
            heading='Campaign Name 4'
            text='Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....'
            conversionRate={{ color: '#27AE60', value: '24', icon: logoup }}
            date='12th Feb, 2024'
            isSelected={selectedBox === 4}

             handleBoxClick={handleBoxClick}
          />
          <ListBox
            id={5}
            status={{ color:'#EB57573D', textColor: '#EB5757', text: 'Ended' }}
            heading='Campaign Name 5'
            text='Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....'
            conversionRate={{ color: '#27AE60', value: '24', icon: logoup }}
            date='12th Feb, 2024'
            isSelected={selectedBox === 5}

             handleBoxClick={handleBoxClick}
          />
              {/* <div className={`list-box ${clickedBox === '1' ? 'clicked' : ''}`} onClick={() => handleBoxClick('1')}>
                  <div className='status' style={{ backgroundColor: '#9B51E03D', color: '#9B51E0',position: 'absolute', top: '15px', right: '10px'   }}>
                    Upcoming
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
                


                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                  <div className='conversion'>
                  Conversion Rate: <span className='conversion-rate'>Nil</span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div> */}
              {/* <div className={`list-box ${clickedBox === '1' ? 'clicked' : ''}`} onClick={() => handleBoxClick('1')}>
                  <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653',position: 'absolute', top: '15px', right: '10px'  }}>
                    Live
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                  <div className='conversion'>
                    Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div> */}
              {/* <div className={`list-box ${clickedBox === '1' ? 'clicked' : ''}`} onClick={() => handleBoxClick('1')}>
                  <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653',position: 'absolute', top: '15px', right: '10px'  }}>
                    Live
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
                
                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                <div className='conversion'>
                    Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div> */}
              {/* <div className={`list-box ${clickedBox === '1' ? 'clicked' : ''}`} onClick={() => handleBoxClick('1')}>
                  <div className='status' style={{ backgroundColor: '#EB57573D', color: '#EB5757',position: 'absolute', top: '15px', right: '10px' }}>
                    Ended
                  </div>
                <div className='box-heading'>
                  
                  Campaign Name 2

                </div>
   


                <div className='box-text'>
                Lorem ipsum dolor sit amet consectetur. Enim amet quisque turpis vitae sed venenatis vulputate enim.....
                </div>
                <div className='box-details'>
                <div className='conversion'>
                    Conversion Rate: <span className='conversion-rate' style={{ color: '#27AE60' }}>24 <img src={logoup}/></span>
                  </div>
                  <div className='box-date'>
                  12th Feb, 2024
                  </div>

                </div>
              </div> */}

            </div>
          </div>
          <div className='campaign-details'>
          <button className='end-campaign'>End Campaign</button>

            <div className='camapign-name'>
              <div className='campaign-head'>
                <div className='subheading'>
                  <div className='heading-grp'>
                    <div className='camp-name'>Campaign Name 1</div>
                    <div className='status' style={{ backgroundColor: '#27AE603D', color: '#219653' }}>
                    Live
                  </div>

                  </div>



                </div>
                <div className='date-details'>
                  <div className='created-on'>Created on: 12th Feb, 2024</div>
                </div>
                <div className='date-details'>
                  <div className='created-on'>Ends on: 12th Mar, 2024</div>
                </div>
 
                
              </div>
            </div>
            <div className='campaign-data'>
              <div className='container'>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                  </div>

                </div>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                    
                   
                    
                  </div>
                  <img className='box-img' src={graph}/>


                </div>


              </div>
              <div className='container'>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                  </div>

                </div>
                <div className='box'>
                  <div className='box-head'>
                    <div className='data'>
                      <div className='data-head'>
                        Appoinments Scheduled
                      </div>
                      <div className='count'>
                        27
                      </div>
                    </div>
                  </div>
                <img className='box-img' src={graph}/>


                </div>


              </div>
              
            </div>
            <data className='text-box'>
              <div className='text-head' >
                PURPOSE
              </div>
              <div className='text-content'>
                Lorem ipsum dolor sit amet consectetur. Est magna condimentum maecenas varius est ullamcorper arcu. Ut semper tellus turpis in habitant fusce justo. Elit mattis lectus amet integer donec. Vitae id ultrices dictum quam nisi sit.
              </div>
            </data>
            <data className='text-box'>
              <div className='text-head' >
              GREETING MESSAGE
              </div>
              <div className='text-content'>
                Lorem ipsum dolor sit amet consectetur. Est magna condimentum maecenas varius est ullamcorper arcu. Ut semper tellus turpis in habitant fusce justo. Elit mattis lectus amet integer donec. Vitae id ultrices dictum quam nisi sit.
              </div>
            </data>
            <data className='text-box'>
              <div className='text-head' >
              TARGET USERS
              </div>
              <div className='text-content'>
                Lorem ipsum dolor sit amet consectetur. Est magna condimentum maecenas varius est ullamcorper arcu. Ut semper tellus turpis in habitant fusce justo. Elit mattis lectus amet integer donec. Vitae id ultrices dictum quam nisi sit.
              </div>
            </data>
          </div>
        </div>

       
      {/* </Content> */}
    </div>
  )
}



export default Campaigns
