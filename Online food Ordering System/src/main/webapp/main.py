from flask import Flask, render_template, request,redirect


import mysql.connector as sqlcon


app = Flask(__name__)

@app.route('/')
def Home():
    return render_template("LaCasa.html")

@app.route('/Search', methods = ["POST"])
def Search():
    user = request.form["user"]
    password = request.form["pass"]
    customname = database(user,password)
    return render_template("LaComida.html",cust = customname[0])
    

def database(duser,dpassword):
    
    mycon = sqlcon.connect(host = "localhost", user = "root", passwd = "Unicorn@123", database = "cow")
    cursor = mycon.cursor()
    User = duser
    Pass = dpassword
    myscom1 = "select Customername from credentials where Username = (%s) AND  Password = (%s)"
    values = (User,Pass)
    cursor.execute(myscom1,values)
    custname = cursor.fetchall()
    return custname

@app.route("/order", methods = ["POST"])
def order():
    foodordered = request.form["hidden"]
    if request.form["hidden3"] == "bulkbro":
        quantity = request.form["Quantitytext"]
    else:
        quantity = request.form["hidden2"]
    return render_template("LaFinale.html", fo = foodordered,quan = quantity)





    
if __name__ == "__main__":
    app.run(debug=True)
