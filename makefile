# Using .env
include .env
export $(shell sed 's/=.*//' .env)

PR=cd packages/prisma &&
CL=cd packages/client &&
SR=cd packages/server &&

# All
all: docker-up install
install: prisma-install server-install client-install prisma-push

# Prisma
prisma-install:
	${PR} npm install

prisma-push:
	${PR} npm run push
	${PR} cp -R node_modules/.prisma ../client/node_modules
	${PR} cp -R node_modules/.prisma ../server/node_modules

# Client
client-install:
	${CL} npm install

client-dev:
	${CL} npm run gql-watch | npm run dev

client-gql:
	${CL} npm run gql

client-build: client-gql
	${CL} npm run build

client-prod:
	${CL} npm run start

# Server
server-install:
	${SR} npm install

server-dev:
	${SR} npm run start:dev

server-build:
	${SR} npm run build

server-prod:
	${SR} npm run start:prod

# Docker
docker-up:
	docker compose up -d

docker-down:
	docker compose down
