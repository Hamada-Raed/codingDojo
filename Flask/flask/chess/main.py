from flask import Flask, render_template 
app = Flask(__name__) 

@app.route('/')
def staticChess(): 
    return render_template('index.html')

@app.route('/<x>')
def dynamicChess_in_x(x):
    input_x = int(x)
    return render_template('index1.html' , input_x = input_x)

@app.route('/<x>/<y>')
def dynamicChess_in_x_y(x,y):
    input_x = int(x)
    input_y = int(y)
    return render_template('index2.html', input_x = input_x, input_y = input_y)

@app.route('/<x>/<y>/<color>/<color1>')
def dynamicChess_in_x_y_color(x,y,color,color1):
    input_x = int(x)
    input_y = int(y)
    input_color = color
    input_color1 = color1
    return render_template('index3.html', input_x=input_x, input_y=input_y, input_color1=input_color1, input_color2= input_color)

if __name__=="__main__":
    app.run(debug=True)