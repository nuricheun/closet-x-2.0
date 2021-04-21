from flask import Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

util_bp = Blueprint('refresh', __name__)


@util_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token)
