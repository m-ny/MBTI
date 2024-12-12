# MBTI Personality Test

This repository contains the codebase for the MBTI Personality Test project, hosted at [Take the Test](https://takethetest.vercel.app/). The application allows users to discover their Myers-Briggs Type Indicator (MBTI) personality type by completing a series of questions. The project is built with a focus on providing an intuitive and engaging user experience.

## Features
- **Interactive MBTI Test**: A series of questions designed to accurately identify the user's MBTI personality type.
- **Real-Time Results**: Immediate feedback and personality type classification upon completing the test.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Hosted on Vercel**: High-performance and globally accessible.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mannymarciano/MBTI.git
   cd MBTI
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Deployment
The application is deployed on Vercel. To deploy your own version:
1. Ensure you have a [Vercel account](https://vercel.com/).
2. Install the [Vercel CLI](https://vercel.com/cli):
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```

## File Structure
```
MBTI/
├── public/            # Static assets
├── src/               # Main source code
│   ├── components/    # Reusable UI components
│   ├── pages/         # Application pages
│   ├── styles/        # Global and component-specific styles
│   └── utils/         # Utility functions
├── .env.local         # Environment variables (not included in repo)
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Technologies Used
- **Frontend**: React, Next.js
- **Styling**: CSS Modules/Tailwind CSS (update if applicable)
- **Deployment**: Vercel

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspired by the Myers-Briggs Type Indicator.
- Built and maintained by [mannymarciano](https://github.com/mannymarciano).

## Feedback
If you have any feedback, please open an issue on [GitHub](https://github.com/mannymarciano/MBTI/issues) or reach out directly through the contact information provided on the website.

