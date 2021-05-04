from flask import (Blueprint, request, jsonify)
from ..extensions import mongodb
from ..file_upload import upload_file
from bson.objectid import ObjectId
from bson.json_util import dumps
from flask_jwt_extended import jwt_required, get_jwt_identity

outfits_bp = Blueprint('outfits', __name__, url_prefix='/api')
outfits = mongodb.db.outfits


@outfits_bp.route('/outfits', methods=['GET'])
@jwt_required()
def get_outfits():
    res = outfits.find().sort([('timestamp', -1)]).limit(3)
    return dumps(res)


@outfits_bp.route('/outfit', methods=['GET'])
@jwt_required()
def get_outfit():
    outfit_param = request.args.get('outfitId', default=0, type=int)
    res = outfits.find_one_or_404({"_id": ObjectId(item_id)})
    return dumps(res)


@outfits_bp.route('/outfits', methods=['POST'])
@jwt_required()
def add_outfit():
    img_url = None
    current_user = get_jwt_identity()
    title = request.form['title']
    file_to_upload = request.form['image']

    if(file_to_upload):
        img_url = upload_file(file_to_upload)

    newOutfit = {
        "user": current_user,
        "title": title,
        "imageURL": img_url
    }

    outfit_id = outfits.insert(newOutfit)
    res = outfits.find_one_or_404({"_id": ObjectId(outfit_id)})

    return dumps(res)
