import AWS from 'aws-sdk';

const ddb = new AWS.DynamoDB();
const params = {
    TableName: "GithubRepos"
};

ddb.scan(params, (err, data) => {
    ifdata console.log(data)
});