export function getLongestBookByAuthorName(authors, books, authorName) {


    let authorIndex = authors.findIndex(author => author.name === authorName)
    const authorId = authors[authorIndex].id;

    let maxValue = -1;
    let maxIndex = -1;

    console.log(books);
    
    
    for (let i = 0; i < books.length; i++) {        
        if (books[i].author_id == authorId && books[i].author_id && books[i].pages > maxValue) {
            maxValue = books[i].pages;
            maxIndex = i;
        }
    }
    
    if (maxIndex === -1) return "N/A"
    return books[maxIndex].title;
}