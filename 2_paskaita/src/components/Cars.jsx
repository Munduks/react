import React from 'react';

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({ color: 'blue' });
    };
    render() {
        return(
        <div>
           <h1>My car {this.state.brand}</h1>
            <p>
              It is a {this.state.color} {this.state.model} from {this.state.year}.
            </p>
            <button onClick={this.changeColor}>Change color</button>
          
        </div>
            
        );
    }
}

export default Cars;