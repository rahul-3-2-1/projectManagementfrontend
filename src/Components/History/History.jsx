import React from 'react';
import Header from '../Header/Header';
import { HistoryHeader,HistoryContainer,HistoryItem,Button } from './History.style';
import ProjectSvgComponent from '../../Svg/ProjectSvgComponent';
import { Line } from '../SingleProject/SingleProject.style';


function History() {
  return (
   <>
   <Header/>
   <HistoryHeader>
   <h2>Request History</h2>
   </HistoryHeader>
   <HistoryContainer>
       <HistoryItem>
        <div className='projDiv'>
            <ProjectSvgComponent style={{marginRight:"10px"}}/>
           <p> Project Name </p>
        </div>
        <div className='stagDiv'>
        <div className='stagName'>
            <h3>Stage Title</h3>
            <p>Stage 1</p>
        </div>
        <div className='Status'>
            <h3>Status</h3>
            <p style={{color:"green",fontWeight:"500"}}> Completed</p>
        </div>
        <div className='Note'>
            <h3>Note</h3>
            <p>skdvkj sdkjvbsdv sdvkjnsdv sdvkjb</p>
        </div>
        <div className='Request'>
            <h3>Request</h3>
            <Button color="red">Approved</Button>

        </div>
        <div>
            <p>3 Days ago</p>
        </div>
        </div>
       </HistoryItem>
       <Line/>
       <HistoryItem>
        <div className='projDiv'>
            <ProjectSvgComponent style={{marginRight:"10px"}}/>
           <p> Project Name </p>
        </div>
        <div className='stagDiv'>
        <div className='stagName'>
            <h3>Stage Title</h3>
            <p>Stage 1</p>
        </div>
        <div className='Status'>
            <h3>Status</h3>
            <p style={{color:"green",fontWeight:"500"}}> Completed</p>
        </div>
        <div className='Note'>
            <h3>Note</h3>
            <p>skdvkj sdkjvbsdv sdvkjnsdv sdvkjb</p>
        </div>
        <div className='Request'>
            <h3>Request</h3>
            <Button color="red">Approved</Button>

        </div>
        <div>
            <p>3 Days ago</p>
        </div>
        </div>
       </HistoryItem>
       <Line/>
       <HistoryItem>
        <div className='projDiv'>
            <ProjectSvgComponent style={{marginRight:"10px"}}/>
           <p> Project Name </p>
        </div>
        <div className='stagDiv'>
        <div className='stagName'>
            <h3>Stage Title</h3>
            <p>Stage 1</p>
        </div>
        <div className='Status'>
            <h3>Status</h3>
            <p style={{color:"green",fontWeight:"500"}}> Completed</p>
        </div>
        <div className='Note'>
            <h3>Note</h3>
            <p>skdvkj sdkjvbsdv sdvkjnsdv sdvkjb</p>
        </div>
        <div className='Request'>
            <h3>Request</h3>
            <Button color="red">Approved</Button>

        </div>
        <div>
            <p>3 Days ago</p>
        </div>
        </div>
       </HistoryItem>
       <Line/>
   
   </HistoryContainer>
   </>
  )
}

export default History