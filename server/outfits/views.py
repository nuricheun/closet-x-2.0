from flask import (Blueprint, session, request, url_for, current_app)
from ..extensions import mongodb
import jsonify

outfits_bp = Blueprint('outfits', __name__, url_prefix='/outfits')
outfits = mongodb.db.outfits


@outfits_bp.route('/<id>', methods=['GET'])
def get_outfit():
    outfit_param = request.args.outfit_id
    res = outfits.find_one_or_404(outfit_param)
    return 'get outfit'


@outfits_bp.route('/', methods=['GET'])
def get_outfits():
    res = outfits.find().sort([('timestamp', -1)]).limit(3)
    return 'get outfits'


@outfits_bp.route('/', methods=['GET'])
def add_outfit():
    img_url = ""
    requeset_data = request.get_json()
    user, title = requeset_data.values()
    newOutfit = {
        user: user,
        title: title,
        imageURL: img_url
    }
