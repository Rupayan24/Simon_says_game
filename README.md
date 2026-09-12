# Simon Says Game

A browser-based Simon Says memory game built with HTML, CSS, and vanilla JavaScript. Watch the sequence of colored buttons, then repeat it in the correct order. Each successful round adds one more color to the sequence, making the challenge progressively harder.

## Features

- Starts with a keyboard press or the first click.
- Generates a random color sequence for every level.
- Provides visual feedback for both the game sequence and player input.
- Tracks the highest level reached during the current page session.
- Shows a game-over message and resets the round after an incorrect move.
- Responsive layout designed for desktop and smaller screens.
- Uses semantic labels and accessible button descriptions for the game controls.

## How to Play

1. Open the game in a browser.
2. Press any key or click to start.
3. Watch the button that flashes.
4. Click the matching colored button.
5. Repeat the full sequence as it grows with each level.
6. Try to beat your highest score.

The game ends when a button is clicked out of order. Press any key or click again to start a new round.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

No frameworks, build tools, or external dependencies are required.

## Project Structure

```text
SimonSaysGame/
├── index.html   # Game markup and controls
├── style.css    # Layout, theme, animations, and responsive styles
├── app.js       # Game state, sequence generation, input handling, and scoring
└── README.md    # Project documentation
```

## Running Locally

Because this is a static web project, it can be run directly:

1. Download or clone the project.
2. Open `index.html` in a modern web browser.

For a smoother development workflow, open the folder in VS Code and use the Live Server extension, if installed.

## Scoring

The current level is used as the score. When the player makes a mistake, the game compares the completed level with the session's highest score and updates it when appropriate. Refreshing the page resets the highest score.

## Future Improvements

- Add sound effects for each color.
- Persist the highest score with `localStorage`.
- Add a restart button and difficulty settings.
- Improve keyboard controls for color selection.
- Add automated tests for sequence generation and answer validation.

## License

This project is intended for learning and personal practice. Add a license here if you plan to publish or distribute it.
