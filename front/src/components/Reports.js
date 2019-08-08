import React from 'react';
import ServerData from '../api/ServerData';

 class Reports extends React.Component{
     constructor(props){
         super(props);
         this.state={
             reports:[]
         }
     }

    componentDidMount(){
        this.getReports();
    }

    getReports = async()=>{
        const res= await ServerData.post('/getReports',{
            id:this.props.empId
        })
        this.setState({
            reports: res.data
        });
    }
    render(){
        return(
            <div >
            <table  className="ui single line table">
                <thead>
                    <tr>
                        <th>Report</th>
                        <th>from</th>
                    </tr>
                </thead>
                <tbody>{this.state.reports.map((report,key)=>{
                    return(
                        <tr key={key}>
                            <td data-labe ="Report"> {report.text}</td>
                            <td data-labe ="from"> {report.emp}</td>
                        </tr>
                    )})}
                </tbody>
            </table >
        </div>
        )   
    }
}


export default Reports;