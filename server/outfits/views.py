from flask import (Blueprint, session, request, url_for, current_app, jsonify)
from ..extensions import mongodb
from ..file_upload import upload_file
from bson.objectid import ObjectId
from bson.json_util import dumps

outfits_bp = Blueprint('outfits', __name__, url_prefix='/outfits')
outfits = mongodb.db.outfits


@outfits_bp.route('/<id>', methods=['GET'])
def get_outfit():
    outfit_param = request.args.get('outfitId', default=0, type=int)
    res = outfits.find_one_or_404({"_id": ObjectId(item_id)})
    return dumps(res)


@outfits_bp.route('/', methods=['GET'])
def get_outfits():
    res = outfits.find().sort([('timestamp', -1)]).limit(3)
    return dumps(res)


@outfits_bp.route('/', methods=['GET'])
def add_outfit():
    img_url = None
    title = request.form['title']
    file_to_upload = request.files['file']

    if(file_to_upload):
        img_url = upload_file(file_to_upload)

    newOutfit = {
        # user: user,
        "title": title,
        "imageURL": img_url
    }
    outfit_id = outfits.insert(newOutfit)
    res = outfits.find_one_or_404({"_id": ObjectId(outfit_id)})

    return dumps()
