import React from 'react';

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { onSend } = this.props;
    event.preventDefault();
    if (onSend) onSend(this.state.value);
    this.setState({value: ''});
  }

  render() {
    const style = {
      width: 250,
    }
    return (
      <form id="chatinput" onSubmit={this.handleSubmit}>
        <input style={style} type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
