import os
from datetime import timedelta
from dotenv import load_dotenv

load_dotenv()


class Config(object):
    DEBUG = False
    TESTING = False

    MONGO_URI = os.environ.get('DATABASE_URI')
    CLOUD_NAME = os.environ.get('CLOUDINARY_CLOUD_NAME')
    API_KEY = os.environ.get('CLOUDINARY_API_KEY')
    API_SECRET = os.environ.get('CLOUDINARY_API_SECRET')
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    DEBUG = True
