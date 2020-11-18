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
        // stage('Confirm') {
        //     steps{
        //         script {

        //         }
        //     }
        // }
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
