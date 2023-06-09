# My Portfolio
This project is an example of deploying a Node.js app to an EC2 instance on AWS using Jenkins, Ansible, Terraform, and Docker. The project includes a pipeline that automates the building and deployment of the app to the EC2 instance.

## Project Structure
The project is structured as follows:<br />
  * ansible/ : contains Ansible files to configure EC2 instances and deploy the app into it<br />
  * app/ : contains the HTML and Node.js app<br />
  * terraform/ : contains the Terraform configuration to provision EC2 instances in AWS<br />
  * Dockerfile : contains the Docker configuration to build the app image<br />
  * Jenkinsfile : contains the Jenkins pipeline configuration to automate the deployment process<br />
  * package.json : contains the Node.js app dependencies<br />

## Deployment Pipeline
The deployment pipeline consists of the following stages:<br />
    1- Build Docker image: In this stage, the Docker image is built for the app.<br />
    2- Push image to DockerHub: In this stage, the built Docker image is pushed to DockerHub.<br />
    3- Provision EC2 instance: In this stage, Terraform is used to provision an EC2 instance in AWS.<br />
    4- Deploy app to EC2 instance: In this stage, Ansible is used to configure the EC2 instance and deploy the Docker image to it.<br />
