from flask import Blueprint

error_handlers = Blueprint('error_handlers', __name__)


@error_handlers.app_errorhandler(404)
def handle400(e):
    return {"Bad request, 404"}
