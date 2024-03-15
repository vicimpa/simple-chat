# Using .env
include .env
export $(shell sed 's/=.*//' .env)

all: install

PR=cd projects/prisma &&
CL=cd projects/client &&
SR=cd projects/server &&

install:
	${PR} npm install
	${CL} npm install
	${SR} npm install
