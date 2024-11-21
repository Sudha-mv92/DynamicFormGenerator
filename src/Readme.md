Form Generator App
A dynamic form generator built with React, TypeScript, and Tailwind CSS. This app allows users to create, preview, and submit forms, with built-in form validation, dark mode support, and the ability to copy or download form data in JSON format.

Features
Dynamic Form Generation: Create and preview forms based on a provided JSON schema.
Form Validation: Automatically validate form fields based on schema rules, including custom validation messages.
Dark Mode Support: Toggle between light and dark modes with full styling support.
Copy Form JSON: Copy the form schema to the clipboard for easy sharing.
Download Form Submissions as JSON: Download submitted form data in JSON format.
Technologies Used
React: A JavaScript library for building user interfaces.
TypeScript: A superset of JavaScript that adds static typing.
Tailwind CSS: A utility-first CSS framework for creating responsive designs.
React Hook Form: A library for handling form state and validation.
Ace Editor: A customizable code editor for JSON schema editing.
Getting Started
To get started with the project, follow these steps:

1. Clone the Repository
Clone the repository to your local machine.

2. Install Dependencies
Navigate to the project folder and install the required dependencies using npm or yarn.

3. Start the Development Server
Once the dependencies are installed, run the app locally to start the development server. You can view the app in your browser.


Usage
Create a Form: Provide a JSON schema describing the form fields, validation rules, and options (like text, select, and radio inputs). You can preview and edit this schema.
Submit Form: Users can fill in the form and submit the data. Upon submission, the data is logged to the console.
Copy Form JSON: You can click on the “Copy Form JSON” button to copy the form schema to the clipboard.
Download JSON Submission: After form submission, the data can be downloaded in JSON format.
Customizing the Form Schema
You can customize the form schema by modifying the schema object passed to the FormPreview component.

Dark Mode Support
The app includes a dark mode feature that can be toggled via the "Theme Toggle" button. The form, input fields, and validation messages automatically adjust based on the current theme.



