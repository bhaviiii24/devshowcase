🧑‍💻 devshowcase
devshowcase is a modern full-stack web application designed to let developers present and manage their projects in a sleek, user-friendly interface. Whether you're building your portfolio or exploring others', devshowcase makes it easy and beautiful.


✨ Features
📝 Add and manage your software projects with rich details

🎨 Clean, responsive UI (no Tailwind used – pure CSS/SCSS or your custom styling)

🔍 Browse all projects with continuation pages for more exploration

💾 Projects saved in MongoDB with real-time feedback

🚀 Built with the MERN stack (MongoDB, Express, React, Node.js)

📸 Screenshots
Homepage	Add Project Page

🛠️ Tech Stack
Frontend

React

React Router

Axios

Custom CSS / SCSS / Styled-Components (no Tailwind!)

Backend

Node.js

Express.js

MongoDB with Mongoose

📂 Project Structure
devshowcase/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable components (Navbar, ProjectCard, etc.)
│       ├── pages/          # Main views (Home, AddProject, etc.)
│       └── App.js
├── server/                 # Express backend
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   └── index.js
├── .env
├── README.md
└── package.json


⚙️ Installation
Clone the repository and install dependencies:
git clone https://github.com/bhaviiii24/devshowcase.git
cd devshowcase

📦 Backend
cd server
npm i
node server.js

Create a .env file with:
PORT=5000
MONGO_URI=your_mongodb_connection_string

🌐 Frontend
cd client
npm install
npm start

🌍 API Endpoints
| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/api/projects` | Get all projects  |
| POST   | `/api/projects` | Add a new project |


✏️ To Do
 Add project categories/tags

 Enable project editing

 Add user authentication

 Deploy to Vercel/Render

🚀 Deployment
This project can be deployed using:

Frontend: Vercel or Netlify

Backend: Render or Railway


🙌 Contributing
Contributions are welcome! Feel free to fork the project and open a pull request.

📄 License
This project is licensed under the MIT License.

📫 Contact
Made with ❤️ by bhavika










