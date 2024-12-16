def main():
    import mysql.connector
    
    mydb = mysql.connector.connect(
    host="mysql-carlost.alwaysdata.net",
    user="carlost",
    password="Papelito1*",
    database="carlost_berseeva2"
    )
    print(mydb)

    mycursor = mydb.cursor()
    
    sql = "UPDATE USUARIOS SET pass = 'Canyon123**' WHERE id = '1'"
    mycursor.execute(sql)
    mydb.commit()
    
    mycursor.execute("SELECT * FROM USUARIOS")
    myresult = mycursor.fetchall()  #Note: We use the fetchall() method, which fetches all rows from the last executed statement. 
    for x in myresult:
        print(x)
    print(mycursor.rowcount)

main()
