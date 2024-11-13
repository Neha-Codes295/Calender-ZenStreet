import React, { useState, useEffect } from 'react';

const EventForm = ({ initialData, onSubmit, onClose }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [eventType, setEventType] = useState(initialData?.eventType || 'text');
  const [file, setFile] = useState(null);
  const [timestamp, setTimestamp] = useState(initialData?.timestamp || null);
  const [eventTime, setEventTime] = useState(initialData?.eventTime || '');

  useEffect(() => {
    if (initialData) {
      setTimestamp(initialData.timestamp);
      setEventTime(initialData.eventTime || '');
    }
  }, [initialData]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTimestamp = new Date().toLocaleString();
    setTimestamp(newTimestamp);
    onSubmit({ title, description, eventType, file, eventTime, timestamp: newTimestamp });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: '400px', 
      margin: 'auto', 
      padding: '20px', 
      borderRadius: '8px', 
      backgroundColor: '#f9f9f9', 
      fontFamily: 'Arial, sans-serif', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginBottom: '20px' }}>Event Details</h2>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px'
          }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{
            width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px', resize: 'vertical'
          }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>Event Time:</label>
        <input
          type="time"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          required
          style={{
            width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px'
          }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>Event Type:</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          style={{
            width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '16px'
          }}
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>
      {eventType === 'image' && (
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} style={{ fontSize: '14px' }} />
        </div>
      )}
      {eventType === 'video' && (
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px' }}>Upload Video:</label>
          <input type="file" accept="video/*" onChange={handleFileChange} style={{ fontSize: '14px' }} />
        </div>
      )}
      <div style={{ fontSize: '12px', color: '#888', textAlign: 'right', marginBottom: '15px' }}>
        <p>Event Saved On: {timestamp || "Not yet saved"}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button type="submit" style={{
          backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease'
        }}>Save Event</button>
        <button type="button" onClick={onClose} style={{
          backgroundColor: '#f44336', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s ease'
        }}>Close</button>
      </div>
    </form>
  );
};

export default EventForm;
