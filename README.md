# Educational project for the course on automated testing

This project is a basic Node.js setup using Docker for running tests. The setup includes testing using Mocha and Chai. You can manage your Docker environment using the provided `Makefile`.

## Prerequisites

- Docker
- Docker Compose
- Make


## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/knyshse/znu-auto-tests.git
cd znu-auto-tests
```

### 2. Build the Docker Image

```bash
make up
```

### 3. Start the Docker Container

```bash
make bash
```
This will open an interactive bash session inside the container. From there, you can run tests using:
```bash
npm install  # nstall chai, mocha and mtrx libraries
```
```bash
npm test # run the tests
```

### Available Makefile Commands
* **build**: Build the Docker image.
* **rebuild**: Rebuild the Docker image without using the cache.
* **start**: Start the Docker container.
* **stop**: Stop the Docker container.
* **up**: Start the container in detached mode.
* **down**: Stop and remove the container.
* **bash**: Open an interactive bash session inside the running container.

