

pipeline {
    environment {
        ANSIBLE_SERVER = "20.111.8.195"
    }
    agent any
    stages {
        stage('build docker image') {
            steps {
                script {
                    sh "docker build -t my-app:1.0 ."
                }
            }
        }

        stage('push image to dockerhub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'Docker-CRD', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker tag my-app:1.0 zikou/portfolio:1.0"
                        sh "docker push zikou/portfolio:1.0"
                    }
                }
            }
        }

        stage('provision ec2 instance') {
            environment {
                AWS_ACCESS_KEY_ID = credentials("jenkins_aws_access_key_id")
                AWS_SECRET_ACCESS_KEY = credentials("jenkins_aws_secret_access_key")
            }
            steps {
                script {
                    dir('terraform') {
                        sh "terraform init"
                        sh "terraform apply --auto-approve"
                    }
                }
            }
        }

        stage('deploy app to ec2') {
            steps {
                script {
                    echo "calling ansible playbook to configure ec2-instance"
                    def remote= [:]
                    remote.name = "ansible-server"
                    remote.host = "20.111.8.195"
                    remote.allowAnyHosts = true
                    withCredentials([sshUserPrivateKey(credentialsId:'ansible-server-key',keyFileVariable: 'keyfile',usernameVariable:'user')]){
                        remote.user = user
                        remote.identityFile = keyfile
                        sshCommand remote: remote, command: "cd ansible-project && sudo ansible-playbook deploy-docker.yaml"

                }
            }
        }
    }
}