import '../components/jobList.js';

const main = () => {
    const jobSearchElement = document.querySelector('#search');
    const jobSearchButton = document.querySelector('.job-search-button');
    const jobListing = document.querySelector('job-list');
    const waitingText = document.querySelector('.waiting-text');

    const renderResult = (results) => {
        jobListing.jobs = results;
        waitingText.innerHTML = "";
    };
    
    const fallbackResult = (err) => {
        jobListing.renderError(err);
    };
    
    const onButtonSearchClicked = async () => {
        event.preventDefault(); //untuk cegah form submit reload
        waitingText.innerHTML = "Fetching results please wait ....."
        try {
            let input = jobSearchElement.value;
            const proxyAPI = 'https://api.codetabs.com/v1/proxy?quest='; //menggunakan proxy untuk mencegah CORS
            //third party API berasal dari https://domainsdb.info/
            const result = await fetch(proxyAPI + `api.domainsdb.info/v1/domains/search?domain="${input}"`, {method: 'GET'});
            const resultJson = await result.json();
            if(resultJson.domains) {
                renderResult(resultJson.domains);
             } else {
                fallbackResult("No Domain found");
             }
            
        } catch(error){
            fallbackResult(error)
        }

    };


    jobSearchButton.addEventListener('click', onButtonSearchClicked);
};

export default main;

