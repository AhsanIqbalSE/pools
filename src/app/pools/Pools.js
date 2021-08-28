import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Dropdown, Tabs, Tab } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import help from "./images/help-icon.png"
import helpPurple from "./images/help-icon-purple.png"
import filterIcon from "./images/filter-icon.png"
import PoolTable from "./PoolsTable"
import {tableData1} from "./tabledata"

import {
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core/";


export const Pools =()=> {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
    return (
      <>
        <div className="pools-container">
          {/* 1st section/syrup pool */}
          <div className="syrupPoolsBg ">
            <div>
              <h1>Syrup Pools</h1>
              <h2 className="mb-0">Just stake some tokens to earn.</h2>
              <h2 className="mb-0">High APR, low risk.</h2>
            </div>
            <div className="syrupPool2ndDiv">
              <a href="#" target="_blank" className="help">
                <button>
                  <span className="mr-1 helptext">Help</span> 
                  <img src={help} alt="" width="20px" />
                </button>
              </a>
              <div className="cake-bounty-box">
                <div className="innerBox">
                  <div className="p-4">
                    <div className="mb-3">
                      <span className="auto-cake-text">Auto CAKE Bounty</span>
                      <img src={helpPurple} alt="" width="20px" />
                    </div>
                    <div className="d-flex jc-sb">
                      <div className=" d-flex fd-column">
                        <span className="figure-1">0.006</span>
                        <span className="figure-2">-0.14 USD</span>
                      </div>
                      <div className="">
                        <Link to="" className="claimBtn"> Claim</Link>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
          {/* 2nd section/syrup pool */}
          <div className="secondSec-Pool">
            {/* filter */}
            <div className="filterDiv">
              <div className="filter1stDiv">
                <div className="mr-4">
                  <img src={filterIcon} alt="" width="25px" className="mr-2"/>
                  <img src={filterIcon} alt="" width="25px" />
                </div>
                <div className="">
                  <span>      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} /></span>
                  <span className="ml-1 stack-text">Staked Only</span>
                </div>
                <div className=" liveFinishDiv">
                  <Link to="" className="liveB">Live</Link>
                  <span>
                    <Link to="" className="finishedB">Finished</Link>
                  </span>

                </div>
              </div>
              <div className="filter2ndDiv">
         
                <div className="">
                  <div className="sortBy-text">SORT BY</div>
                  <div className="sortbyInputDiv">
                    <div className="innerDiv">
                    <Dropdown>
                      <Dropdown.Toggle  id="dropdown-basic">
                        <span className="hot">Hot</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">APR</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">EARNED</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">TOTAL STACKED</Dropdown.Item>
                      </Dropdown.Menu>  
                    </Dropdown>

                    </div>
                  </div>
                </div>
                <div className="ml-3">
                    <div className="sortBy-text">SORT BY</div>
                    <div className="searchDiv">
                      <input type="text" placeholder="Search Pools" />
                    </div>
                </div>
              </div>
            </div>
            <div className="poolTable">
              {/* table */}
             <PoolTable  tableData1={tableData1} />
            </div>
          </div>
        </div>
       
      </> 
    );
  }
 
export default Pools;