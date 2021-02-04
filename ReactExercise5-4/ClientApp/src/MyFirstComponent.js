import React from 'react';
import MyOtherComponent from './MyOtherComponent';

class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>from MyFirstComponent: Hello, how are you today?</h1>
                <MyOtherComponent />
            </div>
        );
    }
}

export default MyFirstComponent;