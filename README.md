# Full Stack Serverless

## Chapter 1. Full Stack Development in the Era of Serverless Computing

Using modern tools, frameworks, and services like [Amazon Web Services (AWS)](https://aws.amazon.com/what-is-aws/) 
[Amplify](https://docs.amplify.aws/) and [Firebase](https://firebase.google.com/) (among others), a 
single developer can leverage 
their existing skill set and knowledge of a single framework and ecosystem (like JavaScript) to build scalable full stack applications complete with all of the features that would in the past have required teams of highly skilled backend and DevOps engineers to build and maintain.

### 1.1. - Modern Serverless Philosophy

How to most efficiently deliver business value with a focus on writing 
business logic, instead of coding supporting infrastructure for your business logic.

#### 1.1.1. - Characteristics of a Serverless Application

1. **Decreased operational responsibilities**

    - Spend less time managing infrastructure and spend more time building 
   features and delivering business value.

1. **Heavy use of managed services**

#### 1.1.2. - Benefits of a Serverless Architecture

_What are the advantages of building your application using serverless 
technologies, and why is serverless becoming so popular?_

1. Scalability
    - The cloud provider automatically scales your application, running the code in response to each interaction. 
    - In a serverless function, your code runs in parallel and individually processes each trigger
2. Cost
   - With FaaS, you’re billed based on:
     1. the **number of requests** for your functions, 
     2. the **time** it takes for your function code to execute, and 
     3. the **reserved memory** for each function.
3. Developer velocity
   Being able to spin up the types of features that are typical for most applications (e.g., databases, authentication, storage, and APIs) allows you to quickly focus on writing the core functionality and business logic for the features that you want to deliver.
4. Experimentation
5. Security and stability
6. Less code
   > **What has value is the feature that the code delivers, not the code itself.**


#### 1.1.3. - Different Implementations of Serverless :

- [Serverless Framework](https://www.serverless.com/)
  - The Serverless Framework utilizes a combination of a configuration file 
    (`serverless.yml`), `CLI`, and `function code` to provide a nice 
    experience for people wanting to deploy serverless functions and other AWS services to the cloud from a local environment.
  - 
- [AWS Serverless Application Model (AWS SAM)](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
  - SAM allows you to build serverless applications by defining the 
    - API Gateway APIs, 
    - AWS Lambda functions, and 
    - Amazon DynamoDB tables needed by your serverless application in YAML files. 
    - It uses a combination of YAML configuration and function code and a CLI to create, manage, and deploy serverless applications.
    - it is an extension of AWS CloudFormation
- [Amplify Framework](https://docs.aws.amazon.com/amplify/index.html)
  - The **CLI** allows you to create, configure, and deploy cloud services from the command line., 
  - The **Client library** allows you to connect to and interact with these cloud services from your web or mobile application.
  - The **toolchain** helps facilitate and speed development by doing things like generating code and serverless function boilerplates., and 
  - The **hosting platform** allows you to deploy your application to a live domain complete with atomic deployments, continuous integration (CI), continuous deployment (CD), custom domains, and more..
  - It enables not only features such as serverless functions and authentication, but also GraphQL APIs, machine learning (ML), storage, analytics, push notifications, and more.
- [Apex](https://apex.sh/up/), [Vercel](https://vercel.com/), [Cloudflare Workers](https://workers.cloudflare.com/), and [Netlify Functions](https://functions.netlify.com/).

### 1.2. - Introduction to AWS

#### 1.2.1. - About AWS

#### 1.2.2. - Full Stack Serverless on AWS

#### 1.2.3. - [Amplify CLI](https://docs.amplify.aws/cli/)

Instead of a service-name approach (as used by the AWS Console and many other tools, like CloudFormation), the CLI takes a category-name approach. 

##### 1.2.3.1 - [Amplify client](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-amplify/index.html)

AWS SDK for JavaScript Amplify Client for Node.js, Browser and React Native.

#### 1.2.3.2. - [AWS AppSync](https://aws.amazon.com/appsync/)

AWS AppSync creates serverless GraphQL and Pub/Sub APIs that simplify application development through a single endpoint to securely query, update, or publish data. 

### 1.3. - Introduction to the AWS Amplify CLI


#### 1.3.1. - Installing and Configuring the Amplify CLI

###### 1. Install amplify

```shell
npm install -g @aws-amplify/cli
```

###### 2. Configure it with an identity and access management (IAM) user in your AWS account.

```shell
amplify configure
```

#### 1.3.2. - Initializing Your First Amplify Project

###### 1. Create React or Vue project

- https://github.com/aws-amplify/amplify-ui#readme
- https://ui.docs.amplify.aws/
- https://ui.docs.amplify.aws/react/getting-started/installation

React:

```shell
npx create-react-app amplify-app
cd ./ch01/react/amplify-app
npm install aws-amplify @aws-amplify/ui-react
amplify init
```

Vue:
```shell
cd ./ch01/vue/
npm create vite amplify-app -- --template vue-ts
cd ./ch01/vue/amplify-app
npm install @aws-amplify/ui-vue aws-amplify
amplify init
```

```shell
# Some next steps:

# Show you what you've added already and 
# if it's locally configured or deployed
amplify status 

# will allow you to add features like user login or a backend API
amplify add <category>

#  will build all your local backend resources and 
#  provision it in the cloud
amplify push

# to open the Amplify Console and view your project status
amplify console

# will build all your local backend and frontend resources 
# (if you have hosting category added) and 
# provision it in the cloud
amplify publish

# Pro tip:
# Try 
amplify add api
# to create a backend API 
# and then
amplify push
# to deploy everything

```

When the initialization is complete...

You will have **two additional resources** 
created for you in your project: 

1. a file called `aws-exports.js` located in the `src` directory and 
2. a folder named `amplify` located in your root directory. 
   - This folder holds all of the _code_ and _configuration_ files for your 
   Amplify project. In this folder you’ll see **two subfolders**: 
     - the `backend`
       - This folder contains all of the local code for your project such as 
         - the _**GraphQL schema**_ for an AppSync API, 
         - the _**source code**_ for any serverless functions, and 
         - _**infrastructure as code**_ representing the current local status of the Amplify project.
     - `#current-cloud-backend` folders.
       - This folder holds the **_code_** and **configurations** 
         - that reflect what resources were deployed in the cloud with your last Amplify `push` command. 
         - It helps the CLI differentiate between the configuration of the resources already provisioned in the cloud and what is currently in your local backend directory

#### 1.3.3. - Creating and Deploying Your First Service

To create a new user and configure the CLI, you’ll run the configure command:

```shell
amplify configure
```

```shell
cd ./ch01/react/
npx create-react-app amplify-app
cd amplify-app
npm install aws-amplify @aws-amplify/ui-react
amplify init
```


To create a new service, you can use the `add` command from [Amplify](https://ui.docs.amplify.aws/vue/connected-components/authenticator)

```shell
amplify add auth
```

Follow the prompts to add authentication to your backend configuration.

```shell
amplify push
```

- https://docs.amplify.aws/
- https://ui.docs.amplify.aws/react
- https://ui.docs.amplify.aws/?platform=vue
- https://ui.docs.amplify.aws/vue/connected-components/authenticator

Test it out...

###### React

> `ch01/react/src/index.js`
```jsx
// ...
import { Amplify } from 'aws-amplify'
import config from './aws-exports'

Amplify.configure(config)
// ..
```

> `ch01/react/src/App.js`

```jsx
// ...
function App() {
  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>
              Hey {user.username}, welcome to my channel, with auth!
            </p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}
// ...
```

###### Vue

- <https://ui.docs.amplify.aws/vue/connected-components/authenticator>

#### 1.3.4. - Deleting the Resources

To remove an individual feature
```shell
amplify remove auth
```

Delete an entire Amplify project:

```shell
amplify delete
```