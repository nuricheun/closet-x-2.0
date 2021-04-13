import os
# from cloudinary.config import update
from cloudinary.uploader import upload
from cloudinary.utils import cloudinary_url


def upload_file(file_name):

    upload_result = upload(file_name)
    return upload_result["url"]
