import React from 'react';
import Tasks from './Tasks';
import Reports from './Reports';
import Subs from './Subs';
import ReportPopUp from './ReportPopUp';

const ProfilePage=({emp,nextPath,id,subs})=>{
    if(!(emp || subs)){
        return <div>Loading..</div>
    }
    const {firstName,lastName,image,position,manager}=emp;
    return(
        <div>
            <div className="ui grid">
                <div className="four wide column">
                    <div className="ui small borded image">
                        <div  style={{paddingLeft:'30px'}}>
                            <img alt={firstName} src={image}></img>
                        </div>
                    </div>
                </div>

                <div className="six wide column" >
                    <div  style={{paddingBottom:'40px'}}>
                        <label >Name:<span style={{paddingLeft:'15px'}}>{firstName}  {lastName}</span></label>
                    </div>

                <div className="cloumn">
                    <div  style={{paddingBottom:'12px'}}>
                        <label >Position:<span style={{paddingLeft:'15px'}}>{position}</span></label>
                    </div>
                </div>

                <hr/>
                <div className="ui four column grid">
                    <div className="row">
                        <div className="cloumn">
                            <div  style={{paddingTop:'25px',paddingLeft:'15px'}}>
                                <label >Manager:<span style={{paddingLeft:'15px'}}>{manager}</span></label>
                            </div>
                        </div>
                        
                        <div className="cloumn">
                            <div  style={{paddingTop:'15px', paddingLeft:'60px'}}>
                               <ReportPopUp empId={id} manager={manager}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style={{paddingTop:"4em"}}>
            <div className="ui segment">
                <label>My tasks:</label>
                <div style={{paddingTop:"30px"}}>
                    <Tasks empId={id}/>
                </div>
            </div>
        </div>
        <div style={{paddingTop:"4em"}}>
            <div className="ui segment">
                <label>Reports:</label>
                <div style={{paddingTop:"30px"}}>
                    <Reports empId={id}/>
                </div>
            </div>
        </div>
        {
            subs.length>0 &&
            <div style={{paddingTop:"4em"}}>
                <div className="ui segment">
                    <label>My subordinates:</label>
                    <div style={{paddingTop:"30px"}}>
                        <Subs subs={subs} myId={id}/>
                    </div>
                </div>
            </div>
        }
        <div style={{paddingTop:'35px', justifyContent:'center', display:'flex'}}>
            <button className="ui inverted violet button"
            onClick={nextPath}>
                Back
            </button>
        </div>
    </div>
    );
}

export default ProfilePage;