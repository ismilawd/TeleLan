import React from 'react'
import { render } from 'react-dom'
import './App.scss'
import MainWindow from './MainWindow.jsx';
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'root'
root.classList.add("root");
document.body.appendChild(root)

// Now we can render our application into it
render(<MainWindow></MainWindow>, document.getElementById('root'))
