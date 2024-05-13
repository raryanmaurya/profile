var Projects = Projects || function (output_) {

    output_.insertAdjacentHTML('beforeEnd', projectsHtmlString);
    buttonify();

    // ~~~~~ scrolling implementation ~~~~~
    // var nav = document.getElementById('projects-card');
    // var content = document.getElementById('projects-content')
    // console.log(nav);
    // console.log(content);
    // nav.setAttribute("data_overflowing", determineOverflow(content, nav));

    // var last_known_scroll_position = 0;
    // var ticking = false;
    
    // function doSomething(scroll_pos) {
    //     nav.setAttribute("data_overflowing", determineOverflow(content, nav));
    // }
    
    // nav.addEventListener("scroll", function() {
    //     last_known_scroll_position = window.scrollY;
    //     if (!ticking) {
    //         window.requestAnimationFrame(function() {
    //             doSomething(last_known_scroll_position);
    //             ticking = false;
    //         });
    //     }
    //     ticking = true;
    // });

    // function determineOverflow(content, container) {
    //     var containerMetrics = container.getBoundingClientRect();
    //     var containerMetricsRight = Math.floor(containerMetrics.right);
    //     var containerMetricsLeft = Math.floor(containerMetrics.left);
    //     var contentMetrics = content.getBoundingClientRect();
    //     var contentMetricsRight = Math.floor(contentMetrics.right);
    //     var contentMetricsLeft = Math.floor(contentMetrics.left);
    //     if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
    //         return "both";
    //     } else if (contentMetricsLeft < containerMetricsLeft) {
    //         return "left";
    //     } else if (contentMetricsRight > containerMetricsRight) {
    //         return "right";
    //     } else {
    //         return "none";
    //     }
    // }
    
}


const projectsHtmlString =
    `
    <div class="projects-card" id="projects-card">

    <div class="row" id="projects-content">

        <div class="col-sm-">
            <figure class="tile">
               <img src="assets/tpgtelecom-migrates-data-services-5g-core-network.jpg" width="310" height="394" alt="scribbleit" />
               <div class="date"><span class="year">2023</span><span class="month">July</span></div>
               <figcaption>
                  <h3>Migration Of NM22 to CNF                        </h3>
                  <h6>Worked on migration code for CNF</h6>
                  <h6>Hack In the North </h6>
                  <p>ScribbleIt help you to transcribe and summarize you daily meetings, classes or meetups.</p>
                  <button class="tags">Bootstrap</button>
                  <button class="tags">Flask</button>
                  <button class="tags">Zulip API</button>
                  <button class="tags">Slack API</button>
                  <button class="tags">Microsoft Cognitive API</button>
               </figcaption>
               <a href="https://github.com/shikharvaish28/scribe/tree/ud-1" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/shikharvaish28/scribe/tree/ud-1"
                  data-size="large">ScribbleIT</a>
            </div>
        </div>

        <div class="col-sm-">
            <figure class="tile">
               <img src="assets/images.png" width="310" height="394" alt="scribbleit" />
               <div class="date"><span class="year">2020</span><span class="month">Jan</span></div>
               <figcaption>
                  <h3>Aiden                        </h3>
                  <h6>Virtual Physiotherapy Assistant</h6>
                  <h6>TensorFlowJS Show and Tell</h6>
                  <p>TensorFlowJS based Virtual Physiotherapy Assistant </p>
                  <button class="tags">TensorFlowJS</button>
                  <button class="tags">JavaScript</button>
                  <button class="tags">Microsoft Azure</button>
               </figcaption>
               <a href="https://github.com/shivaylamba/AIDENANALYSIS--TFJS-Physiotherapist" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/shivaylamba/AIDENANALYSIS--TFJS-Physiotherapist"
                  data-size="large">AIDEN</a>
            </div>
         </div>

         <div class="col-sm-">
            <figure class="tile">
               <img src="assets/images.jfif" width="310" height="394" alt="scribbleit" />
               <div class="date"><span class="year">2020</span><span class="month">September</span></div>
               <figcaption>
                  <h3>Online voting system </h3>
                  <h6>implemented for voting</h6>
                  <p>used PHP to develope the online voting system gain knowledge in web development</p>
                  <button class="tags">PHP</button>
                  <button class="tags">ReactJS</button>
               </figcaption>
               <a href="https://github.com/raryanmaurya" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/raryanmaurya"
                  data-size="large">Online voting system</a>
            </div>
         </div>

         <div class="col-sm-">
            <figure class="tile">
               <img src="assets/images.jfif" width="310" height="394" alt="scribbleit" />
               <div class="date"><span class="year">2020</span><span class="month">September</span></div>
               <figcaption>
                  <h3>Medisure.ai </h3>
                  <h6>GPT-3 Powered Tool</h6>
                  <h6>PenApps XXI</h6>
                  <p>A consolidated suite of deep-learning powered NLP tools to help demystify your medical insurance and generate insurance claim denial appeals  </p>
                  <button class="tags">Python</button>
                  <button class="tags">GPT-3</button>
                  <button class="tags">ReactJS</button>
               </figcaption>
               <a href="https://github.com/medisure-ai/medisure-ai" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/medisure-ai/medisure-ai"
                  data-size="large">Medisure.ai</a>
            </div>
         </div>

         <div class="col-sm-">
            <figure class="tile">
               <img src="assets/images.jfif" width="310" height="394" alt="scribbleit" />
               <div class="date"><span class="year">2020</span><span class="month">September</span></div>
               <figcaption>
                  <h3>Medisure.ai </h3>
                  <h6>GPT-3 Powered Tool</h6>
                  <h6>PenApps XXI</h6>
                  <p>A consolidated suite of deep-learning powered NLP tools to help demystify your medical insurance and generate insurance claim denial appeals  </p>
                  <button class="tags">Python</button>
                  <button class="tags">GPT-3</button>
                  <button class="tags">ReactJS</button>
               </figcaption>
               <a href="https://github.com/medisure-ai/medisure-ai" target="_blank"></a>
            </figure>
            <div class="github-button-div">
               <a class="github-button" href="https://github.com/medisure-ai/medisure-ai"
                  data-size="large">Medisure.ai</a>
            </div>
         </div>
         
    </div>

</div>
    `;