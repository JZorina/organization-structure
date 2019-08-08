import React from 'react';
import ServerData from '../api/ServerData';
import EmployeeList from './EmployeeList';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Employees:[]
        };
    }
    componentDidMount()
    {
       this.GetEmployees();
    }

    GetEmployees= async ()=>{
        const res= await ServerData.get('/getEmployees');
        this.setState({
            Employees: res.data
        }); 
    }


    render(){
        return(
            <div className="ui container" style ={{marginTop:'10px',flex: 1,textAlign: 'center'}}>
                <div className="ui segment">
                    <div className="ui header">
                        Employee List
                    </div>
                    <EmployeeList Employees={this.state.Employees}/>
                </div>
            </div>
        );
    }
}
export default App;
