# Project Overview

This project is a static website that provides a detailed, interactive fuse box and relay diagram for a Volkswagen Jetta SE 2011. It's designed to be a quick reference for identifying fuses and their functions.

## Directory Overview

The directory contains the primary files for a simple, self-contained static website.

-   **`index.html`**: The main file for the website. It includes the HTML structure, CSS for styling, and JavaScript for basic interactivity (tabbed navigation).
-   **`README.md`**: A minimal readme file.
-   **`index_old.html`**: An older version of the `index.html` file, likely kept for backup or historical purposes.

## Usage

To use this project, simply open the `index.html` file in a web browser.

```bash
# On most systems, you can open the file directly
open index.html
# Or, on Linux
xdg-open index.html
```

There is no build process or compilation required. The website is self-contained in the `index.html` file.

## Development Conventions

The project uses standard HTML5, CSS3, and a small amount of JavaScript for simple DOM manipulation.

-   **Styling**: CSS is embedded within the `<style>` tags in the `<head>` of the HTML document. It uses a dark theme and a responsive layout that adapts to different screen sizes.
-   **Interactivity**: JavaScript is used to show and hide different sections of the page based on user clicks. The code is embedded within `<script>` tags at the end of the `<body>`.
