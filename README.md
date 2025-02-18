# Assigment

It is a website to showcase proficiency in Frontend developemnet.

## Features

- Interactive park map with different ride categories (Land, Water, Kids)
- Dynamic UI with smooth transitions and animations
- Responsive design
- Location selector with sub-menus
- Side drawer
- Ride detail cards with videos

## Tech Stack

- React.js - Frontend framework
- Tailwind CSS - Styling and UI components
- React Context API - State management
- React Icons - Icon library

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.22.x or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/sasaurabh11/jaggery_consulting.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
Jaggery-consulting/
├── public/
├── src/
│   ├── assets/           # Images, videos, and icons
│   ├── content/          # Content data
│   │   └── data.js
│   ├── context/          # React context files
│   │   └── AppContext.jsx
│   ├── pages/       # React components
│   │   ├── categorySidebar.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   ├── RideCard.jsx
│   │   ├── RideSection.jsx
│   │   └── SideDrawer.jsx
│   ├── App.jsx           # Main application component
│   └── index.js          # Entry point
├── .gitignore
├── package.json
└── README.md
```

## Component Details

### Navbar
The navigation bar with location selector and dropdown menus. Features a fixed position with high z-index to stay on top of other content.

### ParkCategories
Interactive component showing different park areas with smooth transitions. Includes a gradient background circle that changes based on the selected category.

### Ride & Rides
Components for displaying individual ride cards with videos and the container for multiple rides. Supports horizontal scrolling.

### SideDrawer
Navigation drawer that slides in from the right side to overlay other content.

## Styling

The project uses Tailwind CSS for styling with custom configurations for:
- Colors: Custom theme park colors including blues, ambers, and whites
- Animations: Smooth transitions for category changes and navigation
- Responsive design: Adapts to different screen sizes

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `build/` directory, ready to be deployed to a static hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Saurabh.