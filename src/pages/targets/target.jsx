import React from 'react';
import Layout from '../../components/layout';
import Tabs from '../../components/tabs'
import Tab from '../../components/tab';
import TargetCollection from '../../components/target-collection';
import Overview from '../../components/overview';
import Container from './style';
import rectangleBlue from '../../assets/rectangle-blue.svg';
import squareOrange from  '../../assets/square-orange.svg';
import squarePurple from '../../assets/square-purple.svg';
import colors from '../../utils/colors';

const Targets = () => (
    <Layout>
       <Tabs>
           <Tab label="Targets">
               <h2>Targets</h2>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,  pariatur!
            </Tab>
            <Tab label="Achievementss">
                <Container>
                    <div className="overview-section">
                        <div className="all-targets">
                            <Overview 
                                imageBackground={rectangleBlue} 
                                color={colors.blue} 
                                title="All Targets"
                                width={50}
                            />
                        </div>
                        <div className="product-target">
                            <Overview 
                                imageBackground={squareOrange} 
                                color={colors.orange} 
                                title="Product Target"
                                width={60}
                            />
                        </div>
                        <div className="sales-target">
                            <Overview 
                                imageBackground={squarePurple} 
                                color={colors.purple}
                                title="Sales Target"
                                width={36}
                            />
                        </div>
                    </div>
                    <div className="filter-section">
                        <input placeholder="Search for a target..." />
                        <button>Search</button>
                        <select><option disabled selected value="Filter">Filter</option></select>
                        <span>Clear Filter</span>
                    </div>
                    <div className="targets-section">
                        <p>Monitor your targets and achievements below</p>
                        <TargetCollection />
                    </div>
                </Container>
            </Tab>
       </Tabs>
    </Layout>
)
    
export default Targets;
