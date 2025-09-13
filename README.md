<a id="readme-top"></a>

<!-- SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License][license-shield]][license-url]

<br />
<div align="center">
  <a href="https://github.com/rhodge-hash/roys-dapp-template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Roys DApp Template</h3>
  <p align="center">
    A modern React template for rapidly building decentralized applications (DApps) with collaborative AI and real-time chat.
    <br />
    <a href="https://github.com/rhodge-hash/roys-dapp-template"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/rhodge-hash/roys-dapp-template/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/rhodge-hash/roys-dapp-template/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

---

## 🚀 Overview

**Roys DApp Template** jumpstarts your next decentralized web project with React, TypeScript, Vite, and modern UI/UX practices. It features integrated collaborative coding (Vibe Code), real-time chat, and dark mode, making it a powerful starting point for building robust DApps.

## 🏆 Main Features

- **Vibe Code**: AI-powered collaborative coding environment with screen sharing, suggestion display, and session management.
- **Real-time Chat**: Instant messaging, message history, and user presence indicators using WebSockets, PostgreSQL, and Redis.
- **Dark Mode**: Seamless theme switching with Tailwind CSS and next-themes.
- **Refined UI Components**: Modern, responsive, and accessible UI elements.

## 📦 Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Socket.IO](https://socket.io/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Redis](https://redis.io/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Radix UI](https://www.radix-ui.com/)

---

## 📖 Table of Contents

- [Overview](#overview)
- [Main Features](#main-features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Spec-Driven Development](#spec-driven-development)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Docker (for PostgreSQL and Redis)

### Installation

```bash
# Clone the repo
git clone https://github.com/rhodge-hash/roys-dapp-template.git
cd roys-dapp-template

# Install Frontend dependencies
cd src
npm install
cd ..

# Install Backend dependencies
cd backend
npm install
cd ..

cd backend-chat
npm install
cd ..
```

### Running the Application

```bash
# Start Docker services
docker-compose up -d postgres redis

# Start Vibe Code Backend
cd backend
npm start
cd ..

# Start Chat System Backend
cd backend-chat
npm start
cd ..

# Start Frontend
cd src
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

---

## 💡 Usage

- **Vibe Code Sessions**: Start a collaborative coding session and share your screen. See `src/pages/VibeCodeSession/`.
- **Chat**: Use the real-time chat for project collaboration. See `src/pages/Chat/`.
- **Theme Switcher**: Toggle dark/light mode from the UI.

For more examples, refer to the [Documentation](https://github.com/rhodge-hash/roys-dapp-template/wiki).

---

## 📁 Project Structure

```
.
├── backend/         # Vibe Code backend (AI, APIs)
├── backend-chat/    # Chat backend
├── docker-compose.yml
├── src/             # React frontend
│   ├── components/
│   ├── pages/
│   │   ├── VibeCodeSession/
│   │   └── Chat/
│   └── ...
├── specs/           # Spec-Driven Development artifacts
├── e2e/             # End-to-end tests
├── public/          # Static assets
├── README.md
└── ...
```

---

## 📝 Spec-Driven Development

Features are planned and built using detailed specifications found in the `specs/` directory. This ensures clarity and consistency throughout the development lifecycle.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

```bash
# Fork the repo
# Create a feature branch
git checkout -b feature/AmazingFeature
# Commit and push
git commit -m "Add AmazingFeature"
git push origin feature/AmazingFeature
```

Open a [Pull Request](https://github.com/rhodge-hash/roys-dapp-template/pulls).

---

## 📜 License

Distributed under the MIT License. See [`LICENSE.txt`](https://github.com/rhodge-hash/roys-dapp-template/blob/main/LICENSE.txt) for details.

---

## 📬 Contact

Roy Hodge  
[@RoyHodge](https://twitter.com/twitter_handle)  
rhodge@email.com

Project Link: [https://github.com/rhodge-hash/roys-dapp-template](https://github.com/rhodge-hash/roys-dapp-template)

---

## 🙏 Acknowledgments

- [Best README Template](https://github.com/othneildrew/Best-README-Template)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/rhodge-hash/roys-dapp-template.svg?style=for-the-badge
[contributors-url]: https://github.com/rhodge-hash/roys-dapp-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rhodge-hash/roys-dapp-template.svg?style=for-the-badge
[forks-url]: https://github.com/rhodge-hash/roys-dapp-template/network/members
[stars-shield]: https://img.shields.io/github/stars/rhodge-hash/roys-dapp-template.svg?style=for-the-badge
[stars-url]: https://github.com/rhodge-hash/roys-dapp-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/rhodge-hash/roys-dapp-template.svg?style=for-the-badge
[issues-url]: https://github.com/rhodge-hash/roys-dapp-template/issues
[license-shield]: https://img.shields.io/github/license/rhodge-hash/roys-dapp-template.svg?style=for-the-badge
[license-url]: https://github.com/rhodge-hash/roys-dapp-template/blob/main/LICENSE.txt
