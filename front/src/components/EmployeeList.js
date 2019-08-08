import React from 'react';

const EmployeeList = props =>{
    return(
        <div>
            <table  className="ui single line table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>position</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>{props.Employees.map((emp,key)=>{
                    return(
                        <tr key={key}>
                            <td data-labe ="Name"> {emp.firstName} {emp.lastName}</td>
                            <td data-labe ="position"> {emp.position}</td>
                            <td data-labe ="Profile">
                                <a href={`/Employee/${emp.id}/`}>View</a>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table >
        </div>
    );
}


  
export default EmployeeList;
