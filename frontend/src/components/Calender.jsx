import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import EventForm from './EventForm';
import Notification from './Notification';
import 'react-calendar/dist/Calendar.css';

Modal.setAppElement('#root'); // Ensure accessibility requirements are met

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [notificationEvent, setNotificationEvent] = useState(null);
  const [snoozeTimer, setSnoozeTimer] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const onDateClick = (date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleSubmit = (eventData) => {
    const updatedEvents = events.filter(
      (event) => event.date.toDateString() !== selectedDate.toDateString()
    );
    updatedEvents.push({ date: selectedDate, ...eventData });
    setEvents(updatedEvents);
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    const updatedEvents = events.filter(
      (event) => event.date.toDateString() !== selectedDate.toDateString()
    );
    setEvents(updatedEvents);
    setIsModalOpen(false);
  };

  const getEventForDate = (date) => {
    return events.find(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const eventForDate = getEventForDate(date);
      if (eventForDate) {
        return (
          <div style={{ color: '#f97316', fontWeight: 'bold' }}>
            <p>{eventForDate.title}</p>
            <p>{eventForDate.eventTime}</p>
          </div>
        );
      }
    }
    return null;
  };

  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchText.toLowerCase()) ||
        event.description.toLowerCase().includes(searchText.toLowerCase());

      const matchesDateRange =
        (!startDate || new Date(event.date) >= new Date(startDate)) &&
        (!endDate || new Date(event.date) <= new Date(endDate));

      return matchesSearch && matchesDateRange;
    });

    setFilteredEvents(filtered);
  }, [searchText, startDate, endDate, events]);

  useEffect(() => {
    const checkForNotifications = () => {
      const now = new Date();
      events.forEach((event) => {
        const eventDateTime = new Date(
          `${event.date.toDateString()} ${event.eventTime}`
        );
        if (
          now.toDateString() === event.date.toDateString() &&
          now.getHours() === eventDateTime.getHours() &&
          now.getMinutes() === eventDateTime.getMinutes()
        ) {
          setNotificationEvent(event);
        }
      });
    };

    const interval = setInterval(checkForNotifications, 60000);
    return () => clearInterval(interval);
  }, [events]);

  const handleSnooze = () => {
    setNotificationEvent(null);
    const snooze = setTimeout(() => {
      setNotificationEvent(notificationEvent);
    }, 300000);
    setSnoozeTimer(snooze);
  };

  const handleDismiss = () => {
    setNotificationEvent(null);
    if (snoozeTimer) clearTimeout(snoozeTimer);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '550px',
      margin: '0 auto',
      padding: '20px',
      color: '#333',
    },
    header: {
      textAlign: 'center',
      color: '#2563eb',
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    searchContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px',
      gap: '10px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      width: '100%',
    },
    calendarContainer: {
      display: 'flex',          // Use flexbox for the calendar's container
      justifyContent: 'center', // Centers the calendar horizontally
      alignItems: 'center',     // Centers the calendar vertically
      width: '100%',            // Makes sure it stretches across the parent
      height: '100%',           // Ensures full height for the calendar box
    },
    calendar: {
      width: '60%',             // Calendar width set to 60% of the parent
      marginBottom: '20px',
      border: '2px solid #d1d5db',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
      overflow: 'hidden',
      fontSize: '1.2rem',
    },
    filteredEventList: {
      backgroundColor: '#eff6ff',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '10px',
      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
    },
    eventTitle: {
      fontSize: '22px',
      fontWeight: 'bold',
      color: '#2563eb',
    },
    eventDate: {
      color: '#6b7280',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Event Calendar</h1>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by title or description"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="Start Date"
          onChange={(e) => setStartDate(e.target.value)}
          style={styles.input}
        />
        <input
          type="date"
          placeholder="End Date"
          onChange={(e) => setEndDate(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.calendarContainer}>
        <Calendar
          onClickDay={onDateClick}
          value={selectedDate || new Date()}
          tileContent={tileContent}
          showNeighboringMonth={false}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Event Form"
      >
        <h2 style={styles.eventTitle}>Event for {selectedDate?.toDateString()}</h2>
        <EventForm
          initialData={getEventForDate(selectedDate)}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>

      <div>
        <h2 style={styles.header}>Filtered Events</h2>
        {filteredEvents.map((event, index) => (
          <div key={index} style={styles.filteredEventList}>
            <h3 style={styles.eventTitle}>{event.title}</h3>
            <p>{event.description}</p>
            <p style={styles.eventDate}>Date: {event.date.toDateString()}</p>
            <p style={styles.eventDate}>Time: {event.eventTime}</p>
          </div>
        ))}
      </div>

      {notificationEvent && (
        <Notification
          eventTitle={notificationEvent.title}
          onDismiss={handleDismiss}
          onSnooze={handleSnooze}
        />
      )}
    </div>
  );
};

export default CalendarComponent;
