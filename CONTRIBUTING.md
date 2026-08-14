# Contributing to LadyBug

Thank you for your interest in contributing to LadyBug. Contributions of all sizes are welcome, including bug fixes, documentation, feature ideas, tests, and improvements to the user experience.

> [!IMPORTANT]
> LadyBug is an early-stage project and its contribution process is still being established. Before beginning substantial work, email [eurisotodev@gmail.com](mailto:eurisotodev@gmail.com) so we can discuss the idea and avoid duplicated or out-of-scope work.

LadyBug currently has one maintainer, so reviews and responses may take some time.

## Before You Begin

The project is currently focused on:

- A simple React interface for submitting prompts and displaying responses
- A lightweight C++ server connecting the frontend to Ollama
- Clear setup and contributor documentation for open source support
- A foundation for future self-hosting and Raspberry Pi support

You can report bugs, suggest features, improve documentation or accessibility, fix frontend or server issues, add tests, or help verify support across macOS and Linux. You can also simply make it your own!

Large features from the roadmap should be discussed before implementation. A contribution may work correctly and still be declined if it does not fit the project's current direction.

An FOSS mentor is also welcomed in helping prop this project up to an initial working release!

## Development Setup

Follow the instructions in the [README](README.md) to install the dependencies, build the frontend, and run the C++ server.

## Making and Testing a Change

Create a branch with a short, descriptive name:

```bash
git switch -c fix/response-parsing
```

Other examples:

```text
docs/improve-setup
feature/loading-state
test/query-endpoint
```

Keep each branch and pull request focused on one change.

There is no formal automated test suite yet. Before submitting your work:

- Make sure the React frontend builds
- Make sure the C++ server compiles
- Test your change manually
- Update the documentation when needed
- Do not commit credentials, personal data, model files, or build output

In your pull request, explain what you tested and mention anything you could not test.

## Opening an Issue

Check the existing issues first to see whether the bug or feature has already been reported.

### Reporting a Bug

Include:

- A clear title
- What you expected to happen
- What actually happened
- Steps to reproduce the problem
- Your operating system
- Relevant terminal or browser-console output
- Screenshots when useful

Remove passwords, API keys, personal information, and other sensitive data from logs and screenshots.

### Requesting a Feature

Explain the problem, your proposed feature, who it would help, and why it fits LadyBug. Feature requests may be postponed while the MVP is being completed. Please email the maintainer with such requests. 

## Submitting a Pull Request

As of now, PR's are reviewed and approved by the project's sole maintainer. Your pull request should:

- Have a clear title
- Explain what changed and why
- Link the related issue when one exists
- Explain how you tested the change
- Mention known limitations or unfinished work
- Include screenshots for visible interface changes
- Update relevant documentation

After submitting your pull request, email [eurisotodev@gmail.com](mailto:eurisotodev@gmail.com) so I know it is ready for review.

## AI-Assisted Contributions

AI-assisted contributions are allowed, but you are responsible for anything you submit.

If AI helped produce your contribution:

- Disclose it in the pull-request description
- If possible, share links to relevant AI threads
- Review and understand the generated code
- Test the resulting behavior yourself

## Good First Issues and Getting Help

A label glossary and curated good-first issues will be added as the project matures. The goal is to help new contributors understand the codebase and support the next generation of open-source contributors!

## Community Expectations

LadyBug does not have a separate `CODE_OF_CONDUCT.md` yet. In the meantime:

- Treat others with respect and patience
- Welcome contributors of different backgrounds and experience levels
- Give constructive feedback about the work, not the person
- Do not harass, discriminate against, or demean others
- Help maintain a supportive learning environment

Concerns may be reported privately to [eurisotodev@gmail.com](mailto:eurisotodev@gmail.com).

## Contributors and Project Membership

A contributor list, project roles, and a path toward membership or maintainership will be added as the community grows.

## Thank You

Thank you for helping build LadyBug. Bug reports, questions, documentation, and small fixes are just as valuable as large contributions. 