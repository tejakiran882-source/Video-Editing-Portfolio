# Video Editing Portfolio Website

A modern, responsive portfolio website designed to showcase video editing work. Features a clean, professional design with smooth animations and an intuitive user interface.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Portfolio Gallery**: Filterable grid layout to showcase video projects by category
- **Video Modal**: Click any portfolio item to view videos in a full-screen modal
- **Smooth Animations**: Modern CSS animations and transitions throughout
- **Contact Form**: Functional contact form for client inquiries
- **Modern UI**: Dark theme with gradient accents and professional styling

## Sections

1. **Hero Section**: Eye-catching landing area with call-to-action
2. **Portfolio**: Filterable gallery of video projects
3. **About**: Personal information and skills showcase
4. **Contact**: Contact information and inquiry form

## Getting Started

1. Open `index.html` in your web browser
2. Customize the content in `script.js` to add your own portfolio items
3. Replace placeholder images and video URLs with your actual work
4. Update contact information in `index.html`
5. Add your photo to the About section

## Customization

### Adding Portfolio Items

Edit the `portfolioData` array in `script.js`:

```javascript
{
    id: 1,
    title: "Your Project Title",
    category: "commercial", // Options: commercial, music, corporate, wedding, short-film
    description: "Project description",
    thumbnail: "path/to/thumbnail.jpg",
    videoUrl: "https://youtube.com/embed/VIDEO_ID", // YouTube/Vimeo embed URL
    tags: ["Tag1", "Tag2", "Tag3"]
}
```

### Updating Contact Information

Edit the contact section in `index.html`:
- Email address
- Phone number
- Location
- Social media links

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... other colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Google Fonts (Inter)

## License

Free to use and modify for personal and commercial projects.
