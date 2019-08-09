import React from 'react';
import Popup from "reactjs-popup";
import './ReportPopUp.css';
import ServerData from '../api/ServerData';

class ReportPopUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            report:'',
            date:'',
            CEO:false
        } 
    }
    componentDidMount(){
        this.GetCurrentDate();
    }

    SaveReport=()=>{
        ServerData.post('/SaveReport',{
            report:this.state.report,
            date:this.state.date,
            id:this.props.empId
        }).then((response)=>{
            alert(response.data.message);
        })
       this.setState({report:''});

    }
    GetCurrentDate=()=> {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        this.setState({date:date});
      }
    render(){
        console.log(this);
      
 
        return( 
            <Popup trigger={<button className="ui inverted violet button">Report</button>} modal>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        {
                            this.props.manager!=='-' &&
                            <div>
                                <div className="header"> Report to manger </div>
                                <div className="content">
                                    <div className="ui fluid icon input focus">
                                        <input type="text" placeholder="type here"
                                        value={this.state.report}
                                        onChange={ e => this.setState({report: e.target.value}) }></input>
                                    </div>
                                </div>
                                <div className="ui two bottom attached buttons">
                                    <div className="ui button"
                                    onClick={this.SaveReport}>
                                        Save
                                    </div>
                                    <div className="ui primary button">
                                        Cancle
                                    </div>
                                </div>
                        </div>
                        }
                        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                            <div className="ui  massive violet label">
                                You are the CEO 
                            </div>
                        </div>
                    </div>
                         )}
            </Popup>
        );}
    }

export default ReportPopUp;