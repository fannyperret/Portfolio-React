import React from 'react';

class Year extends React.Component {
    
    state = {
        year: new Date().getFullYear(),
    }
    
    render() {
        return (
        <span>
            {this.state.year}
        </span>
    );
  }
}

export default Year;