🪲 React Debugging Checkpoint
📋 Project Overview

This project is part of a debugging checkpoint activity designed to practice identifying and fixing common issues in a React application using React Developer Tools.
The app consists of simple components that demonstrate state, props, and component communication.

🎯 Objective

The goal of this project is to:

Use React Developer Tools to inspect components and their props/state.

Identify bugs (such as missing props or incorrect state usage).

Fix the issues and confirm that the app behaves as expected after debugging.

🧠 Learning Outcomes

By completing this checkpoint, you’ll learn how to:

Inspect React components in the browser.

Detect problems with props and state.

Debug using React Developer Tools.

Understand how data flows between parent and child components.

⚙️ Setup Instructions
1. Clone or Create the Project

If starting fresh:

npx create-react-app react-debug-checkpoint
cd react-debug-checkpoint

2. Run the Development Server
npm start


Your app will open in the browser at:

http://localhost:3000

🧩 Project Structure
src/
│
├── App.js          # Main component that renders Greeting and Counter
├── Greeting.js     # Displays a greeting message using a name prop
├── Counter.js      # Displays and updates a counter using state
└── index.js        # Entry point of the app

🧱 Component Summary
App.js

Holds two pieces of state: name and count.

Passes data to child components as props.

Initially had a bug where Greeting did not receive the name prop.

Greeting.js

Receives a prop name and displays “Hello, {name} 👋”.

Initially displayed “Hello, 👋” (undefined name) due to the missing prop.

Counter.js

Displays the count and allows increment, decrement, and reset using buttons.

🐞 Bug Identified

Issue:
Greeting component showed Hello, 👋 instead of Hello, Brian 👋.

Cause:
App.js forgot to pass the name prop to Greeting.

// Before debugging
<Greeting />


Fix:
Pass the name state as a prop.

// After debugging
<Greeting name={name} />

🔧 Debugging Process

Opened the app in the browser (npm start).

Installed React Developer Tools (Chrome extension).

Opened React tab in DevTools and inspected the component tree.

Clicked on <Greeting> and saw:

props: { name: undefined }


Identified the issue (missing prop).

Updated App.js to pass name correctly.

Verified the fix — app now displays Hello, Brian 👋.

🧪 Verification

After fixing:

The greeting displays the correct name.

All counter buttons work properly.

No major warnings or errors remain.
🧾 Final Output

After debugging, your app should display something like this:

React Debugging Checkpoint
Hello, Brian 👋
Count: 0
[Increment] [Decrement] [Reset]

🧰 Tools Used

React (Create React App)

React Developer Tools (Chrome Extension)

VS Code / Cursor

Git Bash or Terminal

🧑‍💻 Author

Brian Okech Wade
React Debugging Checkpoint Project
📅 October 2025
