import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {}

interface State {
  value: string;
}

class Form extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value,
      };
    });
  }

  render() {
    return (
      <>
        <form>
          <input type="text" onChange={this.handleChange} />
        </form>
        <div>{this.state.value}</div>
      </>
    );
  }
}

export default Form;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
