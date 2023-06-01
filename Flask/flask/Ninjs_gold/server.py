from flask import Flask , render_template, request, redirect, session
import random
import time
app = Flask(__name__) 
app.secret_key='secret'

@app.route('/')
def start():
    if 'gold' not in session: 
        session['gold'] = 0 
    if 'color' not in session:
        session['color'] =''
    if text not in session: 
        session['text']=''
    return render_template('index.html', gold=session['gold'], color=session['color'], text=session['text'])

@app.route('/collect_money', methods=['POST'])
def collect_money():
    
    method=request.form['building'] 
    if method == 'farm':
        amount = random.randint(10,20)
        text = f"earned {amount} golds from the Farm!"
        session['gold']+= amount
    elif method == 'cave': 
        amount = random.randint(5,10)
        text = f"earned {amount} golds from the Cave!"
        session['gold']+= amount
    elif method == 'house': 
        amount = random.randint(2,5)
        text = f"earned {amount} golds from the House!"
        session['gold']+= amount
    elif method == 'casino': 
        amount = random.randint(-50,50)
        text = f"earned {amount} golds from the Casino!"
        session['gold']+= amount 

    return redirect('/')




if __name__ == "__main__": 
    app.run(debug = True)

