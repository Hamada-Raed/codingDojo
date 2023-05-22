from flask import Flask , render_template, request, redirect
from datetime import datetime
app = Flask(__name__) 

@app.route('/')
def display_main_page(): 
    return render_template('index.html')

@app.route('/checkout', methods=['post'])
def result():
    print("Got Post Info")
    print(request.form)
    Orange_from_form = request.form['Orange']
    Apple_from_form = request.form['Apple']
    Kiwi_from_form = request.form['Kiwi']
    name_form_form = request.form['name']
    id_form_form = request.form['id']
    date = str(datetime.now())
    total = (int(request.form['Orange']) + int(request.form['Apple']) + int(request.form['Kiwi']))
    return render_template ('result.html', Orange_on_form=Orange_from_form, Apple_on_form= Apple_from_form, Kiwi_on_form=Kiwi_from_form, name_on_form=name_form_form, id_on_form=id_form_form,date=date,Total=total)


if __name__ == '__main__':
    app.run(debug=True)