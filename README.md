# Reggie AI

AI-native automation for internal audit work, specifically designed for NIST 800-53 change control documentation.

## Features

- **Landing Page**: Modern, professional design inspired by Oxus AI
- **Change Control Form**: Comprehensive form for NIST 800-53 change control documentation
- **PDF Generation**: Automatically generate professional PDF documents from form data
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Navigate to the home page to learn about Reggie AI
2. Click "Get Started" or navigate to `/change-control`
3. Fill out the NIST 800-53 Change Control form with your change information
4. Click "Generate Change Control PDF" to download your completed document

## Project Structure

```
reggie2/
├── app/
│   ├── change-control/
│   │   └── page.tsx          # Change control form page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── lib/
│   └── pdfGenerator.ts      # PDF generation logic
├── package.json
└── README.md
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **jsPDF**: PDF generation library

## License

© 2026 Reggie AI. All rights reserved.
