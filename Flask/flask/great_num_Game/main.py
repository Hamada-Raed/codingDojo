from flask import Flask , render_template, request, redirect, session
import random

app=Flask(__name__)
app.secret_key='secret'

@app.route('/')
def index():
    if 'message' not in session:
        session["message"]=""
    if 'number' not in session:
        session['number']=random.randint(1,100)
    print (session['number'])
    if 'color' not in session:
        session['color'] = ''
    if 'counter' not in session: 
        session['counter'] = 15
   
    return render_template("index.html", message=session['message'], color =session['color'],counter= session['counter'])

@app.route('/guess', methods=['POST'])
def guess():

    guess=int(request.form['number'])
    if guess== session['number']:
        session['message']= "you win!"
        session['color'] = 'green'
    if guess > session['number']:
        session['message']= 'Too high guess lower'
        session['color'] = 'red'
    elif guess< session['number']:
        session['message']= 'Too low guess higer'
        session['color'] = 'red'
    
    session['counter'] -= 1 
    if session['counter'] <= 0:
        session['message']= "You lose"

    return redirect('/')


@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')

if __name__ == "__main__": 
    app.run(debug = True)

