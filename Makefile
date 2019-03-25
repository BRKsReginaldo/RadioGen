dev:
	make database
	make backend
	make frontend

database:
	docker-compose up -d postgres

backend:
	docker-compose up -d app
	docker-compose exec app sudo composer install

frontend:
	docker-compose up -d frontend

art:
	docker-compose exec app php artisan ${c}

act:
	docker-compose exec ${c} bash
