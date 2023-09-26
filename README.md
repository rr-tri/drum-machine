# React Drum Machine

![App Screenshot](./Screenshot.png)

A simple and interactive drum machine web application built using React. Play various drum sounds by clicking on the drum pads or using your keyboard.

## Table of Contents

- [React Drum Machine](#react-drum-machine)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Customization](#customization)
    - [Drum Pad Data](#drum-pad-data)
    - [Styles](#styles)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Demo

You can try out the live demo of the React Drum Machine app here: [Demo Link](https://your-demo-link-here.com)

## Features

- 9 clickable drum pads with unique audio clips.
- Play sounds by clicking on drum pads or using keyboard keys.
- Immediate sound playback even when the same key is pressed rapidly.
- Display shows the name of the triggered audio clip.
- Responsive and user-friendly design.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/rr-tri/drum-machine.git
   ```

2. Change to the project directory:

   ```bash
   cd drum-machine
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

To run the React Drum Machine app locally, use the following command:

```bash
npm start
```

The app will start and open in your default web browser at [http://localhost:3000](http://localhost:3000).

## Customization

You can customize the app by modifying the drum pad data and styles in the source code. The drum pad data is located in `components/DrumMachine.js`, and the styles are in `App.css`.

### Drum Pad Data

To add or change drum pad data, update the `drumPadsData` array in `components/DrumMachine.js`. Each entry includes the pad's ID, audio source, key trigger, and display text.

### Styles

You can customize the app's appearance by editing the CSS styles in `App.css`. Feel free to modify colors, fonts, and layout to match your preferences.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements to offer, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to the authors of the provided audio clips used in this project.
