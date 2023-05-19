from flask import Flask , render_template 
app = Flask(__name__)

@app.route('/play')
def play(): 
    return render_template('level1.html')

@app.route('/play/<x>')
def play_times(x):
    int_num = int(x)
    return render_template('level2.html', int_num = 14) 

@app.route('/play/<x>/<color>')
def play_times_color(x, color):
    int_num = int(x)
    return render_template('level2.html', int_num = 15 , color = 'red')

if __name__ == "__main__":
    app.run(debug=True)