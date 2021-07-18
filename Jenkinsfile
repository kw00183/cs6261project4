pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e') {
            steps {
                sh 'docker build --tag testimage .'
                sh 'docker run -d -v ${PWD}:/app -p 4200:4200 testimage --name testcontainer'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
                sh 'docker container rm testcontainer || true'
                sh 'docker image rm testimage || true'
            }
        }
        stage('deploy') {
            steps {
                echo 'Not yet implemented'
            }
        }
    }
}
