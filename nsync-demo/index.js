const { get } = require("../express-demo/routes/home");

console.log('Before')


getUser(1, getRepositories);




console.log('After')

function getRepositories(user){
    getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos){
    getCommits(repo,displayCommits)

}

function displayCommits(commits){
    console.log(commits);
}

function getUser(id,callback){
    setTimeout(()=> {
        console.log("Reading a user from a database ...")
        callback({id:id,gitHubUsername:'mosh'})
    }, 2000)
}

function getRepositories(username,callback){

    setTimeout(()=>{
        callback({user: username,repositories:["repo1","repo2","repo3"] })

    },2000);
}