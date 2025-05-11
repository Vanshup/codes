#Dynamic Search using AJAX from product catalog

from flask import Flask, render_template, request, jsonify
#flask to create the app, render_template to load HTML, request to read user input, jsonify to return jsonify

app = Flask(__name__)

products = [
    {"id": 1, "name": "Laptop"},
    {"id": 2, "name": "Smartphone"},
    {"id": 3, "name": "Headphones"},
    {"id": 4, "name": "Keyboard"},
    {"id": 5, "name": "Mouse"},
    {"id": 6, "name": "Speaker"},
    {"id": 7, "name": "Charger"}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    results = [p for p in products if query in p['name'].lower()]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)