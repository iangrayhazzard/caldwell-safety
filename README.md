# Caldwell Foundation for Public Safety Website

A modern, responsive website built for the Caldwell Foundation for Public Safety, dedicated to creating safer communities through crime prevention, public safety initiatives, and victim support.

## 🎯 Purpose & Mission

The Caldwell Foundation for Public Safety is a Florida nonprofit corporation and tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code. The foundation focuses on:

- **Crime Prevention**: Advocating for stronger law and order policies
- **Mental Health Support**: Providing resources and counseling for victims of violent crime
- **Policy Initiatives**: Partnering with lawmakers to implement evidence-based public safety policies
- **Public Education**: Educating communities on crime prevention and justice promotion

## 🏗️ Technical Architecture

### Framework & Core Technologies
- **Next.js 15.3.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4.1.6** - Utility-first CSS framework
- **Motion 12.10.5** - Animation library (Framer Motion successor)

### UI Components & Design System
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Headless UI primitives for tooltips and other components
- **Lucide React** - Beautiful, customizable icons
- **Tailwind Variants** - Component variant management
- **Class Variance Authority** - Type-safe variant management

### Styling & Design
- **Custom Color Palette**: Navy-based theme with custom CSS variables
- **Typography**: Inter (sans-serif) and Playfair Display (serif) fonts
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Animations**: Smooth scroll effects, hover states, and entrance animations

## 📁 Project Structure

```
caldwell-safety/
├── app/                          # Next.js App Router
│   ├── event/                    # Event pages (empty directory)
│   ├── news/                     # News & media section
│   │   └── page.tsx             # News page with embedded videos
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Homepage with hero, efforts, and footer
├── assets/                       # Static assets and components
│   ├── icons/                   # Social media icon components
│   │   ├── facebook.tsx
│   │   ├── instagram.tsx
│   │   ├── tiktok.tsx
│   │   └── x.tsx
│   ├── images/                  # Brand assets (PNG files)
│   └── logos/                   # Logo components (SVG)
│       ├── icon.tsx             # Foundation icon
│       ├── logo.tsx             # Full logo
│       └── [other variants]
├── components/                   # Reusable components
│   ├── ui/                      # Base UI components
│   │   ├── button.tsx           # Button with variants
│   │   └── tooltip.tsx          # Tooltip component
│   ├── book-notification.tsx    # Floating book promotion
│   └── header.tsx               # Navigation header
├── lib/                         # Utilities
│   └── utils.ts                 # Utility functions
├── public/                      # Static files
│   ├── day-my-brother_1.png     # Book cover image
│   ├── DMBWM-Socials-FB.jpg     # Social media assets
│   └── gianno.jpg               # Profile images
└── [config files]              # Various configuration files
```

## 🎨 Design System

### Color Palette
- **Navy Scale**: Primary brand colors from navy-50 to navy-900
- **Accent Colors**: Defined through CSS variables for consistency
- **Semantic Colors**: Background, foreground, primary, and accent variants

### Typography
- **Headings**: Playfair Display (serif) for elegance and authority
- **Body Text**: Inter (sans-serif) for readability
- **Font Loading**: Optimized with Next.js font system

### Components
- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Elevated cards with shadows and rounded corners
- **Navigation**: Fixed header with smooth animations
- **Tooltips**: Accessible tooltips for additional information

## 📄 Key Pages & Features

### Homepage (`/`)
- **Hero Section**: Large logo, mission statement, and call-to-action buttons
- **Our Efforts**: Four key focus areas with animated cards
- **Coming Soon**: Placeholder for future content
- **Footer**: Contact information, social links, and donation details
- **Book Notification**: Floating promotion for "The Day My Brother Was Murdered"

### News Page (`/news`)
- **Media Grid**: Embedded Fox News video content
- **Responsive Layout**: Adapts to different screen sizes
- **Expandable**: Ready for additional news content

### Components
- **Header**: Conditional navigation based on current page
- **Book Notification**: Animated floating card with book promotion
- **Social Icons**: Custom SVG components for social media platforms

## 🔧 Development Workflow

### Getting Started
```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Start production server
bun start

# Lint code
bun lint

# Format code
bun format
```

### Code Quality
- **Prettier**: Configured with custom rules for consistent formatting
- **ESLint**: Next.js recommended rules for code quality
- **TypeScript**: Strict mode enabled for type safety
- **Import Sorting**: Automatic import organization

### Development Tools
- **Turbopack**: Fast development builds with `--turbopack` flag
- **Hot Reload**: Instant updates during development
- **Type Checking**: Real-time TypeScript validation

## 🌐 External Integrations

### Donation System
- **Anedot Platform**: Secure donation processing
- **Tax Information**: 501(c)(3) compliance messaging
- **Tooltips**: Educational information about tax deductibility

### Social Media
- **Facebook**: @caldwellgianno
- **Instagram**: @GiannoCaldwell
- **TikTok**: @giannocaldwell
- **X (Twitter)**: @GiannoCaldwell

### External Links
- **Caldwell Institute**: https://caldwellinstitute.org
- **Book Purchase**: HarperCollins publisher link
- **News Content**: Embedded Fox News videos

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default styles, optimized for small screens
- **Tablet**: `sm:` prefix for medium screens
- **Desktop**: `md:` and `lg:` prefixes for larger screens

### Mobile Optimizations
- **Touch-Friendly**: Large tap targets and appropriate spacing
- **Performance**: Optimized images and lazy loading
- **Navigation**: Collapsible menu and simplified layouts

## 🚀 Performance & SEO

### Optimization Features
- **Next.js Image**: Automatic image optimization
- **Font Optimization**: Preloaded Google Fonts
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-rendered pages where possible

### SEO Configuration
- **Metadata**: Comprehensive title, description, and keywords
- **Structured Data**: Semantic HTML for better crawling
- **Social Sharing**: Open Graph and Twitter Card support

## 🔒 Security & Compliance

### Privacy & Legal
- **501(c)(3) Compliance**: Proper tax-exempt messaging
- **Donation Transparency**: Clear information about tax deductibility
- **External Links**: Proper `target="_blank"` and `rel` attributes

### Content Security
- **Trusted Domains**: Whitelisted external content sources
- **Secure Forms**: HTTPS-only donation processing
- **Input Validation**: Type-safe form handling

## 🎯 Future Enhancements

### Planned Features
- **Event System**: The `/event` directory is prepared for future event pages
- **Blog/News Expansion**: More news content and categories
- **Interactive Elements**: Enhanced user engagement features
- **Analytics Integration**: User behavior tracking

### Technical Improvements
- **Database Integration**: For dynamic content management
- **CMS Integration**: Content management system
- **API Routes**: Backend functionality for forms and data
- **Testing Suite**: Automated testing implementation

## 🤝 Contributing

### Development Guidelines
1. Follow the established code style (Prettier configuration)
2. Use TypeScript for all new components
3. Maintain responsive design principles
4. Test across different devices and browsers
5. Follow the component structure and naming conventions

### Code Style
- **Tabs**: 4-space indentation
- **Semicolons**: Disabled for cleaner code
- **Quotes**: Consistent quote usage
- **Import Order**: Automatic sorting with custom rules

## 📞 Contact & Support

- **Email**: info@caldwellsafety.org
- **Website**: This repository contains the main website
- **Institute**: https://caldwellinstitute.org

---

*Built with ❤️ for public safety and community support*