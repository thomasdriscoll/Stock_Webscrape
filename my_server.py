from flask import Flask, flash, redirect, render_template, request, session, abort
import random

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def home ():
    return render_template('/index.html')

@app.route('/get_stock', methods = ['GET', 'POST'])
def scrape():
    print(request.get_json())
    return "my stock"
