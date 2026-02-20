# Prabhu Teja Rompalli - Professional Portfolio

A modern, responsive portfolio website built with React.js showcasing the work and skills of Prabhu Teja Rompalli, a Data Scientist and Machine Learning Engineer specializing in AI/ML solutions.

![Portfolio Screenshot](https://i.ibb.co/fHPM38q/image.png)

## 🚀 Project Overview

This is a professional portfolio website designed to showcase technical expertise, projects, and professional experience in the field of Data Science and Artificial Intelligence. The portfolio features smooth animations, a modern UI, and comprehensive sections highlighting skills, work experience, and notable projects.

## ✨ Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark Mode**: Toggle between light and dark themes for optimal viewing experience
- **Smooth Animations**: Engaging animations using Framer Motion for enhanced user experience
- **Modern UI/UX**: Clean, professional design with intuitive navigation
- **Project Showcase**: Interactive project cards with detailed descriptions
- **Skills Display**: Comprehensive technical skills with visual icons
- **Experience Timeline**: Professional work experience with detailed achievements
- **Social Integration**: Direct links to GitHub and LinkedIn profiles

## 🛠️ Technology Stack

### Frontend
- **React 17.0.2**: Core JavaScript framework
- **React DOM**: DOM rendering for React
- **React Icons**: Icon library for UI elements
- **React Tooltip**: Tooltip components for enhanced UX

### Styling & Animation
- **Sass 1.97.3**: CSS preprocessor for advanced styling
- **Framer Motion 6.2.3**: Animation library for smooth transitions

### Development Tools
- **ESLint**: Code linting with Airbnb configuration
- **React Scripts**: Build and development tooling
- **Testing Library**: Jest and React Testing Library for unit testing

### External Services
- **Sanity CMS**: Headless CMS integration for content management
- **Sanity Image URL**: Optimized image handling

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar/          # Navigation bar component
│   ├── NavigationDots.jsx
│   ├── SocialMedia.jsx
│   └── index.js
├── container/           # Main page sections
│   ├── About/           # About section
│   ├── Experience/      # Work experience
│   ├── Footer/          # Footer component
│   ├── Header/          # Hero section
│   ├── Skills/          # Technical skills display
│   ├── Testimonial/     # Testimonials section
│   ├── Work/            # Projects showcase
│   └── index.js
├── constants/           # Constants and assets
│   ├── images.js        # Image imports
│   └── index.js
├── wrapper/             # HOCs for functionality
├── assets/              # Static assets (images, icons)
├── App.js               # Main application component
├── App.scss             # Global styles
├── client.js            # Sanity CMS client configuration
└── index.js             # Application entry point
```

## 🎯 Main Sections

### 1. Header/Hero Section
- Personal introduction with name and tagline
- Professional profile image
- Quick links to GitHub and LinkedIn
- Animated technology icons
- Call-to-action buttons

### 2. About Section
- Three key areas of expertise:
  - **Machine Learning**: Predictive models, time-series forecasting, ML pipelines
  - **Generative AI & LLMs**: LangChain, RAG pipelines, vector databases
  - **Computer Vision**: Real-time detection, OCR systems, YOLOv8

### 3. Experience Section
- Professional work history with detailed achievements:
  - **Data Science Intern** at Nufintech
  - **Data Science AI Consultant** at Rubixe AI Solutions
  - **Machine Learning Intern** at VXL IT Solutions
  - **Python Programming Intern** at Trylogic Soft Solutions

### 4. Projects Section
- Featured projects with interactive cards:
  - Employee Performance Analysis
  - Sentiment Analysis NLP
  - Math Routing Agent (Agentic RAG)
- Direct GitHub links for each project

### 5. Skills Section
- Comprehensive technical skills showcase:
  - **Programming**: Python, FastAPI
  - **ML/DL Frameworks**: TensorFlow, PyTorch, Scikit-Learn
  - **AI/LLM**: HuggingFace, LangChain, RAG, Generative AI
  - **Computer Vision**: YOLO, OpenCV
  - **Data Tools**: Power BI, Tableau, Excel
  - **Databases**: MongoDB, SQL
  - **DevOps**: Docker

## 🎨 Design Features

### Color Scheme
- Primary color scheme with light/dark mode support
- Professional color palette suitable for tech portfolio
- High contrast for accessibility

### Animations
- Smooth scroll animations using Framer Motion
- Hover effects on interactive elements
- Scale and fade transitions for enhanced UX
- Loading animations for better perceived performance

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop views
- Flexible grid layouts
- Touch-friendly interface elements

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prabhuteja124/Prabhuteja124.git
   cd project_professional_portfolio-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```
   REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id
   REACT_APP_SANITY_TOKEN=your_sanity_token
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deployment Options
The project can be deployed to various platforms:
- **Netlify**: Easy static site deployment
- **Vercel**: Optimized for React applications
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable cloud hosting

## 🧪 Testing

### Run Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
- Component testing with React Testing Library
- Jest for unit testing
- User interaction testing

## 📏 Code Quality

### ESLint Configuration
- Airbnb style guide
- React-specific linting rules
- Custom rules for project requirements

### Code Formatting
- Consistent indentation and spacing
- Proper JSX formatting
- Import/export organization

## 🔒 Security Considerations

- Environment variables for sensitive data
- HTTPS enforcement in production
- Content Security Policy implementation
- Sanitized user inputs

## 🚀 Performance Optimization

- **Code Splitting**: Lazy loading of components
- **Image Optimization**: Compressed images with proper formats
- **Bundle Size**: Optimized dependencies and tree shaking
- **Caching**: Proper cache headers for static assets

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- Touch-friendly navigation
- Responsive typography
- Optimized images for mobile
- Swipe gestures for project cards

## 🔮 Future Enhancements

- [ ] Blog integration
- [ ] Contact form with email functionality
- [ ] Advanced filtering for projects
- [ ] Internationalization (i18n)
- [ ] PWA capabilities
- [ ] Advanced analytics integration

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 About the Developer

**Prabhu Teja Rompalli** is a passionate Data Scientist and Machine Learning Engineer with expertise in:

- 🤖 **Artificial Intelligence & Machine Learning**
- 🧠 **Deep Learning & Neural Networks**
- 🔍 **Natural Language Processing**
- 👁️ **Computer Vision**
- 📊 **Data Analysis & Visualization**
- 🚀 **Full-stack AI Development**

### Connect
- **GitHub**: https://github.com/Prabhuteja124/Prabhuteja124
- **LinkedIn**: https://www.linkedin.com/in/prabhu-teja-29a484338/

---

## 📞 Contact

For collaborations, projects, or inquiries, feel free to reach out through the contact information provided in the portfolio or via LinkedIn.

---

*Built with ❤️ using React.js and modern web technologies*
