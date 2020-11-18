#! groovy

currentBuild.displayName = "Solitaire [$currentBuild.number]"

pipeline {
    agent any
    stages {

        stage('Setup') {
            steps{
                script {
                    checkout([
                            $class           : 'GitSCM', branches: [[name: "*/main"]],
                            userRemoteConfigs: [[url          : "git@github.com:theneekz/Solitaire.git",
                                                 credentialsId: 'jenkins_id_rsa']]
                    ])
                }
            }
        }
        stage('Build') {
            steps{
                script {
                    sh 'npm i'
                }
            }
        }
        stage('Deploy') {
            steps{
                script {
                    sh 'cp -r ./* /usr/local/solitare/Solitaire'
                }
            }
        }
        stage('Start') {
            steps{
                script {
                    sh 'sudo systemctl restart solitaire.service;sudo systemctl status solitaire.service'
                }
            }
        }
        stage('Confirm') {
            steps{
                script {
                    def deployed
                    for (int i = 0; i < 10; i++) {
                        def health = sh(
                                script: "curl http://localhost:3000",
                                returnStdout: true
                        ).trim()

                        if(health.contains("<title>Patience</title>")) {
                            deployed = true
                            break
                        }

                        sleep time: i, unit: 'SECONDS'
                    }
                    if (!deployed) {
                        error("Failed to deploy")
                    } else {
                        echo "woohoo"
                    }
                }
            }
        }
    }
    post {
        success {
            script {
                echo "SUCCESS!"
            }
        }
        failure {
            script {
                echo "FAILURE!"
            }
        }
    }
}
