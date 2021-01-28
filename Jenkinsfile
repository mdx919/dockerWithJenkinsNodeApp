pipeline {

    agent any

    environment {
        commit_id = ''
        dockerImage = ''
        registry = 'mdx919/node_with_docker'
        docker_credentials = '	dockerhub_id'
    }
     
    stages {
        stage('checkout & get commit_ID') {
            steps {
                script {
                    checkout scm
                    // sh "git  rev-parse --short HEAD > .git/commit-id"
                    // commit_id = readfile('.git/commit-id').trim()
                }
                
            }
        }

        stage('build docker image') {    
            steps {
                script {
                    dockerImage = docker.build registry
                }
            }
        }

        // stage('push docker_hub') {    
        //     steps {
        //         script {
        //             docker.withRegistry('', docker_credentials) {
        //                 dockerImage.push()
        //             }
        //         }
        //     }
        // }
    }
}