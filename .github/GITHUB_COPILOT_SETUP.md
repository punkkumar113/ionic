# GitHub Copilot Setup Guide

This guide will help you set up and login to GitHub Copilot in Visual Studio Code to enhance your development experience with the Ionic Conference Application.

## Prerequisites

- Visual Studio Code installed on your computer
- An active GitHub account
- GitHub Copilot subscription (either individual, business, or enterprise)

## Step 1: Install the GitHub Copilot Extension

1. Open Visual Studio Code
2. Click on the Extensions icon in the Activity Bar on the left side (or press `Ctrl+Shift+X` / `Cmd+Shift+X` on Mac)
3. Search for "GitHub Copilot" in the Extensions Marketplace
4. Click on the "GitHub Copilot" extension by GitHub
5. Click the "Install" button

## Step 2: Login to GitHub Copilot

After installing the extension, you need to authenticate with your GitHub account:

1. Once the extension is installed, VS Code may automatically prompt you to sign in
2. If not prompted automatically, look for the GitHub Copilot icon in the status bar at the bottom of VS Code
3. Click on the GitHub Copilot icon or notification that says "Sign in to use GitHub Copilot"
4. VS Code will redirect you to GitHub's website in your default browser
5. On the GitHub authorization page:
   - Review the permissions requested by GitHub Copilot
   - Click "Authorize Visual Studio Code" to grant access
6. After authorization, you may be asked to confirm by entering your GitHub password
7. Once authorized, you'll see a success message and can close the browser tab
8. Return to VS Code - you should now be logged in to GitHub Copilot

## Step 3: Verify the Setup

To verify that GitHub Copilot is working correctly:

1. Open any TypeScript or JavaScript file in the project (e.g., `src/pages/login/login.ts`)
2. Start typing a comment or code
3. You should see gray text suggestions from GitHub Copilot as you type
4. Press `Tab` to accept a suggestion, or `Esc` to dismiss it

## Troubleshooting

### Not Seeing Suggestions

If you don't see any suggestions:

1. Check the GitHub Copilot status icon in the bottom-right status bar
2. Make sure it shows a checkmark (active) and not an error icon
3. Try reloading VS Code: `Ctrl+Shift+P` / `Cmd+Shift+P` → "Developer: Reload Window"

### Sign-In Issues

If you have trouble signing in:

1. Check that you have an active GitHub Copilot subscription
2. Visit https://github.com/settings/copilot to verify your subscription status
3. Try signing out and signing in again:
   - Click on the GitHub Copilot icon in the status bar
   - Select "Sign Out"
   - Click the icon again and select "Sign In"

### Extension Not Working

If the extension isn't working properly:

1. Make sure you have the latest version of VS Code
2. Update the GitHub Copilot extension to the latest version
3. Check the Output panel (`View` → `Output`) and select "GitHub Copilot" from the dropdown to see any error messages

## Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/editor/github-copilot)
- [Getting Started with GitHub Copilot](https://docs.github.com/en/copilot/getting-started-with-github-copilot)

## Using GitHub Copilot with This Project

GitHub Copilot can help you:

- Write Ionic components and pages faster
- Generate TypeScript code following Angular best practices
- Create test cases for your code
- Write documentation and comments
- Suggest fixes for errors and bugs

Happy coding with GitHub Copilot! 🚀
