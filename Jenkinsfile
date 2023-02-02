library identifier: "pipeline-library@v1.5",
retriever: modernSCM(
  [
    $class: "GitSCMSource",
    remote: "https://github.com/redhat-cop/pipeline-library.git" 
  ]
)

appName = "node-back-dhanya"

pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        stage("Docker Build") {
            steps {
                binaryBuild(buildConfigName: appName, buildFromPath: ".")
            }
        }
      stage("Tag image") {
       steps{
    tagImage([
            sourceImagePath: "dhanya-jenkins",
            sourceImageName: "nodeserver",
            sourceImageTag : "latest",
            toImagePath: "dhanya-jenkins",
            toImageName    : "nodeserver",
            toImageTag     : "${env.BUILD_NUMBER}"
      
    ])
       }
}
      stage('deploy') {
        steps {
            script {
                openshift.withCluster() {
                    openshift.withProject("$PROJECT_NAME") {
                        echo "Using project: ${openshift.project()}"
                         sh 'sh -x $WORKSPACE/deploy.sh'
                    }
                }
            }
    }
 }
    }
}
