from flask import Flask, send_from_directory
from flask_pymongo import PyMongo
from server.extensions import mongodb, connection_url, bcrypt, jwtmanager
from server.settings import Config, ProductionConfig
from datetime import timedelta
from flask_cors import CORS
import os


def register_bp(app):
    from server.users.views import users_bp
    from server.items.views import items_bp
    from server.outfits.views import outfits_bp
    from server.error_handlers import error_handlers

    app.register_blueprint(items_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(outfits_bp)
    app.register_blueprint(error_handlers)


def create_app():

    app = Flask(__name__, static_url_path='', static_folder='frontend/build')
    CORS(app)  # Comment this on deployment
    if app.config["ENV"] == "production":
        app.config.from_object("settings.ProductionConfig")
    else:
        app.config.from_object("settings.DevelopmentConfig")

    # app.config["MONGO_URI"] = connection_url
    # app.config["JWT_SECRET_KEY"] = "heyheyhey"
    # app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    # app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)

    print(app.config)

    mongodb.init_app(app)
    bcrypt.init_app(app)
    jwtmanager.init_app(app)

    register_bp(app)

    return app
