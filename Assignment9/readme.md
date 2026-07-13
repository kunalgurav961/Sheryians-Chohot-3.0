# Productivity Dashboard

A polished, interactive productivity dashboard built with HTML, CSS, and JavaScript.

## Overview

This project is a modern dashboard interface designed to help users stay focused and organized during the day. It includes:

- **Todo List & Daily Goals**: add tasks, mark completion, highlight important items, and delete entries.
- **Daily Planner**: hourly note-taking from 6 AM to 10 PM, with saved planner entries.
- **Pomodoro Timer**: start, pause, and reset a 25-minute focus session.
- **Motivation Quote**: fetches inspirational quotes from a live API with graceful fallback quotes.
- **Weather Widget**: retrieves local weather using browser geolocation and Open-Meteo API.
- **Theme Settings**: switch between light and dark mode with persistent preferences.

## Features

- Responsive dashboard layout for quick navigation
- Smooth transitions between dashboard tools
- Local storage persistence for tasks, goals, planner notes, and theme choice
- Dynamic greeting and background based on the current time of day
- Live clock with current date and time
- Accessible button controls and interactive form handling

## Files

- `index.html` - main dashboard structure and tool screens
- `style.css` - layout, visual design, responsive styling, and theme support
- `script.js` - application logic, local storage, timer, weather, and quote fetching
- `readme.md` - project overview and usage instructions

## How to Use

1. Open `Assignment9/index.html` in your web browser.
2. Use the dashboard cards to access each tool.
3. Add tasks and goals, then manage them from the task panels.
4. Enter hourly notes in the planner section.
5. Start the Pomodoro timer to begin a focus session.
6. Click "New Quote" for fresh motivation.
7. Allow location access to get local weather details.
8. Toggle between light and dark mode using the theme setting.

## Notes

- The weather feature requires browser permission for location access.
- Data is stored in the browser's local storage and remains available after page refresh.
- The quote card uses a remote API but falls back to local quotes if the API request fails.

## Development

No build tools are required. This is a static frontend project.

To run it locally:

1. Open `Assignment9/index.html` directly in the browser.
2. Or serve the folder with a local HTTP server if needed for API or geolocation behavior.

## Credits

Created as part of Assignment 9 for Sheryians Chohot.
