# Simple Lambda nodejs api project (AWS)

## Description
This is a simple nodejs api project to deploy a Lambda function and a API Gateway endpoint to access the Lambda function. This project uses the npm serverless framework https://serverless.com/   

The example endpoint simulates returning a list of a football teams recent result(s).

## Usage

Make sure you have and AWS account and have set up aws-cli with the credentials set.

Running the below in terminal will create 1 API Gateway and 1 Lambda function.

This endpoint is open to the public so remove the endpoint afer use to avoid paying for possible executions.

```
npm install -g serverless
```

```
git clone https://github.com/Shaun-Farrell/simple-lambda-nodejs-api.git
```

```
cd simple-lambda-nodejs-api
```
```
serverless deploy
```

To remove the AWS resources that were create run:

```
serverless remove
```

## Advantages of serverless
Pay per execution only pay for the compute power you use  
Reduce management of servers for installing security patches etc  
Easier to manage scaling as largely it is built in

## How to extend / scale this example
A typical expansion would be to add a new endpoint and add a
I plan to add advanced branch with some more details...
