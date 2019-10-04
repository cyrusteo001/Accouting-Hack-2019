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
    uuid: "123"
}
```