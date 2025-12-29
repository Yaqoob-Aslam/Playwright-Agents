# Article Creation Test Plan

## Application Overview

This test plan covers the functionality for creating new articles in the Conduit application. It includes logging into the application and publishing a new article with title, description, content, and tags.

## Test Scenarios

### 1. Article Creation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Create New Article

**File:** `tests/create-article.spec.ts`

**Steps:**
  1. Click on the 'New Article' link in the navigation
  2. Fill the 'Article Title' field with 'Test Article Title'
  3. Fill the 'What's this article about?' field with 'A brief description'
  4. Fill the 'Write your article (in markdown)' field with '# Test Article\n\nThis is the body of the article.'
  5. Fill the 'Enter tags' field with 'test, article'
  6. Click the 'Publish Article' button

**Expected Results:**
  - The page redirects to the newly created article page
  - The article title 'Test Article Title' is displayed
  - The article content is rendered correctly
  - The tags 'test' and 'article' are shown
  - The author name 'TestGen' is visible
