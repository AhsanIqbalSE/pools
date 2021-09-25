import React, { Component, useEffect, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import help from "./images/help-icon.png"
import helpPurple from "./images/help-icon-purple.png"
import filterIcon from "./images/filter-icon.png"
import profile from "./images/profile1.svg"
import arrowDown from "./images/arrow-down.svg"
import recycle from "./images/recycle.svg"
import information from "./images/information.svg"
import share from "./images/share.svg"
import calc from "./images/calc.JPG"
import watch from "./images/watch.JPG"
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

const PoolTable=(props)=>{
  const [set,setval]=useState();
  
  useEffect(()=>{
 
    
  })
  function toggleRow(index) {

    // var button1 = document.querySelector('.detailButton');
    var box = document.querySelectorAll('.rowCollapse')[index];
    // button1.addEventListener('click', function() {
      box.classList.toggle('show');  
    // });
    
  };
  


    return(
      <TableContainer component={Paper} className="bg-transparent no-border-radius tableContainer">
      <Table className="" aria-label="simple table">
    
        <TableBody>
            {props.tableData1.map((row, index)=>(

            <>
            <TableRow className=""
              style={{ background: "white" }}
              key={index}
            >
              <TableCell component="th" scope="row" className="" >
               <div className="d-flex ai-center">
                 <div className="profileImg-width">
                   <span>
                      <img src={row.profile.logo} alt="" className="profile" />
                   </span>
                   <span className="smProfile-span">
                      <img src={row.profile.logoSm} alt="" className="small-profile" />
                   </span>
                 </div>
                 <div className="">
                   <div className="profile-heading">{row.profile.Name}</div>
                   <div className="profile-headingSm d-none-576">{row.profile.desc}</div>
                 </div>
               </div>
              </TableCell>
              <TableCell component="th" scope="row" className="" >
               <div className="profile-headingSm">{row.col2.field}</div>
               <div className="d-flex fd-column">
                 <div className="text-disable">{row.col2.val1}</div>
                 <div className="text-disableSm">{row.col2.val2}</div>
               </div>
              </TableCell>
              <TableCell component="th" scope="row" className="" >
                <div className="profile-headingSm mb-1">{row.col3.field}</div>
                <div className="d-flex jc-sb">
                  <div className="th-largeText">{row.col3.val1}</div>
                  <div className="d-none-576"><img src={calc} alt="" width="23px" /></div>
                </div>
              </TableCell>
              <TableCell component="th" scope="row" className="d-none-852" >
                <div className="profile-headingSm mb-1">{row.col4.field}</div>
                <div className="th-largeText"><span className="mr-1">{row.col4.val1}</span>CAKE</div>
              </TableCell>
              <TableCell component="th" scope="row" className=" d-none-968" >
                <div className="profile-headingSm mb-1">{row.col5.field}</div>
                {row.col5.val1?
                  <div className="th-largeText"><span className="mr-1">{row.col5.val1} </span>blocks <img src={watch} alt="" width="20px" /></div>
                :
                <div className="th-largeText">-</div>
                }
                
              </TableCell>
              <TableCell component="th" scope="row" className="" >
                <button className="btn btn-primary detailButton" onClick={()=>toggleRow(index)} type="button" data-bs-toggle="collapse"
										data-bs-target="#collapseExample" aria-expanded="false"
										aria-controls="collapseExample" 
										>
										<span className="d-none-576"> Details</span>
										<svg viewBox="0 0 24 24" color="primary" width="20px"
											xmlns="http://www.w3.org/2000/svg" className="sc-bdnxRM flwtrA">
											<path fill="rgb(1, 213, 152)"
												d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z">
											</path>
										</svg>
									</button>
              </TableCell>  
          </TableRow>
               <TableRow>
               <TableCell colSpan="6" className="p-0">
               <div className="collapse rowCollapse" id="collapseExample">
                  <div className="tableDetailRow" style={{backgroundColor: 'rgb(246, 246, 246)', padding: '1.25rem'}}>
                      <div className="col1">
                           
                            <div className="mb-1">
                              <a href="#" className="d-flex ai-center text-blue"><span>See Token Info</span><img src={share} alt="share" width="20px" className="ml-1" /></a>
                              
                            </div>
                            <div  className="mb-1">
                              <a href="#" className="d-flex ai-center text-blue"><span>View Project site</span><img src={share} alt="share" width="20px" className="ml-1" /></a>
                            </div>
                            <div  className="mb-1">
                              <a href="#" className="d-flex ai-center text-blue"><span>View Contact</span><img src={share} alt="share" width="20px" className="ml-1" /></a>
                            </div>
                            <div className="">
                              <a href="#" className="btn manualBtn">
                                  <img src={recycle} alt="recycle" width="15px" className="mr-1" /> 
                                  <span>Manual</span>
                              </a>
                              <span><img src={information} width="20px" className="ml-1" alt="" /></span>
                            </div>
                      </div>
                      <div className="col2">
                        <div className="col2A">
                          <div className=""><h3> CAKE EARNED</h3></div>
                          <div className="d-flex ai-center jc-sb">
                            <div className=""><h2>0</h2></div>
                            <div className=""><a href="#" className="collectBtn">Collect</a></div>
                            {/* <div className=""><a href="#" className="collectBtn disable">Collect</a></div> */}
                          </div>
                        </div>
                        <div className="col2A">
                          <div className=""><h3> start stake</h3></div>
                          <div className="d-flex jc-center ai-center">
                            <button className="connectWallet">Connect Wallet</button>
                          </div>

                        </div>

                      </div>
                     
                  </div>
                </div>
                
               </TableCell>
             </TableRow>
             </>
            ))}
            <TableRow className="" style={{ background: "white" }}>
                <TableCell colSpan="6" component="th" className="py-3">
                    <a href="#" className="d-flex ai-center jc-center">
                        <span className="detail mr-1 "> To Top</span>
                        <span><img src={arrowDown} alt="detail" width="11px" className="arrowUp" /></span>
                    </a>
                </TableCell>
            </TableRow>
        </TableBody>
      </Table>
      

</TableContainer>
  
    )
  }
export default PoolTable