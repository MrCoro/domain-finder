import './jobItems.js';

class JobList extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set jobs(jobs){
        this._jobs = jobs;
        this.render();
    }

    renderError(err){
        this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
       this.shadowDOM.innerHTML += `<h2 class="placeholder">${err}</h2>`;
    }

    render(){
        this.shadowDOM.innerHTML = "";

        this._jobs.forEach(job => {
            const jobElement = document.createElement("job-items");
            jobElement.job = job;
            this.shadowDOM.appendChild(jobElement);
        });
    }

} 

if(!customElements.get('job-list')) { customElements.define('job-list', JobList); }