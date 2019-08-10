import React from 'react';
import Popup from "reactjs-popup";
import './ReportPopUp.css';
import ServerData from '../api/ServerData';
class TaskPopUp extends React.Component{    
    constructor(props){
        super(props);
        this.state={
            task:'',
            assignDate:'',
            dueDate:'',
            msg:''
        } 
    }
    componentDidMount(){
        this.GetCurrentDate();
    }

    SaveTask=()=>{
        ServerData.post('/SaveTask',{
            task:this.state.task,
            assignDate:this.state.assignDate,
            dueDate:this.state.dueDate,
            empId:this.props.emp.id

        }).then((response)=>{
            this.setState({msg:response.data.message});
        })
       this.resetValues();
    }

    resetValues=()=>{
        this.setState({task:''});
        this.setState({dueDate:''});
    }

    GetCurrentDate=()=> {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        this.setState({assignDate:date});
      }

    render (){
        const {name}=this.props.emp;
        const enabled=this.state.task.length>0 && this.state.dueDate.length>0
        return(
            <Popup trigger={<button className="small ui green button">Assign Task</button>} modal>
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                        <div className="header"> Assign task to {name} </div>
                            <div className="content">
                                <div className="ui fluid icon input focus">
                                    <input type="text" placeholder="type here"
                                    value={this.state.task}
                                    onChange={ e => this.setState({task: e.target.value, msg:''})}></input>
                                </div>
                                <div className="ui fluid icon input">
                                    <input type="date" 
                                    value={this.state.dueDate}
                                    onChange={ e => this.setState({dueDate: e.target.value, msg:''})}></input>
                                </div>
                            </div>
                            <div className="ui two bottom attached buttons">
                                <button className="ui primary button"
                                    onClick={this.SaveTask}
                                    type="button"
                                    disabled={!enabled}>
                                    Save
                                </button>
                                <button className="ui button"
                                onClick={this.resetValues}>
                                    Cancel
                                </button>
                            </div> 
                            {this.state.msg &&<div>
                                <label style={msg}>
                                    {this.state.msg}
                                </label>
                            </div>}
                        </div>
                    )}
                </Popup>
            );
    }
}
const msg={
        color:'green',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent:'center', 
        alignItems:'center',
        fontSize:'15px'
}
export default TaskPopUp;