# Scalzi

A clean, lightweight two-column WordPress theme designed for readability and simplicity.

## Overview

Scalzi is a responsive WordPress theme featuring a light color scheme, custom shortcodes, and modern styling. Built with simplicity in mind, it provides an elegant foundation for blogs and personal websites.

## Features

- Two-column responsive layout
- Light, minimal design aesthetic
- Custom shortcodes for enhanced content formatting
- Lightbox integration for images (FancyBox)
- Widget-ready sidebar
- Translation-ready with language file support
- Custom background support
- Post formats and sticky post support
- Threaded comments

## Requirements

- WordPress 4.0 or higher
- PHP 5.6 or higher
- Node.js (for development)

## Installation

1. Download or clone this repository
2. Upload the theme folder to `wp-content/themes/`
3. Activate the theme from the WordPress admin panel under Appearance > Themes

## Development Setup

Install dependencies:

```bash
npm install
```

Build assets with Gulp:

```bash
gulp
```

The build system includes:
- Stylus preprocessing
- CSS autoprefixing and minification
- JavaScript bundling with Webpack
- Live reload via BrowserSync

## Project Structure

```
scalzi/
├── build/          # Compiled assets
├── content/        # Content templates
├── css/            # Stylesheets
├── gulp/           # Gulp task definitions
├── inc/            # Theme includes and utilities
├── js/             # JavaScript files
├── src/            # Source files
├── functions.php   # Theme functions
├── header.php      # Header template
├── footer.php      # Footer template
├── sidebar.php     # Sidebar template
├── index.php       # Main template
└── style.css       # Theme metadata
```

## License

This project is licensed under the GPL v3.0 License. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) for details.

## Author

Naoya Yamashita ([@conao3](https://github.com/conao3))
