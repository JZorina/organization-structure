import React from 'react';
import { Route, BrowserRouter as Router ,Switch} from 'react-router-dom';
import App from './App';
import Employee from './Employee';

class Start extends React.Component{
    render(){
        return(
            <div>
                <Router>
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route path="/Employee/:id" component={Employee} />
                        </Switch>
                </Router>
             </div>
        );
    }
}
export default Start;
  
