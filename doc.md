## Classes

<dl>
<dt><a href="#Tree">Tree</a></dt>
<dd><p>Main class</p>
</dd>
<dt><a href="#Node">Node</a></dt>
<dd><p>A node inside a tree. Nodes are created by instances of <a href="#Tree">Tree</a>; do not use this constructor to create Nodes!</p>
</dd>
</dl>

<a name="Tree"></a>

## Tree
Main class

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| root | [<code>Node</code>](#Node) | The root [Node](#Node) of the tree |


* [Tree](#Tree)
    * [new Tree([nodes])](#new_Tree_new)
    * [.getNode([id])](#Tree+getNode) ⇒ [<code>Node</code>](#Node)
    * [.createNode([title], [content])](#Tree+createNode) ⇒ [<code>Node</code>](#Node)
    * [.deleteNode(node, recursive)](#Tree+deleteNode)
    * [.import(nodes)](#Tree+import)
    * [.export()](#Tree+export) ⇒ <code>string</code>

<a name="new_Tree_new"></a>

### new Tree([nodes])
Create a new tree or import one


| Param | Type | Description |
| --- | --- | --- |
| [nodes] | <code>string</code> \| <code>Array</code> | Nodes to be imported. If a string is provided, it will be parsed as JSON. If no value is provided, a new Tree with a root [Node](#Node) will be created. |

<a name="Tree+getNode"></a>

### tree.getNode([id]) ⇒ [<code>Node</code>](#Node)
Takes a Node ID and returns the corresponding node.

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: [<code>Node</code>](#Node) - The Node that got got  

| Param | Type | Description |
| --- | --- | --- |
| [id] | <code>number</code> | Node ID |

<a name="Tree+createNode"></a>

### tree.createNode([title], [content]) ⇒ [<code>Node</code>](#Node)
Creates a new [Node](#Node) in the tree.

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: [<code>Node</code>](#Node) - The created Node  

| Param | Type | Description |
| --- | --- | --- |
| [title] | <code>string</code> | Node title. Defaults to ''. |
| [content] | <code>string</code> | Node content. Defaults to ''. |

<a name="Tree+deleteNode"></a>

### tree.deleteNode(node, recursive)
Deletes passed node from the tree.

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| node | [<code>Node</code>](#Node) \| <code>number</code> |  | The [Node](#Node) to be deleted or its ID |
| recursive | <code>boolean</code> | <code>false</code> | If set to true, child nodes will also be deleted. If set to false, existing child nodes will throw an error. Defaults to false. |

<a name="Tree+import"></a>

### tree.import(nodes)
Imports a tree structure to replace the current one. If a string is provided, it will be parsed as JSON. This method is automatically called if an argument is provided to the Tree constructor.

**Kind**: instance method of [<code>Tree</code>](#Tree)  

| Param | Type | Description |
| --- | --- | --- |
| nodes | <code>string</code> \| <code>Array</code> | The Nodes to be imported. Typically parsed JSON. |

<a name="Tree+export"></a>

### tree.export() ⇒ <code>string</code>
Exports the nodes in the tree as a JSON string. Data of this type can later be imported to recreate the tree.

**Kind**: instance method of [<code>Tree</code>](#Tree)  
**Returns**: <code>string</code> - Nodes in JSON format.  
<a name="Node"></a>

## Node
A node inside a tree. Nodes are created by instances of [Tree](#Tree); do not use this constructor to create Nodes!

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | Node ID |
| title | <code>string</code> | Node title |
| content | <code>string</code> | Node content |
| children | [<code>Array.&lt;Node&gt;</code>](#Node) | Child Nodes |
| parent | [<code>Node</code>](#Node) | Parent Node |


* [Node](#Node)
    * [.appendChild(node)](#Node+appendChild)
    * [.removeChild(node)](#Node+removeChild)
    * [.createChild([title], [content])](#Node+createChild) ⇒ [<code>Node</code>](#Node)
    * [.deleteChild(node)](#Node+deleteChild)

<a name="Node+appendChild"></a>

### node.appendChild(node)
Appends the passed Node to this Node. If passed Node is child to another Node, it will be removed as a child from that one.

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| node | [<code>Node</code>](#Node) | the Node to be made child |

<a name="Node+removeChild"></a>

### node.removeChild(node)
Removes the passed Node as a child from this Node. The Node is *not* deleted from the [Tree](#Tree).

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| node | [<code>Node</code>](#Node) | the Node to be orphaned |

<a name="Node+createChild"></a>

### node.createChild([title], [content]) ⇒ [<code>Node</code>](#Node)
Creates a new Node in the [Tree](#Tree) and appends it as a child to this Node.

**Kind**: instance method of [<code>Node</code>](#Node)  
**Returns**: [<code>Node</code>](#Node) - The created Node  

| Param | Type | Description |
| --- | --- | --- |
| [title] | <code>string</code> | Node title. Defaults to ''. |
| [content] | <code>string</code> | Node content. Defaults to ''. |

<a name="Node+deleteChild"></a>

### node.deleteChild(node)
Removes the passed Node as a child from this Node and deletes it from the [Tree](#Tree).

**Kind**: instance method of [<code>Node</code>](#Node)  

| Param | Type | Description |
| --- | --- | --- |
| node | [<code>Node</code>](#Node) | the Node to be deleted |

