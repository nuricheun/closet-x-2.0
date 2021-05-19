import os
from flask import send_from_directory
from app import create_app

app = create_app()


@app.route('/', methods=["GET"])
def index():
    print(app.static_folder, "are you here?")
    # print(filename=safe_join(app.static_folder, 'index.html'))
    # print(send_from_directory(app.static_folder, '/index.html'))
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/favicon.ico', methods=["GET"])
def favicon():
    return ""
    # return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')


# from extensions import config
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 5000))
