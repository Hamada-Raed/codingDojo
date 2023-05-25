from flask import Flask, session, redirect, render_template
import random 

app = Flask(__name__)
app.secret_key = 'p@p#p$p%p6'  # Set a secret key for encryption

@app.route('/')
def index_():
    session['guess_number'] = random.randint(1, 100)
    guess_num = session['guess_number']
    if  'massage' not in session:
        session['massage']=''

    return render_template ('index.html', massage =session['massage'] ) 

@app.route('/check', methods=["post"])
def guess(): 
    num_form_form = int(request.form['num']) 
    
    if num_form_form == guess_num: 
        massage = 'Right' 

    elif num_form_form < guess_num:
        massage= 'low'
    
    elif num_form_form > guess_num:
        massage = 'high'


    redirect('/')




if __name__ == '__main__':
    app.run(debug=True)