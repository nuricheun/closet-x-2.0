from flask import (Blueprint, session, request, url_for)
from ..extensions import mongodb
from ..file_upload import upload_file
from bson.objectid import ObjectId
from bson.json_util import dumps

items_bp = Blueprint('items', __name__, url_prefix='/api')
items = mongodb.db.items


@items_bp.route('/item', methods=['GET'])
def get_item():
    item_id = request.args.get(
        'id', default="606df9399413b4baccbb7b43", type=int)
    output = items.find_one({"_id": ObjectId(item_id)})
    return dumps(output)


@items_bp.route('/items', methods=['GET'])
def get_items():
    output = items.find()
    return dumps(output)


@ items_bp.route('/add', methods=['POST'])
def add_item():

    img_url = None
    category = request.form['category']
    color = request.form['color']
    name = request.form['name']
    file_to_upload = request.files['file']

    if file_to_upload:
        img_url = upload_file(file_to_upload)

    new_item = {
        # user: user,
        "name": name,
        "color": color,
        "category": category,
        "imageURL": img_url
    }

    item_id = items.insert(new_item)
    res = items.find_one_or_404({"_id": ObjectId(item_id)})

    return dumps(res)
