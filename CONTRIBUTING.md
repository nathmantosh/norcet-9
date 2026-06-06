# Contributing

Thank you for helping improve NORCET 9 AI Mock Test. This project is most useful when nursing students, educators, and developers can review the content openly.

## Ways To Help

- Fix incorrect answers or weak explanations
- Add NORCET-style questions with clear rationales
- Improve accessibility and mobile usability
- Add tests for exam flow, scoring, and timers
- Improve docs for local setup and deployment

## Question Contributions

When adding or editing questions:

1. Keep the question clear and exam-focused.
2. Provide four options.
3. Mark exactly one correct answer.
4. Include a short explanation for why the answer is correct.
5. Mention a reliable reference when the correction is clinical or factual.

Questions live in `constants.ts` for now. A future roadmap item is to move the bank into structured data files so review becomes easier.

## Pull Request Checklist

- The app builds with `npm run build`.
- New or edited questions include explanations.
- Clinical corrections include a source when possible.
- UI changes work on mobile and desktop widths.
- The pull request explains what changed and why.

## Local Development

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Code Style

Follow the existing React + TypeScript style. Keep components small, prefer clear names, and avoid adding new dependencies unless they solve a real project need.
