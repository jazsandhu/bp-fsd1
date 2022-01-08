# BrokerPocket - Technical Assessment - Entry

I will be giving information regarding my progression; completed tasks in parallel to complications and my analysis.

Application (AWS S3) URL: http://userprocessing-aws.s3-website-us-east-1.amazonaws.com/

## Completed Tasks
#### Based on BrokerPocket Documentation

- Reactjs application customized with Material-UI library components
- Reactjs form to collect data
- Hosted web application on AWS S3
- Functional Lambda function & API Gateway implementation to retrieve MongoDB list of users and display them through Reactjs application
- Created and configured MongoDB collection for Users
- MongoDB collection contains multiple unique records for entries
- Lambda functions execute logs to CloudWatch Logs
- CloudWatch Logs have 30 day retention policy
- IAM roles and policies created
- API Gateway has 2 stages - Dev & Prod

## Incompleted Tasks
#### Based on BrokerPocket Documentation

- API path for '/save' incomplete - Complications with API Gateway CORS policy & Mapping Template wiping parameters being passed from Reactjs. 
  - Reactjs form & functionality complete. Lambda function complete with successful inserts of records to MongoDB collection. 
- Functional API path for single record retrieval '/id/id_value'

## Further Complications and Comments

- CORS policy held me back a number of hours. Went through it once with displaying all records, fixed it without full understanding. Happened again when saving new users to the database. 
  - Realized both were from API Gateways configurations and solved by checking off OPTIONS, DEFAULT 4XX & DEFAULT 5XX.
- Figuring out how to install dependencies and initializing npm in Lambda.
  - Solved by created a new folder to do these configurations through Visual Studio CLI. Placed the files into a zipped folder and uploaded it to my Lambda function after.
- I created multiple Lambda functions to separate/modularize my code due to hours wasted with complications. Code became messy and not a fan of the Amazon Lambda IDE, extremely small window and text.
  - I can see where working within a single function with multiple exposed endpoints may be more beneficial in the long run. Larger tasks seem as though they would become cumbersome when creating similar tasks accross multiple Lambda functions.

## Next Steps

- Figure out how to properly map POST body passed through React to API Gateway for successfull requests
- Complete '/id/id_value' API configuration and Reactjs code to successfully GET single user data
- Merge Lambda functions for easier management, processing and scalability
