build:
	docker compose build

rebuild:
	docker compose build --no-cache

start:
	docker compose start

stop:
	docker compose stop

up:
	docker compose up -d --remove-orphans

down:
	docker compose down

bash:
	docker exec -it node-js-test /bin/bash