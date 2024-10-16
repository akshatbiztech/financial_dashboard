# Financial Dashboard

<p align='center'>
  <img src='Financial Dashboard Screenshot.png' alt='Dashboard' height='400px' >
</p>

- Live Demo Link: https://invinciblesdashboard.onrender.com/

## Description

The Financial Dashboard is a web application that provides users with a clear picture of their account balances and transactions. Users can refresh the dashboard to see the latest account details, and it displays a total balance along with individual account balances for savings, checking, and investment accounts.

## Usage
- Upon loading the dashboard, users will see their greeting and the total account balances.
- Click the "Refresh" button to update the account information.

## Collaborators
- [Akshat Shah](https://www.connectwithakshat.me/)
- [Riddhi Sanghvi](https://github.com/riddhinsanghvi/)
- [Margarita Medinskaia](https://github.com/MarMedinskaia)

## Final Challenge Deliverables

- Link to User Stories, Wireframe & Video files - [Google Drive](https://drive.google.com/drive/folders/1V2CqowmQ50IfglTcZ2JOX8B1WFDAEMd8?usp=sharing)

## Features

- **User-Friendly Interface**: Simple and intuitive UI for easy navigation.
- **Dynamic Account Balances**: Fetches real-time account balances from an external API.
- **Refresh Functionality**: Users can refresh the data to get the most up-to-date account information.
- **Time-Based Greeting**: Displays a personalized greeting based on the time of day.

## Technologies Used

- **Frontend**: [React.js](https://react.dev/learn)
- **Styling**: [Tailwind CSS](https://v2.tailwindcss.com/docs)
- **Backend**: [Java SpringBoot](https://docs.spring.io/spring-boot/index.html)
- **APIs**: [RESTful API](https://restfulapi.net/)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Java JDK (version 8 or higher)

### Installation

Clone the repository:

```
git clone https://github.com/yourusername/financial-dashboard.git
```

#### Frontend

1. Navigate to the project directory:

```
cd financial-dashboard/client/frontend/src
```

2. Install the dependencies:
```
npm install
```

#### Running the Application
To start the development server, run:

```
npm start
```

The web-page should now be running at http://localhost:3000.

#### Backend

1. Navigate to the project directory:

```
cd financial-dashboard/server/backend
```

2. Install the dependencies:
```
mvn clean install
```

#### Running the Application
To start the development server, run:

```
mvn spring-boot:run
```

The application should now be running at http://localhost:8080.

### Changes to be made in the code

```
urls: {
    dashboard: {
      GET_ACCOUNT_BALANCE:
        "<LOCAL-HOST LINK>",
    },
  },
```
- [Refer to line 21](https://github.com/akshatbiztech/financial_dashboard/blob/main/client/frontend/src/App.jsx) and replace the link to http://localhost:8080 which is your local SpringBoot server.



