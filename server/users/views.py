from flask import (Blueprint, session, request,
                   url_for, current_app, abort, jsonify)
from ..extensions import mongodb, bcrypt
from bson.objectid import ObjectId
from bson.json_util import dumps
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity


users_bp = Blueprint('users', __name__, url_prefix='/api/users')
users = mongodb.db.users


@users_bp.route('/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity, fresh=False)
    return jsonify({"access_token": access_token})


@users_bp.route('/current', methods=['GET'])
def get_current_user():
    return ''


@users_bp.route('/register', methods=['POST'])
def register():
    user_info = request.get_json()
    username = user_info["username"]
    email = user_info["email"]
    password = user_info["password"]

    email_found = users.find_one({"email": email})

    if email_found:
        return jsonify({"msg": "User already exists"}), 401

    pw_hash = bcrypt.generate_password_hash(password)

    newUser = {
        "username": username,
        "email": email,
        "password": pw_hash
    }

    res = users.insert(newUser)

    access_token = create_access_token(identity=email)
    refresh_token = create_refresh_token(identity=email)

    return jsonify({"token": access_token, "refresh_token": refresh_token}), 200


@users_bp.route('/login', methods=['POST'])
def login():

    email = request.form["email"]
    password = request.form["password"]

    email_found = users.find_one({"email": email})

    if email_found == None or bcrypt.check_password_hash(
            pw_hash, email_found["password"]) == False:
        return "User information or password don't match"

    access_token = create_access_token(identity=email)
    refresh_token = create_refresh_token(identity=email)

    return jsonify({"token": access_token, "refresh_token": refresh_token}), 200
