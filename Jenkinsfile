

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
                    echo "Deploying to ec2 in the next day"
                }
            }
        }
    }
}