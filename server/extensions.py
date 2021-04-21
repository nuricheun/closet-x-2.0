from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt


mongodb = PyMongo()
bcrypt = Bcrypt()
jwtmanager = JWTManager()
connection_url = "mongodb+srv://nurijeon:JZlZiFI4j7UaWwYm@cluster0.oa7bv.mongodb.net/closet-x?retryWrites=true&w=majority"
