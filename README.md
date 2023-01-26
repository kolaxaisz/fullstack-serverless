# Full Stack Serverless

## Chapter 1. Full Stack Development in the Era of Serverless Computing



### Different Implementations of Serverless :

- [Serverless Framework](https://www.serverless.com/)
[AWS Serverless Application Model (AWS SAM)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
  - SAM allows you to build serverless applications by defining the API Gateway APIs, AWS Lambda functions, and Amazon DynamoDB tables needed by your serverless application in YAML files. It uses a combination of YAML configuration and function code and a CLI to create, manage, and deploy serverless applications.
- [Amplify Framework](https://docs.aws.amazon.com/amplify/index.html)
- [Apex](https://apex.sh/up/), [Vercel](https://vercel.com/), [Cloudflare Workers](https://workers.cloudflare.com/), and [Netlify Functions](https://functions.netlify.com/).

### Introduction to AWS

#### [Amplify CLI](https://docs.amplify.aws/cli/)

Instead of a service-name approach (as used by the AWS Console and many other tools, like CloudFormation), the CLI takes a category-name approach. 

#### [Amplify client](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplify/index.html)

AWS SDK for JavaScript Amplify Client for Node.js, Browser and React Native.

#### [AWS AppSync](https://aws.amazon.com/appsync/)

AWS AppSync creates serverless GraphQL and Pub/Sub APIs that simplify application development through a single endpoint to securely query, update, or publish data. 

### Introduction to the AWS Amplify CLI

```shell
npm install -g @aws-amplify/cli
```

To create a new user and configure the CLI, you’ll run the configure command:

```shell
amplify configure
```

```shell
npx create-react-app amplify-app
cd amplify-app
npm install aws-amplify @aws-amplify/ui-react
amplify init
```

### Creating and Deploying Service

```shell
amplify add auth
```

```shell
amplify push
```