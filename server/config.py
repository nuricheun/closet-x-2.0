import os


class Config:
    DATABASE_URI = "mongodb+srv://nurijeon:JZlZiFI4j7UaWwYm@cluster0.oa7bv.mongodb.net/closet-x?retryWrites=true&w=majority"
    cloud_name = os.environ.get('CLOUDINARY_CLOUD_NAME')
    api_key = os.environ.get('CLOUDINARY_API_KEY')
    api_secret = os.environ.get('CLOUDINARY_API_SECRET')


config = Config
