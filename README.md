
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

1.first you need to install open ssl
2.go to bin folder under oppenssl folder where you install open ssl
3.finally run the below command(open command prompt from administrator) and you have  privatekey.pem and certificate.pem

openssl genrsa -out privatekey.pem 1024
openssl req -new -key privatekey.pem -out certrequest.csr -config c:\OpenSSL-win64\bin\openssl.cfg
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem

finally run the command 
npm run dev
launch the url https://localhost:3000

Note:Make sure in your system mnogodb installed.
