from flask import Flask , render_template 
app = Flask(__name__)

@app.route('/play')
def play(): 
    return render_template('level1.html')

@app.route('/play/<x>')
def play_times(x): 
    repeat = int(x)
    return render_template('level2.html', repeat = repeat)

@app.route("/play/<x>/<color>")
def box_color(x,color):
    repeat = (int(x))
    colorChange = color
    return render_template('level3.html', repeat = repeat, colorChange = colorChange )

if __name__ == "__main__":
    app.run(debug=True)