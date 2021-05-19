from flask import Flask
from server.extensions import mongodb, bcrypt, jwtmanager
from flask_cors import CORS


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

    if app.config["ENV"] == "production":
        app.config.from_object("server.settings.ProductionConfig")
    else:
        CORS(app)  # Comment this on deployment
        app.config.from_object("server.settings.ProductionConfig")
    

    

    mongodb.init_app(app)
    bcrypt.init_app(app)
    jwtmanager.init_app(app)

    register_bp(app)

    return app
