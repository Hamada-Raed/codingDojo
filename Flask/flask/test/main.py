from flask import Flask, session, redirect, url_for

app = Flask(__name__)
app.secret_key = 'p@p#p$p%p6'  # Set a secret key for encryption

@app.route('/')
def index():
    session['username'] = 'John'  # Storing data in the session = {dict}
    return redirect('index.html')

@app.route('/profile')
def profile():
    username = session.get('username')  # Retrieving data from the session
    return f'Welcome, {username}'

@app.route('/logout')
def logout():
    session.pop('username', None)  # Removing data from the session
    return 'Logged out successfully'

if __name__ == '__main__':
    app.run()