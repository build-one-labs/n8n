# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in the n8n repository.

## Build.one Fork Customizations

This is a fork of n8n maintained by Build.one. The following customizations
have been added:

### `.automation-hub/` - Custom Docker Image Build

This directory contains scripts and assets for building and publishing a
customized n8n Docker image branded as "Build.one - Automation Hub".

#### Scripts

- **`build.sh <version>`** - Builds the custom Docker image
  ```bash
  .automation-hub/build.sh n8n@1.26.0
  ```
  Installs dependencies, builds n8n, and creates a Docker image tagged as
  `docker.cloudsmith.io/buildone/repository/n8n-custom:<version>`

- **`push.sh <version>`** - Pushes the built image to Cloudsmith registry
  ```bash
  .automation-hub/push.sh n8n@1.26.0
  ```
  Requires `BUILDONE_USER` and `BUILDONE_TOKEN` environment variables

- **`startup.sh`** - Starts n8n with a pre-configured SQLite database
- **`shutdown.sh`** - Gracefully stops the running n8n process

#### Customization System

- **`custom/customize.sh`** - Main script that applies all branding changes:
  - Copies custom assets (logos, favicons) to `packages/editor-ui/public`
  - Replaces CSS color variables via `.ini` files
  - Updates page titles and i18n strings from "n8n" to "Build.one - Automation Hub"

- **`custom/replace.sh`** - Helper script for replacing SCSS variables
- **`custom/css/_primitives.ini`** - Custom primary color (HSL: 235, 48%)
- **`custom/css/_tokens.ini`** - Custom token overrides
- **`custom/assets/`** - Custom logos, favicons, and branding images

### `.circleci/` - CI/CD Pipeline

CircleCI configuration for automated builds and publishing.

#### Workflow: `build-publish-workflow`

Triggers on **tags only** (not branches). Uses the `build-defaults` context.

Jobs:
1. **publish** - Builds and pushes the custom Docker image
   - Uses `cimg/node:22.16.0` image
   - Runs `.automation-hub/build.sh` with the tag version
   - Runs `.automation-hub/push.sh` with the tag version

To publish a new version, create a git tag:
```bash
git tag n8n@1.x.x
git push origin n8n@1.x.x
```

### `.devcontainer/` - Development Environment

VS Code Dev Container / GitHub Codespaces configuration for local development.

#### Services (docker-compose.yml)

- **postgres** - PostgreSQL 16 database (user: postgres, password: password, db: n8n)
- **n8n** - Development container based on `n8nio/base:22`

#### Configuration (devcontainer.json)

- **Ports forwarded**: 8080, 5678
- **Post-create**: Installs pnpm dependencies and Claude Code CLI
- **Post-attach**: Builds n8n and starts the development server; launches Claude Code
- **Host requirements**: 4 CPUs, 16GB RAM, 32GB storage

#### Mounts

- Workspace files
- SSH keys from `~/.ssh`
- n8n config from `~/.n8n`

## Project Overview

n8n is a workflow automation platform written in TypeScript, using a monorepo
structure managed by pnpm workspaces. It consists of a Node.js backend, Vue.js
frontend, and extensible node-based workflow engine.

## General Guidelines

- Always use pnpm
- We use Linear as a ticket tracking system
- We use Posthog for feature flags
- When starting to work on a new ticket – create a new branch from fresh
  master with the name specified in Linear ticket
- When creating a new branch for a ticket in Linear - use the branch name
  suggested by linear
- Use mermaid diagrams in MD files when you need to visualise something

## Essential Commands

### Building
Use `pnpm build` to build all packages. ALWAYS redirect the output of the
build command to a file:

```bash
pnpm build > build.log 2>&1
```

You can inspect the last few lines of the build log file to check for errors:
```bash
tail -n 20 build.log
```

### Testing
- `pnpm test` - Run all tests
- `pnpm test:affected` - Runs tests based on what has changed since the last
  commit

Running a particular test file requires going to the directory of that test
and running: `pnpm test <test-file>`.

When changing directories, use `pushd` to navigate into the directory and
`popd` to return to the previous directory. When in doubt, use `pwd` to check
your current directory.

### Code Quality
- `pnpm lint` - Lint code
- `pnpm typecheck` - Run type checks

Always run lint and typecheck before committing code to ensure quality.
Execute these commands from within the specific package directory you're
working on (e.g., `cd packages/cli && pnpm lint`). Run the full repository
check only when preparing the final PR. When your changes affect type
definitions, interfaces in `@n8n/api-types`, or cross-package dependencies,
build the system before running lint and typecheck.

