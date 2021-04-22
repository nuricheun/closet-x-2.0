from flask import (Blueprint, session, request, url_for, jsonify)
from flask_jwt_extended import jwt_required, get_jwt_identity
from bson.objectid import ObjectId
from bson.json_util import dumps
from ..extensions import mongodb
from ..file_upload import upload_file

items_bp = Blueprint('items', __name__, url_prefix='/api')
items = mongodb.db.items


@items_bp.route('/items', methods=['GET'])
def get_items():
    print("hiee??")
    output = items.find()
    return dumps(output)


@items_bp.route("/item", methods=["GET"])
def get_item():

    item_id = request.args.get(
        "id", default="606df9399413b4baccbb7b43", type=int)

    output = items.find_one({"_id": ObjectId(item_id)})

    if output == None:
        return jsonify({"msg": "Item doesn't exist"}), 404

    return dumps(output)


@ items_bp.route("/add", methods=["POST"])
@jwt_required()
def add_item():
    img_url = None
    currnet_user = get_jwt_identity()
    category = request.form["category"]
    color = request.form["color"]
    name = request.form["name"]
    file_to_upload = request.files["file"]

    if file_to_upload:
        img_url = upload_file(file_to_upload)

    new_item = {
        "user": currnet_user,
        "name": name,
        "color": color,
        "category": category,
        "imageURL": img_url
    }

    item_id = items.insert(new_item)
    res = items.find_one_or_404({"_id": ObjectId(item_id)})

    return dumps(res)
