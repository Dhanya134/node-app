library identifier: "pipeline-library@v1.5",
retriever: modernSCM(
  [
    $class: "GitSCMSource",
    remote: "https://github.com/redhat-cop/pipeline-library.git" 
  ]
)

appName = "example"

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
            sourceImagePath: "amisha-jenkins",
            sourceImageName: "nodeserver",
            sourceImageTag : "latest",
            toImagePath: "amisha-jenkins",
            toImageName    : "nodeserver",
            toImageTag     : "${env.BUILD_NUMBER}"
      
    ])
       }
}
    }
}
