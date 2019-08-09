import React from 'react';
import TaskPopUp from './TaskPopUp';

const Subs=({subs,myId})=>{
    console.log(subs);
    return(
        
        <div>
            <table  className="ui single line table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Position</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{subs.map((sub,key)=>{
                    return(
                        <tr key={key}>
                            <td data-labe ="Employee"> {sub.emp}</td>
                            <td data-labe ="Position"> {sub.position}</td>
                            <td>
                                <TaskPopUp emp={sub} myId={myId}/>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table >
        </div>
    );
}

export default Subs;