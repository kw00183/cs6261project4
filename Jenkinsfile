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
                sh 'docker run -d -v ${WORKSPACE}:/app -p 4200:4200 --name testcontainer testimage'
                sh 'sleep 30s'
                sh 'npm install -f protractor'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
            }
            //post {
            //  always {
            //    sh 'docker container rm testcontainer || true'
            //    sh 'docker image rm testimage || true'
            //  }
            //}
        }
        stage('deploy') {
            steps {
              sh 'docker container rm prodcontainer || true'
              sh 'docker image rm prodimage || true'
              sh 'sleep 30s'
              sh 'docker build --tag prodimage .'
              sh 'docker run -d -v ${WORKSPACE}:/app -p 5000:4200 --name prodcontainer prodimage'
            }
        }
    }
}
