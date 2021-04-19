from flask import (Blueprint, session, request, url_for, current_app, jsonify)
from ..extensions import mongodb
from ..file_upload import upload_file


items_bp = Blueprint('items', __name__)
items = mongodb.db.items


@items_bp.route('/api/item/<id>', methods=['GET'])
def get_item():
    output = request.args.get('id', default=1, type=int)
    return jsonify(list(output))


@items_bp.route('/api/items', methods=['GET'])
def get_items():
    output = []
    for item in items.find():
        output.append({'name': item['name']})

    print(output)
    return jsonify(output)


@ items_bp.route('/api/add', methods=['POST'])
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
