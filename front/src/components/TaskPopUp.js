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
            alert(response.data.message);
        })
       this.setState({task:''});
       this.setState({dueDate:''});
    }
    GetCurrentDate=()=> {
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        this.setState({assignDate:date});
      }
  render (){
    console.log(this);
    const {name}=this.props.emp;
    return(
        <Popup trigger={<button className="mini ui violet button">Assign Task</button>} modal>
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
                            onChange={ e => this.setState({task: e.target.value}) }></input>
                        </div>
                        <div className="ui fluid icon input">
                            <input type="date" 
                             value={this.state.dueDate}
                             onChange={ e => this.setState({dueDate: e.target.value}) }></input>
                        </div>
                    </div>
                    <div className="ui two bottom attached buttons">
                        <div className="ui button"
                        onClick={this.SaveTask}>
                            Save
                        </div>
                        <div className="ui primary button">
                            Cancle
                        </div>
                    </div> 
                </div>
                )}
            </Popup>
        );
    }
}
export default TaskPopUp;