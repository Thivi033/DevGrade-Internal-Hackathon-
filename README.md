Welcome to Internal Hackathon 2024
Setting up your environment
Solving the challenges
Getting support
References
Setting up your environment
This section helps you to understand the prerequisites required and how to work with the codebase. Please read through carefully and follow the instructions to understand the codebase of this project.

Prerequisites (Mandatory)
Installations of stable versions of Git, Node.js and npm are required on your computer. You must also be proficient in working with the aforementioned technologies.

Install Git

Install NodeJS 18.18.0

Recommended: To ensure seamless management of multiple Node.js versions on your machine, it is highly recommended to use a Node Version Manager (NVM).

    For Windows -: Download the .exe file
    Mac and Linux -: Refer this


For macOS users, it is recommended to prepend sudo to the installation commands to ensure they have the required permissions.

We recommend that you use Visual Studio Code and install the Live Server extension for a better developer experience.

Email Communication regarding Preparation and Execution
You will first receive an invitation email regarding the final day. This email will be sent either on the day of the final hackathon or beforehand. It will include a user guide, which we recommend reviewing carefully to familiarize yourself with the process.

At the scheduled time, you will receive another email notifying you that the hackathon has started. This email will contain a link to access the hackathon details. Please use the link to find the clone URL and the Git credentials to clone your repository. Note that each team will have a single repository assigned to them.

Clone the project to your local computer
The Git repository URL and credentials will be available at the start of the contest through a link.

Use Git to clone the project to the local development environment using the credentials that will be shared with the team leader.

git clone <repository-url>
Note for Windows users: Use cmd as the terminal to run commands.

Installing dependencies
Once you clone the project from your team's Git repository, run the following command to install dependencies.

npm install
Rename env file
The repository contains an environment configuration file. Please rename it to .env to follow standard conventions for environment variable management.

Validate if the environment is correctly setup
You can run the Sanity test file in the tests directory with the below command.

For Windows users,

npm test _sanity.test.js
Note: If you get an error while running this command, make sure you have set all the prerequisites correctly on your machine.

Setting up the development database
The following commands will create a SQLite database called main.sqlite3 in your root folder for development purposes. The migrate command deletes the existing database and creates a new one with the DB schema, whereas the seed command populates the DB with some initial data. These steps are required for running the application.

to recreate the database
npm run migrate
to populate initial data
npm run seed
If you do change db/seeds/** files, the database schema changes with migrations and it may break your test cases and the application. Therefore, ensure not to change or modify files within the db and tests directories.

Building and running the application
To start the server (without nodemon) use the following command:

npm start
Click on the index.html file and click on the option "Open with Live Server" as shown in the screenshot below.



Add .gitignore
You will have to note that the project code has no .gitignore file. Please add a .gitignore file with the following content.

node_modules
config/node_modules
.env
.idea
package-lock.json
.vscode
*.sqlite3
*.xml
It is advised that one member of your team create the file, commit, and push the .gitignore file to the remote repository with the following commands.

Commit and Push code to origin
git add .
git commit -m "adding .gitignore file"
git push
Then other team members can pull the changes from the remote repository to receive the .gitignore file to their local machines.

git pull
This is how you may use git to collaborate as a team to solve challenges.

Overview
ShopMaster E-commerce Challenge This is a half-built e-commerce web application with 5 challenges for you to complete. The project includes HTML, CSS, and JavaScript files for the client-side, as well as a simple Express server for the backend.

Features
Executing the Tests
Use the below commands to run the tests. When you FIRST run, all the tests except _sanity.test will fail. This is expected.

To run a single test file of a challenge:

npm test challenge01.test.js

As you complete the challenges, the respective test cases will be passed one by one. When you complete all the tasks of a challenge, all test cases of the respective challenge should pass. Every DevQuest challenge has a test case that you can run to validate the successful completion of the challenge.

Note: Test cases are not using the main.sqlite3 database. Every test case creates an isolated in-memory database.

Legitimacy of your solution
Any attempt to compromise the integrity of the contest will unconditionally disqualify your team. Therefore please ensure you avoid attempting:

Tampering files in the tests folder or config folder
Hard coding values or logic to pass the test without solving the challenge legitimately
Solving the challenges
You can now try out the challenges.

| Challenge 01 | Challenge 02 |

If your sanity test passes and you are able to run the application, now you can proceed to the challenges. All the challenges are documented in their own file. Please visit the links below, read them carefully, and get started solving them.

Happy Coding !
Getting support
There will be minimal to no support available on the context day. We are not in a position to clarify challenge descriptions on an individual basis. However, in case of a setting up the project need, you may contact the technical support team via a chat on WhatsApp (No support for technical doubts) to the phone number +94 70 583 4090.