pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/Harshit1103/react-docker.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t my-react-app .'
            }
        }

        stage('Docker Run') {
            steps {
                bat '''
    docker stop my-react-app || echo "No container to stop"
    docker rm my-react-app || echo "No container to remove"
'''

                
                bat 'docker run -d -p 8080:80 --name my-react-app my-react-app'
            }
        }
    }
}
