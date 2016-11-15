-include ./.env
include ./.env.default

BIN_DIR ?= ./node_modules/.bin

help:
	@echo
	@echo "  \033[34mdev-server\033[0m  start dev server"
	@echo "  \033[34mfrontend\033[0m    start webpack dev server"
	@echo "  \033[34mstart\033[0m       start server and client"
	@echo "  \033[34mdist\033[0m        build the app"


dev-server:
	@supervisor --ignore frontend server/index.js | bunyan


frontend:
	@$(BIN_DIR)/webpack-dev-server --config ./webpack/dev.config.js --port ${WEBPACK_PORT} --host ${WEBPACK_HOST} --hot


start:
	@$(MAKE) dev-server & $(MAKE) frontend


dist: export NODE_ENV = production
dist:
	@$(BIN_DIR)/webpack --config ./webpack/prod.config.js --progress

.PHONY: help dev-server frontend start dist
