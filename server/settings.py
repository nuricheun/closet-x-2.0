import os


class Config(object):
    DEBUG = False
    TESTING = False
    DATABASE_URI = os.environ.get('DATABASE_URI')
    CLOUD_NAME = os.environ.get('CLOUDINARY_CLOUD_NAME')
    API_KEY = os.environ.get('CLOUDINARY_API_KEY')
    API_SECRET = os.environ.get('CLOUDINARY_API_SECRET')
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    DEBUG = True
