from flask import (Blueprint, session, request,
                   url_for, current_app, abort, jsonify)
from ..extensions import mongodb
from bson.objectid import ObjectId
from bson.json_util import dumps
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt


users_bp = Blueprint('users', __name__, url_prefix='/api')
bcrypt = Bcrypt()
users = mongodb.db.users


@users_bp.route('/current', methods=['GET'])
def get_current_user():
    return ''


@users_bp.route('/register', methods=['POST'])
def register():
    username = request.form["username"]
    email = request.form["email"]
    password = request.form["password"]

    email_found = dumps(users.find({"email": email}))

    if len(email_found) > 0:
        return jsonify({"msg": "Bad username or password"}), 401

    pw_hash = bcrypt.generate_password_hash(password)

    newUser = {
        "username": username,
        "email": email,
        "password": pw_hash
    }

    res = users.insert(newUser)
    return dumps(res)


@users_bp.route('/login', methods=['POST'])
def login():
    email = request.form["email"]
    password = request.form["password"]
    email_found = users.find({"email": email})

    if email_found.count() == 0:
        return "user information or password don't match"

    pw_hash = dumps(email_found)
    print(pw_hash)
    password_correct = bcrypt.check_password_hash(pw_hash, password)

    if not password_correct:
        return "user information or password don't match"

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)