## Architecture Overview

**Monorepo Structure:** pnpm workspaces with Turbo build orchestration

### Package Structure

The monorepo is organized into these key packages:

- **`packages/@n8n/api-types`**: Shared TypeScript interfaces between frontend and backend
- **`packages/workflow`**: Core workflow interfaces and types
- **`packages/core`**: Workflow execution engine
- **`packages/cli`**: Express server, REST API, and CLI commands
- **`packages/editor-ui`**: Vue 3 frontend application
- **`packages/@n8n/i18n`**: Internationalization for UI text
- **`packages/nodes-base`**: Built-in nodes for integrations
- **`packages/@n8n/nodes-langchain`**: AI/LangChain nodes
- **`@n8n/design-system`**: Vue component library for UI consistency
- **`@n8n/config`**: Centralized configuration management

## Technology Stack

- **Frontend:** Vue 3 + TypeScript + Vite + Pinia + Storybook UI Library
- **Backend:** Node.js + TypeScript + Express + TypeORM
- **Testing:** Jest (unit) + Playwright (E2E)
- **Database:** TypeORM with SQLite/PostgreSQL/MySQL support
- **Code Quality:** Biome (for formatting) + ESLint + lefthook git hooks

### Key Architectural Patterns

1. **Dependency Injection**: Uses `@n8n/di` for IoC container
2. **Controller-Service-Repository**: Backend follows MVC-like pattern
3. **Event-Driven**: Internal event bus for decoupled communication
4. **Context-Based Execution**: Different contexts for different node types
5. **State Management**: Frontend uses Pinia stores
6. **Design System**: Reusable components and design tokens are centralized in
   `@n8n/design-system`, where all pure Vue components should be placed to
   ensure consistency and reusability

## Key Development Patterns

- Each package has isolated build configuration and can be developed independently
- Hot reload works across the full stack during development
- Node development uses dedicated `node-dev` CLI tool
- Workflow tests are JSON-based for integration testing
- AI features have dedicated development workflow (`pnpm dev:ai`)

### TypeScript Best Practices
- **NEVER use `any` type** - use proper types or `unknown`
- **Avoid type casting with `as`** - use type guards or type predicates instead
- **Define shared interfaces in `@n8n/api-types`** package for FE/BE communication

### Error Handling
- Don't use `ApplicationError` class in CLI and nodes for throwing errors,
  because it's deprecated. Use `UnexpectedError`, `OperationalError` or
  `UserError` instead.
- Import from appropriate error classes in each package

### Frontend Development
- **All UI text must use i18n** - add translations to `@n8n/i18n` package
- **Use CSS variables directly** - never hardcode spacing as px values
- **data-test-id must be a single value** (no spaces or multiple values)

When implementing CSS, refer to @packages/frontend/CLAUDE.md for guidelines on
CSS variables and styling conventions.

### Testing Guidelines
- **Always work from within the package directory** when running tests
- **Mock all external dependencies** in unit tests
- **Confirm test cases with user** before writing unit tests
- **Typecheck is critical before committing** - always run `pnpm typecheck`
- **When modifying pinia stores**, check for unused computed properties

What we use for testing and writing tests:
- For testing nodes and other backend components, we use Jest for unit tests. Examples can be found in `packages/nodes-base/nodes/**/*test*`.
- We use `nock` for server mocking
- For frontend we use `vitest`
- For E2E tests we use Playwright. Run with `pnpm --filter=n8n-playwright test:local`.
  See `packages/testing/playwright/README.md` for details.

### Common Development Tasks

When implementing features:
1. Define API types in `packages/@n8n/api-types`
2. Implement backend logic in `packages/cli` module, follow
   `@packages/cli/scripts/backend-module/backend-module.guide.md`
3. Add API endpoints via controllers
4. Update frontend in `packages/editor-ui` with i18n support
5. Write tests with proper mocks
6. Run `pnpm typecheck` to verify types

## Github Guidelines
- When creating a PR, use the conventions in
  `.github/pull_request_template.md` and
  `.github/pull_request_title_conventions.md`.
- Use `gh pr create --draft` to create draft PRs.
- Always reference the Linear ticket in the PR description,
  use `https://linear.app/n8n/issue/[TICKET-ID]`
- always link to the github issue if mentioned in the linear ticket.
