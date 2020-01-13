import React from 'react';

import ChatOutput from './chat-output';
import ChatInput from './chat-input';

export default class ChatBox extends React.Component {
  render() {
    return (
      <div>
        <ChatOutput {...this.props}/>
        <ChatInput {...this.props}/>
      </div>
    );
  }
}
