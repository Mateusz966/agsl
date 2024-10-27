import * as aws from "@pulumi/aws";

export const defaultLambdaRole = new aws.iam.Role("lambda-default", {
  name: "lambda-default",
  assumeRolePolicy: JSON.stringify({
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Principal: {
          Service: "lambda.amazonaws.com",
        },
        Action: "sts:AssumeRole",
      },
    ],
  }),
});

const managedPolicies = [
  "arn:aws:iam::aws:policy/AmazonCognitoPowerUser",
  "arn:aws:iam::aws:policy/AmazonS3FullAccess",
  "arn:aws:iam::aws:policy/AmazonSQSFullAccess",
  "arn:aws:iam::aws:policy/AWSLambda_FullAccess",
  "arn:aws:iam::aws:policy/AWSXrayWriteOnlyAccess",
  "arn:aws:iam::aws:policy/CloudWatchEventsFullAccess",
  "arn:aws:iam::aws:policy/CloudWatchFullAccess",
];

for (const policyArn of managedPolicies) {
  new aws.iam.RolePolicyAttachment(`${policyArn}-attachment`, {
    role: defaultLambdaRole,
    policyArn: policyArn,
  });
}
