# Playwright-Agents Copilot Instructions

## Architecture Overview
This project provides AI-powered agents for end-to-end Playwright test automation:
- **Planner Agent** (`.github/agents/playwright-test-planner.agent.md`): Explores web applications and creates detailed test plans
- **Generator Agent** (`.github/agents/playwright-test-generator.agent.md`): Converts plans into executable Playwright test code
- **Healer Agent** (`.github/agents/playwright-test-healer.agent.md`): Debugs and repairs failing tests

Agents use MCP (Model Context Protocol) via `npx playwright run-test-mcp-server` for browser automation. The "why": Automates test creation to reduce manual coding while ensuring comprehensive coverage.

## Key Workflows
- **Test Planning**: Run `planner_setup_page` with seed file (e.g., `tests/seed.spec.ts`), explore UI via browser tools, save markdown plan to `specs/`
- **Test Generation**: Use `generator_setup_page` with plan, simulate user steps, output to `tests/**/*.spec.ts`
- **Test Healing**: Execute `npx playwright test`, debug failures with `test_debug`, edit code for fixes
- **CI/Debugging**: `npx playwright test --headed` for visual debugging; reports in `playwright-report/`

## Project-Specific Conventions
- **Test Structure**: `test.describe('Group', () => { test('name', async ({ page }) => { ... }) })` (see `tests/example.spec.ts`)
- **Seed Files**: Empty test templates in `tests/seed.spec.ts` for initial page setup
- **Plans**: Step-by-step markdown in `specs/` with assumptions, steps, expectations (no ordinals in names)
- **Selectors**: Prefer semantic: `page.getByRole('button', { name: 'Submit' })`; avoid brittle CSS/XPath
- **Assertions**: `await expect(page).toHaveTitle(/Regex/)` or `await expect(element).toBeVisible()`

## Integration Points
- **MCP Tools**: Browser actions (click, type, wait_for) and verifications (verify_text_visible, verify_element_visible)
- **Dependencies**: Playwright `@playwright/test` for core testing; no custom frameworks
- **Cross-Agent Communication**: Plans as markdown bridge planner output to generator input
- **External**: Runs against live web apps; no local servers assumed

## Examples
- Basic navigation: `await page.goto('https://example.com')`
- Element interaction: `await page.getByRole('link', { name: 'Get started' }).click()`
- Verification: `await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible()`