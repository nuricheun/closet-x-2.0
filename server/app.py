from flask import Flask
from flask_pymongo import PyMongo
from .extensions import mongodb, connection_url, bcrypt, jwtmanager
from datetime import timedelta
from flask_cors import CORS


def register_bp(app):
    from .users.views import users_bp
    from .items.views import items_bp
    from .outfits.views import outfits_bp
    from .error_handlers import error_handlers

    app.register_blueprint(items_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(outfits_bp)
    app.register_blueprint(error_handlers)


def create_app(config=None):
    app = Flask(__name__, static_url_path='', static_folder='frontend/build')
    CORS(app)  # Comment this on deployment
    app.config.from_object(config)
    app.config["MONGO_URI"] = connection_url
    app.config["JWT_SECRET_KEY"] = "heyheyhey"
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
    app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=30)

    mongodb.init_app(app)
    bcrypt.init_app(app)
    jwtmanager.init_app(app)

    register_bp(app)

    @app.route('/', methods=["GET"])
    def index():
        return app.send_from_directory(app.static_folder, 'index.html')

    @app.route('/favicon.ico', methods=["GET"])
    def favicon():
        return ""
        # return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

    @app.errorhandler(404)
    def not_found(e):
        return app.send_from_directory(app.static_folder, 'index.html')

    return app
