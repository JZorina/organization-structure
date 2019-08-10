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
            msg:''
           
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
            this.setState({msg:response.data.message});
        })
        this.resetValues();
    }

    resetValues=()=>{
        this.setState({report:''});
        this.setState({msg:''});
    }

    GetCurrentDate=()=> {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        this.setState({date:date});
    }

    render(){
        return( 
            <Popup trigger={<button className="ui inverted green button">Report</button>} modal>
                {close => ( 
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        {
                            this.props.manager!=='-' &&
                            <div className="modal">
                                <div className="header"> Report to manger </div>
                                <div className="content">
                                    <div className="ui fluid icon input focus">
                                        <input type="text" placeholder="type here"
                                        value={this.state.report}
                                        onChange={ e => this.setState({report: e.target.value, msg:''}) }></input>
                                    </div>
                                </div>
                                <div style={center}>
                                    <button className="ui primary left compact button"
                                    onClick={this.SaveReport}
                                    type="button" 
                                    disabled={!this.state.report}>
                                        Save
                                    </button >
                                    <button className="ui right compact button"
                                    onClick={this.resetValues}>
                                        Cancel
                                    </button >
                                </div>
                                {
                                    this.state.msg &&<div>
                                        <label style={msg}>
                                            {this.state.msg}
                                        </label>
                                    </div>
                                }
                            </div>
                        } 
                        {
                            this.props.manager==='-' &&
                            <div style={center}>
                                <div className="ui massive violet label">
                                    You are the CEO 
                                </div>
                            </div>
                        }
                    </div>
                    )}
            </Popup>
        );}
    }
const center={
    display: 'flex',
    justifyContent:'center', 
    alignItems:'center'
}
const msg={
    color:'green',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent:'center', 
    alignItems:'center',
    fontSize:'15px'
}
export default ReportPopUp;