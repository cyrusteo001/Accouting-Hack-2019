# Accounting Hack 2019
Our working repository for accounting hack 2019

## File structure
- client: React frontend
- server: Document and Keyword server
- authentication: Authentication server

## APIs
#### GET users by username
- Search for users when logging in
- Request: `username, password`
- Response: 
```
{
    username: "johnlee97",
    firstName: "John",
    lastName: "Lee",
    password: "password",
    uuid: 123
}
```

#### POST create user
- Register user
- Request: `username, firstName, lastName, password`
- Reponse: 
```
{
    username: "johnlee97",
    firstName: "John",
    lastName: "Lee",
    password: "password",
    uuid: 123
}
```

#### GET documents by keyword
- Search for document by keyword
- Request: `keyword`
- Respone:
```
{
    title: "Document name",
    summary: "blah blah blah",
    upvote: 1000,
    downvote: 900,
    uuid: 123,
    url: "https://something"
    keywords: ["keyword 1", "keyword 2"]
}
```

#### GET documents by title
- Search for document by title
- Request: `title`
- Response:
```
{
    title: "Document name",
    summary: "blah blah blah",
    upvote: 1000,
    downvote: 900,
    uuid: 123,
    url: "https://something"
    keywords: ["keyword 1", "keyword 2"]
}
```

#### POST set upvote / downvote count
- Users upvote or downvote document count
- Request: `title, upvote (bool)` (if upvote is true, register as upvote, if false, register as downvote)
- Reponse: 
```
{
    title: "Document name",
    summary: "blah blah blah",
    upvote: 1000,
    downvote: 900, // UPDATED upvote / downvote count
    uuid: 123,
    url: "https://something"
    keywords: ["keyword 1", "keyword 2"]
}
```

#### GET related keywords by keyword
- Users can search for related keywords by keyword
- Request: `keyword`
- Response: 
```
{
    keyword: "accounting",
    relatedDocuments: [
        {
            title: "Document 1",
            url: "https://something",
        },
        {
            title: "Document 1",
            url: "https://something",
        }
    ],
    relatedKeywords: ["business", "audit"]
}