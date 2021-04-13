from flask import (Blueprint, session, request, url_for, current_app)
from ..extensions import mongodb
from ..file_upload import upload_file
import jsonify

items_bp = Blueprint('items', __name__)
items = mongodb.db.items


@items_bp.route('/item/', methods=['GET'])
def get_item():

    print(request.args.get('id', default=1, type=int))
    return "item"


@items_bp.route('/items', methods=['GET'])
def get_items():
    return "items!"


@items_bp.route('/add', methods=['POST'])
def add_item():

    img_url = None
    request_data = request.form['category']
    file_to_upload = request.files['file']

    if file_to_upload:
        img_url = upload_file(file_to_upload)

    new_item = {
        # user: user,
        # name: name,
        # color: color,
        category: category,
        imageURL: img_url
    }

    item_id = items.insert(new_item)
    res = items.find_one_or_404({"_id": item_id})

    return res['_id']
