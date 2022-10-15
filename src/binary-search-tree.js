const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root(){
    if (!this.tree) {
      return null;
    }
    return this.tree;
  }

  add(data){
    const newNode = new Node(data)
    if(!this.tree) {
      this.tree = newNode;
      return;
    }
    let currentNode = this.tree;
    while(currentNode){
      if(newNode.data < currentNode.data){
        if(!currentNode.left){
          currentNode.left = newNode;
          return;
        }
         currentNode = currentNode.left
      } else { 
        
          if(!currentNode.right){
            currentNode.right = newNode;
            return;
          }
           currentNode = currentNode.right

      } 
    }
  }

  has(data) {
    if (!this.tree) {
      return false;        
    }
    else {
      let t = this.tree;
      function hasData() {
        if (t.data === data) {
          return true;
        }
        else if (t.data > data) {
          t = t.left;
          if (!t) {
            return false;
          }
          else {
            return hasData();
          }
          
        }
        else {
          t = t.right;
          if (!t) {
            return false;
          }
          else {
            return hasData()
          }
        }
      }
      return hasData();
    }
  }

  find(data) {
    if (!this.tree) {
      return false;        
    }
    else {
      let t = this.tree;
      function hasData() {
        if (t.data === data) {
          return t;
        }
        else if (t.data > data) {
          t = t.left;
          if (!t) {
            return null;
          }
          else {
            return hasData();
          }
          
        }
        else {
          t = t.right;
          if (!t) {
            return null;
          }
          else {
            return hasData()
          }
        }
      }
      return hasData();
    }
  }

  remove(data) {
    
    this.tree = rem(this.tree, data)
    function rem(t, data) {
      if (!t) {
        return null;
      }
      else {
        if (t.data > data) {
          t.left = rem(t.left, data);
          return t;
        }
        else if (data > t.data) {
          t.right = rem(t.right, data);
          return t;
        }
        else {
          if (!t.left && !t.right) {
            return null;
          }
          else if (!t.left) {
            t = t.right;
            return t;
          }
          else if (!t.right) {
            t = t.left;
            return t;
          }

          let r = t.right
          while (r.left) {
            r = r.left;
          }
          t.data = r.data;
          t.right = rem(t.right, r.data);
          return t;
        }
      }
    }
  } 

  min() {
  
    if (!this.tree) {
      return null;        
    }
    else {
      let t = this.tree;
      while (t.left) {
        t = t.left;
      }
      return t.data;
    }
  }

  max() {
   
    if (!this.tree) {
      return null;        
    }
    else {
      let t = this.tree;
      while (t.right) {
        t = t.right;
      }
      return t.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};