const { get } = require("../express-demo/routes/home");

console.log('Before')


// getUser(1)
//     .then(user=> getRepositories(user.gitHubUsername))
//     .then(repo => getCommits(repo[0]))
//     .then(commit => console.log('Commits',commit))
//     .catch(err=>console.log('Error',err.message))


async function displayCommits(){

    const user = await getUser(1)
    const repo = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repo[0]);
    console.log(commits)

}

displayCommits();


console.log('After')


function getUser(id){
    return  new Promise((resolve,reject)=>{

        
        setTimeout(()=>{
            resolve({id:id,gitHubUsername:'mosh'})
            
            console.log("Reading a user from a database...");

        },2000)
    });
}

function getRepositories(user){

    return new Promise((resolve,reject)=> {

        setTimeout(() => {
            console.log("Calling GitHub API ...");
            // resolve(['repo1','repo2','repo3']);
            reject(new Error("Could not get the repository."))
        }, 2000);


    });
    
}


function getCommits(repo){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Calling GitHub API...");
            resolve(['commit'])
        },2000);
    }) 


}