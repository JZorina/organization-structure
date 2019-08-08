import React from 'react';
import ServerData from '../api/ServerData';
import ProfilePage from './ProfilePage';

class Employee extends React.Component{
     constructor(props){
         super(props);
        this.state={
            emp:{
                firstName:'',
                lastName:'',
                position:'',
                manager:'',
                image:'',
            },
            subs:[]
        };
    }
    componentDidMount(){
        this.GetProfile();
        this.getSubs();
    }
    GetProfile=async()=>{
        const res= await ServerData.post('/getProfile',{
            id:this.props.match.params.id
        })
        this.setState({
         emp:{ 
            firstName: res.data[0].firstName,
            lastName: res.data[0].lastName,
            position: res.data[0].position,
            manager: res.data[0].manager,
            image: res.data[0].image}
        });
    }

    getSubs=async()=>{
        const res= await ServerData.post('/getSubs',{
            id:this.props.match.params.id
        })
        this.setState({subs: res.data});
    }

     nextPath=()=>{
        this.props.history.push('/');
    }

    render(){
    return(
        <div className="ui container">
            <div style={{paddingTop:'20px'}}>
                <div className="ui segment">
                    <ProfilePage 
                    emp={this.state.emp} 
                    id={this.props.match.params.id} 
                    nextPath={this.nextPath} 
                    subs={this.state.subs}
                  />
                </div> 
            </div>
        </div>
    );}
}

export default Employee;
