from app import create_app
# from extensions import config

app = create_app()

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
