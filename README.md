# Multi-Container Docker Setup: Nginx + Remix + SQLite

## Overview
This is a multi-container Docker setup featuring:
- **Nginx**: Proxies traffic to the Remix app.
- **Remix App**: The frontend application.
- **SQLite (sqldb)**: A database container with an `init.sql` script to set up a test user.

## Quick Start
### 1. Clone the repository:
```sh
git clone https://github.com/yeahitsmejayyy/nginx-remix-sqldb-dock>
cd nginx-remix-sqldb-dock>
```

### 2. Add your Remix app
Drop your Remix project into the `/remix-app/` directory. Ensure it builds successfully before proceeding.

### 3. Build and run containers:
```sh
docker-compose up --build
```

### 4. Test the setup:
- Verify API connection at: [http://localhost/api/test-db](http://localhost/api/test-db)

## File Structure
```
├── nginx/
│   ├── nginx.conf  # Nginx proxy configuration
├── remix-app/       # Drop your Remix app here
├── sqldb/
│   ├── data/       # SQLite database storage
│   ├── scripts/
│   │   ├── init.sql  # DB schema & test data
├── docker-compose.yml  # Docker services definition
├── Dockerfile.nginx  # Nginx container setup
├── Dockerfile.remix  # Remix app container setup
├── Dockerfile.sqldb  # SQLite database container setup
├── .gitignore
└── README.md
```

## Notes
- Ensure your Remix app builds successfully before running the containers.
- The `sqldb` container initializes with a test user (see `init.sql`).
- Static file serving can be enabled in `nginx.conf` if needed.

## Stopping Containers
```sh
docker-compose down
```

Now you're set up and ready to go!

