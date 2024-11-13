Calendar Event Manager
A web-based Calendar Event Manager that allows users to schedule, manage, and search for events with an integrated notification system. This project provides a clean user interface for managing events and integrates powerful features like event filtering, snooze notifications, and a responsive design.

Features:
1. Calendar Integration
Implemented using the react-calendar library.
Allows users to select dates and view events directly on the calendar.
Customized tile content to display events for each date with time and title visible at a glance.
2. Event Management
Modal pop-up form for adding, updating, and deleting events.
Event form fields include title, description, and time.
Updated event data is stored and displayed based on selected date.
3. Search and Filtering
Real-time search functionality to filter events based on title or description.
Date range filters (start and end date) to view specific events within a selected timeframe.
4. Notification System
Displays notifications for upcoming events at scheduled times.
Users can snooze notifications (5-minute intervals) or dismiss them altogether.
Notifications pop up as a fixed alert on the page to ensure visibility.
5. Snooze Feature
Added a snooze option to the notification system, delaying reminders for 5 minutes.
Utilizes state and timeout functions to reset notification reminders as needed.
6. Responsive and User-Friendly Design
Applied custom CSS to ensure a visually appealing and consistent layout.
Utilized a clean color palette for readability and accessibility, consistent with the EventForm style.
Calendar is displayed prominently to facilitate a seamless event management experience.
7. Additional Utility Functions
Helper functions to check and filter event data.
tileContent function for the calendar component to display events on specific dates.
Screenshots
Include screenshots here to showcase the calendar interface, event modals, notification pop-ups, and search functionality.


Usage:
Adding an Event: Select a date on the calendar and fill in the event details in the modal.

Viewing Events: Hover over dates with events to preview details.

Editing/Deleting Events: Click on a date with an existing event, make edits in the modal, or delete the event.

Filtering Events: Use the search bar and date filters to locate specific events.

Notifications: Notifications will appear for scheduled events, and users can snooze or dismiss them.


Technologies Used:
React: Core framework for building the user interface.
react-calendar: For calendar display and date selection.
react-modal: Used for event creation and editing modal.
CSS: Custom styles to create a user-friendly and visually appealing interface.


Future Enhancements:
Persistent Storage: Integrate local storage or a backend to save event data across sessions.
Recurring Events: Add options to create daily, weekly, or monthly recurring events.
Enhanced Notifications: Use desktop notifications for better visibility.
Advanced Search: Support additional search parameters like category or location.


Additional features or improvements made beyond the basic requirements.

A web-based Calendar Event Manager built with React, allowing users to schedule, manage, and filter events. This project includes integrated notifications and a search system, all wrapped in a responsive and user-friendly interface. The project has been designed to help users keep track of events and stay notified when they are about to start.

Features
1. Calendar Integration
Implemented using react-calendar.
Displays a calendar where users can select dates and see events associated with them.
Custom tile content shows event details (title and time) directly on the calendar for quick access.
2. Event Management
A modal form for adding, editing, and deleting events.
The form includes fields for event title, description, and time.
Events are updated or removed based on the selected date.
3. Search and Filtering
Real-time search functionality filters events by title and description.
Date range filters allow users to view events within a specific timeframe (start and end dates).
4. Notification System
Alerts users when an event is scheduled to start.
Notifications are displayed as in-app messages to ensure users are aware of upcoming events.
Users can snooze notifications (delays for 5 minutes) or dismiss them.
5. Snooze Feature
The snooze functionality allows users to temporarily delay notifications by 5 minutes.
Implemented using setTimeout and state management for real-time updates.
6. Responsive Design
The application is responsive and adapts well to different screen sizes.
Custom CSS ensures a clean and visually appealing layout.
7. Event Display & Management Interface
Events are displayed with clear headings, date/time, and descriptions.
Interactive interface for adding new events, editing existing ones, or deleting them.
Installation & Setup
Follow these steps to get the application running on your local machine:

Prerequisites
Ensure that you have the following installed:

Node.js (version 14.x or higher)
npm (Node package manager, typically comes with Node.js)
Steps to Set Up
Clone the Repository

bash
Copy code
git clone https://github.com/Neha-Codes295/calendar-event-manager.git
Navigate into the Project Directory

bash
Copy code
cd calendar-event-manager
Install Dependencies Run the following command to install all necessary packages:

bash
Copy code
npm install
Run the Application Start the application by running:

bash
Copy code
npm start
This will launch the app on your default web browser (usually accessible at http://localhost:3000).

Usage
Select a Date: Click on any date in the calendar to view or add an event for that date.
Add an Event: After selecting a date, use the event form to input the event's title, description, and time.
Search Events: Use the search bar at the top to filter events by title or description.
Apply Date Range Filters: Use the date input fields to filter events by start and end dates.
Edit/Delete Events: Click on an event on the calendar to open the event form where you can edit or delete the event.
Notifications: Once an event is near its scheduled time, you’ll receive a notification. You can snooze the notification or dismiss it.
Technologies Used
React: The main JavaScript library used to build the app.
react-calendar: A flexible and customizable calendar component used for date selection.
react-modal: A simple modal library for event creation and editing.
CSS: Custom CSS for layout and styling of the application.
Additional Features
Event Notification System:

Real-time event reminders based on the scheduled event time.
Configurable snooze feature for post-reminder delays.
Enhanced Filtering:

Advanced event search based on both title and description.
Date range filtering to allow users to view events within a selected time period.
Responsive Design:

The app is designed to work on both desktop and mobile devices with a clean, user-friendly interface.
User-Friendly UI:

Clear color palette that is consistent with the event form's design.
Well-structured modals, inputs, and buttons for ease of use.
Future Improvements
Persistent Storage:

Implement saving of events to local storage or a backend service to persist events between page reloads.
Recurring Events:

Ability to create recurring events (daily, weekly, monthly) to handle repetitive tasks or events.
Desktop Notifications:

Add desktop notifications for event reminders to improve user experience beyond the browser.
Event Categories:

Allow users to categorize events by type (e.g., personal, work, reminders) for better organization.