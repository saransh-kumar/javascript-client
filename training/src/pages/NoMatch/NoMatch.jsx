import React from 'react';

class NoMatch extends React.Component {
    render() {
        return(
            <div style={{textAlign: 'center', margin:'10%'}}>
                <h1>Not Found</h1>
                <p style={{color: 'grey'}}>Seem like page you are looking after does not exist</p>
            </div>
        )
    }
}

export default NoMatch;