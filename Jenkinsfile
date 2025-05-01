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
                bat 'docker build -t react-container .'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker stop react-container 2>nul'
                bat 'docker rm react-container 2>nul'
                bat 'docker run -d -p 8080:80 --name react-container react-container'
            }
        }

        stage('Push to Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'
                    bat 'docker tag weather-app %DOCKER_USER%/weather-app:latest'
                    bat 'docker push %DOCKER_USER%/weather-app:latest'
                }
            }
        }
        
    }
}
