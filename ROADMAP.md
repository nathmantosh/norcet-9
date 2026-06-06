# Project Roadmap 🗺️

This roadmap outlines the plan for the NORCET 9 AI Mock Test platform. Our focus is to build a high-utility, reliable, and accessible exam tool first, followed by more advanced community features.

---

## 📍 Near Term: Core Features & Content
* **Subject & Topic Tags:** Add taxonomy (e.g., Medical-Surgical, Pharmacology, Anatomy) to all questions for subject-wise performance analysis.
* **Structured Data:** Extract questions from TS files into JSON databases to make translation and user editing easier.
* **UI/UX Refinements:** Improve the responsive layout of the question grid on small mobile devices.
* **Basic Test Suite:** Add tests (using Vitest/React Testing Library) for scoring calculations, question marking logic, and exam timer completion.

## 📍 Medium Term: Local Storage & Analytics
* **Attempt History:** Allow users to save their score histories locally inside `localStorage` or `IndexedDB` to track progress over time.
* **Visual Dashboards:** Build a stats page displaying subject-wise progress using simple charts.
* **AI Medical Explainer:** Incorporate lightweight client-side AI integration to explain complex answers dynamically when clicked.

## 📍 Long Term: Platform Scale
* **Interactive Question Form:** Build a simple web-based form where educators can draft new questions and export/submit them without writing code.
* **Mock Result Export:** Allow students to export their performance reports as PDFs to share with educators or study groups.
* **Multi-language Support:** Add support for multiple regional languages, starting with Hindi.
