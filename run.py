import os
from server.app import create_app
app = create_app()
app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 5000))

# from extensions import config
# if __name__ == "__main__":
