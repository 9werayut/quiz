//Node module import
import React , {Component} from 'react';

// Component import
import Header from './Header';
//Layout component
class App extends Component {
    render() {
        return(
            <div className="app">
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
