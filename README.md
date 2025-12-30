# Scalzi

A simple, lightweight WordPress theme featuring a clean two-column layout with a modern aesthetic.

## Overview

Scalzi is designed for bloggers and content creators who prefer a minimalist approach. The theme uses a light color palette and responsive design to ensure your content looks great on any device.

## Features

- Clean two-column layout
- Fully responsive design
- Custom shortcodes for enhanced content
- Built-in lightbox support (FancyBox)
- Translation-ready with language support
- Custom background options
- Threaded comments
- Post formats and sticky posts

## Requirements

- WordPress 4.0 or higher
- PHP 5.6 or higher

## Installation

1. Download or clone this repository
2. Copy the theme folder to `wp-content/themes/`
3. Activate the theme from the WordPress admin panel under Appearance > Themes

## Development

This theme uses Gulp as a build tool with Stylus for CSS preprocessing.

### Setup

```bash
npm install
```

### Build Tasks

```bash
gulp        # Run the default build task
```

The development workflow includes:
- Stylus compilation with autoprefixer
- CSS minification
- JavaScript bundling with Webpack
- Browser-sync for live reloading

## File Structure

```
scalzi/
├── content/          # Template parts
├── css/              # Compiled stylesheets
├── inc/              # Theme includes
│   ├── customizer.php
│   ├── extras.php
│   ├── jetpack.php
│   ├── shortcode.php
│   └── template-tags.php
├── js/               # JavaScript files
├── src/              # Source files (Stylus)
├── functions.php     # Theme functions
├── header.php        # Header template
├── footer.php        # Footer template
├── sidebar.php       # Sidebar template
└── style.css         # Theme metadata
```

## License

This project is licensed under the GPL v3.0 License. See the [LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html) for details.

## Author

Naoya Yamashita ([@conao3](https://github.com/conao3))
