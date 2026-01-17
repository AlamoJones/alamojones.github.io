# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static GitHub Pages website hosted at boswellspark.com. It contains a personal homepage with an image collage layout and sections for posts and games.

## Architecture

- **index.html**: Main landing page using absolute positioning for an image collage layout
- **style.css**: Global styles shared across all pages
- **posts/**: Blog posts section with individual HTML files
- **games/**: Games section (work in progress)
- **imgs/**: Image assets organized by page (e.g., imgs/index/)
- **CNAME**: Custom domain configuration for GitHub Pages

## Development

No build process required. Edit HTML/CSS files directly and push to deploy via GitHub Pages.

To preview locally, open any HTML file in a browser or run a local server:
```bash
python3 -m http.server 8000
```

## Layout Notes

The homepage (index.html) uses absolute pixel positioning for images rather than standard CSS layout. Images are positioned with explicit left/top coordinates to create a collage effect.
