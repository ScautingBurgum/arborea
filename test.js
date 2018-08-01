const Tree = require('./arborea')

const tree = new Tree()
tree.root.title = 'R00t'
tree.root.content = 'Hello world!'

const node = tree.root.createChild('foo', 'bar')
tree.root.appendChild(node)

console.log(tree)
