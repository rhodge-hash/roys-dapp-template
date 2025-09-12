## Project Members

### Frontend Team

- **Lead Developer**: alice_example@manta.network
- **Developers**: bob_example@manta.network, carol_example@manta.network

### Product Team

- **Product Designers**: pd_example@manta.network

### Design Team

- **Designers**: ui_example@manta.network

### Backend Team

- **Developers**: api_example@manta.network

### Smart Contract Team

- **Developers**: contract_example@manta.network

### QA Team

- **Testers**: qa_example@manta.network

## Project Resources

### PRD Links

- [Feature PRD](https://link-to-your-prd)

### Design Mockups

- [Main Design](https://link-to-design)

### Jira Progress

- [Epic 1](https://link-to-jira-epic-1)
- [Epic 2](https://link-to-jira-epic-2)

### Other Resources

- [Meeting Notes](https://link-to-meeting-notes)
- [API Documentation](https://link-to-api-docs)

## Current Development Focus

### Frontend Redesign Overhaul (Phase 1: Design Exploration & Conceptualization - Completed) (Phase 2: Component Library & Theming Refinement - Completed)

The project is undergoing a complete frontend redesign. Phase 1, focusing on design exploration and conceptualization, has been completed. Phase 2, focusing on component library and theming refinement, has also been completed.

Phase 1 involved:
- Researching modern DApp UI/UX trends and best practices.
- Developing conceptual wireframes and mockups for key application screens (Dashboard, Vibe Code Session, Chat Interface).
- Defining a refined color palette, typography, and iconography for both light and dark modes.
- Outlining a conceptual design system document.

Phase 2 involved:
- Evaluating existing UI components and determining which can be reused, modified, or need to be rebuilt.
- Implementing new or updated core UI components based on the design system (e.g., buttons, inputs, cards, navigation elements).
- Refining the `next-themes` integration and CSS variables in `src/index.css` to fully support the new color palette and dark mode.
- Ensuring responsiveness across various screen sizes.

### UI/UX Redesign and Dark Mode Implementation (Completed)

The initial UI/UX redesign, with a primary focus on implementing a dark mode theme, has been completed. This involved:
- Integration of `next-themes` for robust theme management.
- Creation of a reusable theme toggle component.
- Integration of the theme toggle into the application header.

### Feature Development

- **Vibe Code**: Implemented the AI Pair Programmer feature, including screen sharing and AI suggestion integration. (Completed)
- **Real-time Chat System**: Implemented a real-time chat system with message history and user presence, leveraging WebSockets, PostgreSQL, and Redis. (Completed)

### Recent Fixes

- Resolved build failure caused by missing `@radix-ui/react-dropdown-menu` dependency and `dropdown-menu.tsx` component.