"""Simple flask application to test out react
"""
from flask import Flask, render_template

app = Flask(__name__)

@app.context_processor
def inject_debug():
    """Inject the debug status into the context
    """
    return dict(debug=app.debug)

@app.route('/')
def index():
    """Default route to get things started
    """
    return render_template('index.html')

@app.route('/admin')
def admin():
    """Admin route
    """
    return render_template('admin.html', title="Admin Page", active="admin")

@app.route('/client')
def client():
    """Client route
    """
    return render_template('client.html', title="Client Page", active="client")
