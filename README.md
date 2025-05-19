## Laravel Task Management App

Task Management App SPA built with Laravel 12, React, Inertia.js, Tailwind CSS, Vite, and MySQL.

## Features

- User Authentication
- Access & Manage only your tasks
- Create, read, update, and delete tasks
- Create, read, update, and delete categories
- Dashboard with simple task statics
- Filter by Status, Priority
- Sort tasks by due date, creation date
- Status changes on task list
- Pagination with filtered tasks
- Searching tasks & filter at same time
- Category tasks page
- Users can update name, mail address & password

## Technologies Used

- Backend: Laravel 12
- Frontend: React + Inertia + Tailwind CSS
- Database: MySQL

### Local System Requirements

Note : Project server-independent, you can use either Apache or Nginx if you prefer.

- An advice, Laragon - Apache server : fast & ready default configration.
- You can use any local workflow apps like : Herd, XAMPP, Laragon or Docker

## **Install & Initialization**

```bash
# Clone Repository
git clone https://github.com/altughf/task-app
```

### Back-End initialize

```bash
#1 : install back-end packages
cd your-repositories/task-app
composer install
```

### Front-End initialize

```bash
#2 : install front-end packages
cd your-repositories/task-app
npm install
```

## Workflow Configration

- Run your local server.
- You don't have to use migrations, demo_database in repository root folder.
- Access your MySQL server : Create a database named 'task-app' & import 'demo_database.sql' in repository.

- Important ! : Make sure your database & laravel .env file have same configration.

### Initalize Task App

```bash

# Initalize
npm run dev

# Finally, you can access task app with browser
```

### Optional Build

```bash
# You can take build for run on your php server without use vite.

npm run build
```

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
