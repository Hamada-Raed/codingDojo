from flask import Flask 
app = Flask(__name__) 

@app.route('/') 
def hello_world(): 
    return 'Hello World!' 

@app.route('/dojo')
def Dojo():
    return 'Dojo!'

@app.route('/hi/<name>')
def hi_name(name):
    return f'Hi {name.capitalize()}!'

@app.route('/repeat/<num>/<word>')
def say_word_num_of_time(num,word):
    int_num = int(num) 
    if type (int_num) == str: 
        return "Sorry!, No response. Try again"
    else: 
        return f"{word * int_num}"
    
if __name__ == "__main__":
    app.run(debug=True)