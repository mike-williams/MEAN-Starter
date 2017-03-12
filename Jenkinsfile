node { 
  currentBuild.result = "SUCCESS"
  
  try {
    stage('Prepare') {
        checkout scm
        sh 'npm install'
    }
    stage('Build') {        
        sh 'npm run build'
    }
    stage('Unit Test') {
        //sh './node_modules/.bin/ng test'
    }
    stage('Deploy') {
        docker.withRegistry('http://192.168.1.146:5000') {    
          git url: "https://github.com/mike-williams/MEAN-Starter"
      
          sh "git rev-parse HEAD > .git/commit-id"
          def commit_id = readFile('.git/commit-id').trim()
          println commit_id
      
          stage "build"
          def app = docker.build "mean-starter"
      
          stage "publish"
          app.push 'master'
          app.push "${commit_id}"
      }
    }
  } catch (e) {
    currentBuild.result = "FAILED"
    //notify error
    //slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
    
    throw e
  } finally {
    //slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
  }
}
