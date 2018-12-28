$(document).ready(function (){
});

function displayError(error) {
  $('#errors').html("There was an error, please try again.");
 }
 
function displayRepositories(result) {
  return `<strong>Name: </strong>${result.name}<br>
         <strong>Description: </strong>${result.description}<br>
         <strong>URL: </strong><a href="${result.html_url}">${result.html_url}</a><br>
         <a href="#" data-repository="${result.name}" data-owner="${result.owner.login}"
           onclick="showCommits(this)">Show Commits</a><br></br>`;
}

function showCommits(ele) {
  const repo  = ele.dataset.repository;
  const owner = ele.dataset.owner;
 
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`).done(function(data) {
     $('#details').html(getCommits(data));
   }).fail(function(error) {
     displayError(error);
   });
 }
 
 
 
 