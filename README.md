# Simple Calendar Application

A simple React-based calendar application that allows users to view, add, and delete events. Events are managed and stored in the browser's local storage for persistence across page reloads.
Application Link: (https://66d82f9fa7edd4789770d76e--calendargrey.netlify.app/)

## Features

- **View Calendar**: Displays a monthly calendar with days.
- **Add Events**: Add events to specific days using a form.
- **Delete Events**: Remove events from specific days.
- **Local Storage**: Events are stored in local storage, ensuring they persist across page reloads.

## Getting Started

### Prerequisites

- Node.js (v14 or higher) and npm (or yarn) installed.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/simple-calendar.git
   cd simple-calendar
2. **Install Dependencies**:
   npm install
   
4. **Run the Application:**:
    npm start

Project Structure
1. src/: Contains the source code for the application.
   1.1 components/: Contains React components.
   1.2 Calendar.js: Calendar component that displays the days and events.
   1.3 EventForm.js: Form component for adding new events.
2. styles/: Contains CSS files for styling.
   2.1 app.css: Styles for the main application.
   2.2 calendar.css: Styles for the calendar component.
   2.3 eventform.css: Styles for the event form component.
3. App.js: Main application component that manages state and renders the calendar and event form.
Usage
1. Viewing Events: The calendar will display the current month. Days with events will be highlighted.

2. Adding Events: Click on a day to open the event form. Enter the event description and submit the form to add an event.

3. Deleting Events: Click the delete button (❌) on a day with an event to remove it.

Local Storage
Events are stored in local storage under the key events. This ensures that events persist across page reloads.

Contributing
1. Fork the Repository.

2. Create a New Branch:
   git checkout -b feature/your-feature
3. Commit Your Changes:
   git add .
   git commit -m "Add new feature"
4. Push to Your Fork:
   git push origin feature/your-feature
5. Create a Pull Request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
React for building user interfaces.
CSS for styling the application.
