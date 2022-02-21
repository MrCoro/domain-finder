class JobItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set job(job){
        this._job = job;
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = ` 
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        
        .fan-art-club {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .job-info {
            padding: 24px;
        }
        
        .job-info > h2 {
            font-weight: bold;
        }
        
        .job-info > h3 {
            font-weight: normal;
        }
        
        .job-info > h4 {
            font-weight: lighter;
        }

        .job-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }
        </style>
        
        <div class="job-info">
            <h2>Domain : ${this._job.domain ? this._job.domain : "unknown"}</h2>
            <h3> Created Date : ${this._job.create_date}</h3>
            <h3> Updated Date : ${this._job.update_date}</h3>
            <h4>NS: ${this._job.NS}</h4>
            <p>Country ${this._job.country ? this._job.country : "Unknown"}</p>
        </div>`;
    }
}

if(!customElements.get('job-items')) { customElements.define('job-items', JobItem); }