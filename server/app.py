from flask import Flask
from flask_pymongo import PyMongo
from .extensions import mongodb, connection_url


def register_bp(app):
    from .items.views import items_bp
    from .outfits.views import outfits_bp
    app.register_blueprint(items_bp)
    app.register_blueprint(outfits_bp)


def create_app(config):

    app = Flask(__name__)

    app.config.from_object(config)

    app.config["MONGO_URI"] = connection_url

    mongodb.init_app(app)
    register_bp(app)

    return app
