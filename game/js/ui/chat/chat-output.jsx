import React, { useEffect, useRef } from 'react';

import ChatMessage from './chat-message';

export default class ChatOutput extends React.Component {
  render() {
    const { messages } = this.props;
    const output = messages.map((item, key) =>
      <ChatMessage {...item} />
    );
  

    return (
      <div id="chatmessages">
        {output}
       
      </div>
    );
  }
}
