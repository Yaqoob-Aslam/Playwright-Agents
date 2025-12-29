# Comprehensive Test Plan for Conduit Application

## Application Overview

Conduit is a demo blogging platform where users can sign up, sign in, create and read articles, follow other users, favorite articles, and manage their profiles. This test plan covers all major functionalities including authentication, article management, user interactions, and settings.

## Test Scenarios

### 1. Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful Sign In

**File:** `tests/authentication/sign-in.spec.ts`

**Steps:**
  1. Navigate to the application
  2. Click on 'Sign in' link
  3. Enter valid email and password
  4. Click 'Sign in' button

**Expected Results:**
  - User is redirected to home page
  - Navigation shows user name and logout option

#### 1.2. Sign In with Invalid Credentials

**File:** `tests/authentication/sign-in-invalid.spec.ts`

**Steps:**
  1. Navigate to the application
  2. Click on 'Sign in' link
  3. Enter invalid email and password
  4. Click 'Sign in' button

**Expected Results:**
  - Error message 'email or password is invalid' is displayed

#### 1.3. Successful Sign Up

**File:** `tests/authentication/sign-up.spec.ts`

**Steps:**
  1. Navigate to the application
  2. Click on 'Sign up' link
  3. Enter unique username, email, and password
  4. Click 'Sign up' button

**Expected Results:**
  - User is redirected to home page
  - User is signed in

#### 1.4. Sign Up with Existing Email

**File:** `tests/authentication/sign-up-duplicate.spec.ts`

**Steps:**
  1. Navigate to the application
  2. Click on 'Sign up' link
  3. Enter existing email and new username/password
  4. Click 'Sign up' button

**Expected Results:**
  - Error message for duplicate email or username is displayed

#### 1.5. Logout

**File:** `tests/authentication/logout.spec.ts`

**Steps:**
  1. Ensure user is signed in
  2. Click on user name in navigation
  3. Click 'Logout' or similar option

**Expected Results:**
  - User is logged out
  - Navigation shows 'Sign in' and 'Sign up' links

### 2. Feed Management

**Seed:** `tests/seed.spec.ts`

#### 2.1. View Global Feed

**File:** `tests/feed/global-feed.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Ensure on home page
  3. Click 'Global Feed' if not active

**Expected Results:**
  - Global Feed tab is active
  - Articles from all users are displayed

#### 2.2. View Your Feed

**File:** `tests/feed/your-feed.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Ensure on home page
  3. Click 'Your Feed'

**Expected Results:**
  - Your Feed tab is active
  - Articles from followed users are displayed

#### 2.3. Filter Articles by Tag

**File:** `tests/feed/tag-filter.spec.ts`

**Steps:**
  1. Sign in to the application
  2. On home page
  3. Click on a tag in Popular Tags section

**Expected Results:**
  - Articles filtered by selected tag are displayed

#### 2.4. Pagination

**File:** `tests/feed/pagination.spec.ts`

**Steps:**
  1. Sign in to the application
  2. On home page with multiple pages
  3. Click on page number 2

**Expected Results:**
  - Next page of articles is loaded

### 3. Article Creation and Editing

**Seed:** `tests/seed.spec.ts`

#### 3.1. Create New Article

**File:** `tests/article/create-article.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'New Article'
  3. Fill in Article Title, description, body, and tags
  4. Click 'Publish Article'

**Expected Results:**
  - Article is created and displayed on home page
  - User is redirected to article page

#### 3.2. Create Article with Missing Fields

**File:** `tests/article/create-article-validation.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'New Article'
  3. Leave required fields empty
  4. Click 'Publish Article'

**Expected Results:**
  - Error messages for required fields are displayed

#### 3.3. Create Article with Tags

**File:** `tests/article/create-article-with-tags.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'New Article'
  3. Fill all fields including multiple tags
  4. Click 'Publish Article'

**Expected Results:**
  - Article is created with tags displayed

#### 3.4. Create Article with Markdown

**File:** `tests/article/create-article-markdown.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'New Article'
  3. Enter markdown in body field
  4. Click 'Publish Article'
  5. Verify rendered HTML on article page

**Expected Results:**
  - Article body renders markdown correctly

### 4. Article Interaction

**Seed:** `tests/seed.spec.ts`

#### 4.1. View Article Details

**File:** `tests/article/view-article.spec.ts`

**Steps:**
  1. Sign in to the application
  2. On home page
  3. Click on an article title

**Expected Results:**
  - Article page displays full content, author, date, tags

#### 4.2. Favorite Article

**File:** `tests/article/favorite-article.spec.ts`

**Steps:**
  1. Sign in to the application
  2. On article page
  3. Click 'Favorite Article' button

**Expected Results:**
  - Like count increases by 1

#### 4.3. Post Comment on Article

**File:** `tests/article/post-comment.spec.ts`

**Steps:**
  1. Sign in to the application
  2. On article page
  3. Enter text in comment field
  4. Click 'Post Comment'

**Expected Results:**
  - Comment appears below article

#### 4.4. Follow/Unfollow Author

**File:** `tests/article/follow-author.spec.ts`

**Steps:**
  1. Sign in to the application
  2. On article page
  3. Click 'Follow' or 'Unfollow' button next to author

**Expected Results:**
  - User is followed/unfollowed

### 5. User Profile Management

**Seed:** `tests/seed.spec.ts`

#### 5.1. View User Profile

**File:** `tests/profile/view-profile.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click on user name in navigation
  3. Select profile option

**Expected Results:**
  - Profile page shows user image, bio, follow button, articles

#### 5.2. View My Posts

**File:** `tests/profile/view-my-posts.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Go to profile page
  3. Ensure 'My Posts' tab is active

**Expected Results:**
  - User's articles are displayed

#### 5.3. View Favorited Posts

**File:** `tests/profile/view-favorited-posts.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Go to profile page
  3. Click 'Favorited Posts' tab

**Expected Results:**
  - Favorited articles are displayed

### 6. Settings

**Seed:** `tests/seed.spec.ts`

#### 6.1. Update Profile Settings

**File:** `tests/settings/update-profile.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'Settings'
  3. Update image URL, username, bio, email
  4. Click 'Update Settings'

**Expected Results:**
  - Profile information is updated

#### 6.2. Change Password

**File:** `tests/settings/change-password.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'Settings'
  3. Enter new password
  4. Click 'Update Settings'

**Expected Results:**
  - Password is changed successfully

#### 6.3. Logout from Settings

**File:** `tests/settings/logout-from-settings.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'Settings'
  3. Click 'Logout' button

**Expected Results:**
  - User is logged out

#### 6.4. Update with Invalid Email

**File:** `tests/settings/invalid-email.spec.ts`

**Steps:**
  1. Sign in to the application
  2. Click 'Settings'
  3. Enter invalid email
  4. Click 'Update Settings'

**Expected Results:**
  - Error for invalid email format
