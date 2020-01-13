import React from 'react';

export default class ChatMessage extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <p>
        {message}
      </p>
    );
  }
}
