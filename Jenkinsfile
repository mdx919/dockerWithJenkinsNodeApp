node {
    def commit_id = ''
    def dockerImage = ''
    def registry = 'mdx919/node_with_docker'
    def docker_credentials = '	dockerhub_id'
    agent { docker { image 'node:14' } }

    stages {
        stage('checkout & get commit_ID') {
            checkout scm
            sh "git  rev-parse --short HEAD > .git/commit-id"
            commit_id = readfile('.git/commit-id').trim()
        }

        stage('build docker image') {    
            steps {
                dcript {
                    dockerImage = docker.build registry
                }
            }
        }

        stage('push docker_hub') {    
            steps {
                script {
                    docker.withRegistry('', docker_credentials) {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}