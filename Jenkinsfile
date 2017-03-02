node { 
  currentBuild.result = "SUCCESS"
  
  try {
    stage('Prepare') {
        checkout scm
        sh 'npm install'
    }
    stage('Build') {
        //sh 'npm run lint'
        sh './node_modules/.bin/ng build'
    }
    stage('Test') {
        //sh './node_modules/.bin/ng test'
    }
    stage('Deploy') {
        /* .. snip .. */
    }
  } catch (e) {
    currentBuild.result = "FAILED"
    //notify error
    slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    
    throw e
  } finally {
    slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
  }
}
