
# https_restapi_node_typescript
Step 1
Need to isntall package
1.npm install express
    @types/express
    mongodb
    mongoose
    nodemon
    ts-node
    typescript
    body-parser
    cors

step 2 .
self Generate private key and certificate

1.first you need to install openssl(https://slproweb.com/download/Win64OpenSSL_Light-1_1_0i.exe)

2.go to bin folder under oppenssl(C:\OpenSSL-Win64) and open command prompt(open command prompt from administrator) in same path

3.finally run the below command and you have  privatekey.pem and certificate.pem file in the bin folder

a===>openssl genrsa -out privatekey.pem 1024

b===>openssl req -new -key privatekey.pem -out certrequest.csr -config c:\OpenSSL-win64\bin\openssl.cfg

c===>openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

finally run the command 

npm run dev

launch the url https://localhost:3000

Note:Make sure in your system mnogodb installed.
