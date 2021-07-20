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
                sh 'docker run -d -v $WORKSPACE -p 4200:4200 testimage --name testcontainer'
                sh 'sleep 30s'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget=http://localhost:4200/'
            }
            post {
              always {
                sh 'docker container rm testcontainer || true'
                sh 'docker image rm testimage || true'
              }
            }
        }
        stage('deploy') {
            steps {
              sh 'docker container rm prodcontainer || true'
              sh 'docker image rm prodimage || true'
              sh 'sleep 30s'
              sh 'docker build --tag prodimage .'
              sh 'docker run -d -v $WORKSPACE -p 5000:5000 prodimage --name prodcontainer'
            }
        }
    }
}
