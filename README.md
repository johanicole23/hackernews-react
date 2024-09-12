# Crawler for Hacker News

## This is the frontend for an application that displays news scraped from Hacker News. The project is built with React and uses Material-UI (MUI) for the user interface. The application allows filtering news based on the number of words in the titles.

### Functionalities

- **Display News Entries**: Shows a table with news entries fetched from the backend API.
- **Filter Buttons**: Provides buttons to filter the entries from the back, with 3 lists:
  - **Normal Entries**: Displays all news entries.
  - **Less than 5 Words**: Filters and displays news entries with titles containing five or fewer words.
  - **More than 5 Words**: Filters and displays news entries with titles containing more than five words.
- **Responsive Design**: The interface adapts to different screen sizes using Material-UI (MUI).
- **Visual Feedback**: Displays a loading spinner while the data is being fetched.

### Technologies
- **React**: Library for building user interfaces.
- **Material-UI (MUI)**: UI component library for React.
- **Axios**: HTTP client for making requests to the API.

### Commands in Terminal
1. Run `npm install`
2. Run `npm start`

### BackEnd Repository
`https://github.com/johanicole23/hacker-news-ts.git`
