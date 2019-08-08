import React from 'react';
import ServerData from '../api/ServerData';

 class Tasks extends React.Component{
     constructor(props){
         super(props);
         this.state={
             tasks:[]
         }
     }

    componentDidMount(){
        this.GetTasks();
    }

    GetTasks = async()=>{
        const res= await ServerData.post('/getTasks',{
            id:this.props.empId
        })
        this.setState({
            tasks: res.data
        });
    }
    render(){
        return(
            <div >
            <table  className="ui single line table">
                <thead>
                    <tr>
                        <th>task</th>
                        <th>Due date</th>
                    </tr>
                </thead>
                <tbody>{this.state.tasks.map((task,key)=>{
                    return(
                        <tr key={key}>
                            <td data-labe ="task"> {task.task}</td>
                            <td data-labe ="position"> {task.dueDate}</td>
                        </tr>
                    )})}
                </tbody>
            </table >
        </div>
        )   
    }
}


export default Tasks;