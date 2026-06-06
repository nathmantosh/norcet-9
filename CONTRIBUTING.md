# Contributing to NORCET 9 AI Mock Test 🤝

First of all, thank you for taking the time to contribute! This project is most useful when nursing students, educators, and developers can review the content and code openly.

---

## How Can I Contribute?

### 1. Adding or Correcting Questions 🩺
Questions are currently stored as static arrays in `src/constants.ts` (or `src/data/questions.json`). 
Each question follows this structure:

```typescript
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed index of options
  explanation: string;
  subject: string;
}
```

If you find a typo or an incorrect answer key:
1. Locate the question in `src/constants.ts` (or the questions JSON).
2. Edit the text or options.
3. Open a Pull Request referencing the correction. Please cite a trusted clinical reference (e.g., textbook name or official guidelines) in your PR description.

### 2. Improving the UI/UX & Engine 💻
* Follow clean coding patterns in TypeScript and React.
* Keep components reusable and styles responsive (test on mobile devices).
* Avoid adding large third-party dependencies unless they solve a critical project need.

---

## Pull Request Checklist

Before submitting your pull request, please ensure:
* [ ] The app builds cleanly with `npm run build`.
* [ ] New or edited questions include medical/nursing rationales.
* [ ] UI changes have been verified on mobile and desktop viewports.
* [ ] Your commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) format (e.g., `feat: add subject filter`, `fix: correct typo in anatomy questions`).

---

## Local Development Setup

To run the project locally:
```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build
```
