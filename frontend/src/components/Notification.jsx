// Notification.js

import React from 'react';

const Notification = ({ eventTitle, onDismiss, onSnooze }) => {
  // Inline styles for notification container and button elements
  const notificationStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    position: 'fixed',
    top: '10px',
    right: '10px',
    background: '#fff',
    zIndex: 1000,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    margin: '5px',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  };

  const dismissButtonStyle = {
    ...buttonStyle,
    background: '#ff4d4f',
    color: 'white',
  };

  const snoozeButtonStyle = {
    ...buttonStyle,
    background: '#4caf50',
    color: 'white',
  };

  return (
    <div style={notificationStyle}>
      <p>It’s time for your event: <strong>{eventTitle}</strong></p>
      <div>
        <button style={dismissButtonStyle} onClick={onDismiss}>Dismiss</button>
        <button style={snoozeButtonStyle} onClick={onSnooze}>Snooze 5 minutes</button>
      </div>
    </div>
  );
};

export default Notification;
