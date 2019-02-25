
// need to set them to a variable so that we are able to print or return the values

function getFirstSelector(selector) {
  var sel = document.querySelector(selector)
//  console.log(sel)
  return sel
}


// Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
//  (`#` is used for IDs in selectors — but you knew that because you [read the docs][docs],
//  right? :) ). (Note that in `index.html` `#nested` and `.target` just
//  _happen_ to be `div`s. This method should work with arbitrary elements.)


function nestedTarget() {
  var selTwo = document.querySelector('#nested .target')
//  console.log(selTwo)
  return selTwo
}

//Define a function `deepestChild()` that pulls out the most deeply nested child
//  element from `div#grand-node`. (Remember, you can iterate over elements and call
//  `querySelector()` and `querySelectorAll()` on them. This is challenging to
//  implement correctly, but not beyond your ability!)

 function deepestChild() {
   var deep = document.getElementById('app').querySelector('#grand-node').querySelectorAll('div');
   var length = deep.length - 2
  // console.log(length)

   console.log(deep[length].innerHTML)
   return deep[length].innterHTML

//   return deep[length].innerHTML

  // console.log(deep[length].innerHTML)

  // for (var i = 0; i< deep.length; i++) {

   }

//   console.log(deep)







//Define a function `increaseRankBy(n)` that increases the ranks in all of the
//  `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`][parseint]
// needed to parseInt the position of the innerHTML before adding N
// used console.log to see what it was displaying and identifying issues

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')


  for (let i = 0; i < lis.length; i++) {
  //   var number = parseInt(lis[i].innerHTML, 10) + n)
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n)
    console.log(parseInt(lis[i].innerHTML, 10) + n)
 }
}
