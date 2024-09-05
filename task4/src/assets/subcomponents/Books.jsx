import React from 'react'

const Books = ({books, active}) => {

    console.log(books);
    
    let linkList = ""
    for (const book of books) {
        linkList+= `<a class="list-group-item list-group-item-action" id="${book.title}" data-toggle="list" role="tab" aria-controls="${book.title}"> ${book.title}</a>`
    }

    let cols = "";
    for (const book of books) {
        cols+= `<div class="tab-pane fade show" id="${book.title}" role="tabpanel" aria-labelledby="${book.title}">${book.title}</div>`
    }

  return (
    <div class="row" key={active}>
        <div class="col-4">
            <div class="list-group" id="list-tab" role="tablist">
                {linkList}
            </div>
        </div>
        <div class="col-8">
            <div class="tab-content" id="nav-tabContent">
                {cols}
            </div>
        </div>
    </div>
  )
}

export default Books