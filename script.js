let currentSlideIndex = 0;
let slides = [];

// Image filenames array - moved outside for global access
const imageFilenames = [
    "images/ibm_course_intro2devops.jpg",
    "images/ibm_course_intro2cloudcomputing.jpg",
    "images/ibm_course_intro2agiledevelopmentandscrum.jpg",
    "images/ibm_course_softwareengineering.jpg",
    "images/ibm_course_handsonlinuxcommandsandshellscripting.jpg",
    "images/ibm_course_gettingstartedwithgitandgithub.jpg",
    "images/ibm_course_pythonfordatascienceaianddev.jpg",
    "images/ibm_course_devaiappwithpythonandflask.jpg",
    "images/ibm_course_containersdockerkubernetesopenshift.jpg",
    "images/ibm_course_applicationdevelopmentusingmicroservicesandserverless.jpg",
    "images/ibm_course_introductiontotestandbehaviordrivendevelopment.jpg",
    "images/ibm_course_continuousintegrationandcontinuousdeliverycicd.jpg",
    "images/ibm_course_applicationsecurityfordevelopersanddevopsprofessionals.jpg",
    "images/ibm_course_devopscapstoneproject.jpg",
    "images/ibm_course_intro2cybersecuritytoolsandcyberattacks.jpg",
    "images/ibm_course_osoverviewadministrationandsecurity.jpg",
    "images/ibm_course_cyberseccomplianceframeworkstandardandregulations.jpg",
    "images/ibm_course_computernetworksandnetworksecurity.jpg",
    "images/ibm_course_cyberassessmentcomptiasecurityandcysa.jpg",
    "images/stanfordonline_course_advancedlearningalgorithms.jpg",
    "images/ibm_course_penetrationtestingthreathuntingandcryptography.jpg",
    "images/ibm_course_incidentresponseanddigitalforensics.jpg",
    "images/ibm_course_cybersecuritycasestudiesandcapstoneproject.jpg",
    "images/stanfordonline_course_supervisedlearningregressionandclassification.jpg",
    "images/stanfordonline_course_unsupervisedlearningrecommendersandreinforcementlearning.jpg",
    "images/ibm_course_intro2dataengineering.jpg",
    "images/ibm_course_rdbms.jpg",
    "images/ibm_course_withhonors_databsesandsqlfordatasciencewithpython.jpg",
    "images/ibm_course_datawarehousefundamentals.jpg",
    "images/ibm_course_dba.jpg",
    "images/ibm_course_etlanddatapipelineswithshellairflowandkafka.jpg",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_linearalgebra.jpg",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_multivariatecalcalculus.jpg",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_pca.jpg",
    "images/dukeuniversity_course_pythonandpandas4dataengineering.jpg",
    "images/dukeuniversity_course_linuxbash4dataengineering.jpg",
    "images/dukeuniversity_course_scriptingwithpythonandsql4dataengineering.jpg",
    "images/dukeuniversity_course_webapplicationsandcommandlinetools4dataengineering.jpg",
    "images/deeplearningai_course_nlp_w_classificationandvectorspaces.jpg",
    "images/deeplearningai_course_nlp_w_attentionmodels.jpg",
    "images/deeplearningai_course_nlp_w_probabisticmodels.jpg",
    "images/deeplearningai_course_nlp_w_sequencemodels.jpg",
    "images/infosec_course_advancedpythonreconnaissance.jpg",
    "images/infosec_course_establishingCnCandFindingCredentials.jpg",
    "images/infosec_course_defensivepython.jpg",
    "images/meta_course_databasestructuresandmanagementwithmysql.jpg",
    "images/meta_course_htmlandcssindepth.jpg",
    "images/meta_course_intro2backenddev.jpg",
    "images/meta_course_intro2databases.jpg",
    "images/meta_course_intro2frontenddev.jpg",
    "images/meta_course_intro2androidmobileapplicationdev.jpg",
    "images/meta_course_iosmobileapplicationdev.jpg",
    "images/meta_course_programmingfundamentalsinkotlin.jpg",
    "images/meta_course_programminginpython.jpg",
    "images/meta_course_programmingwithjavascript.jpg",
    "images/meta_course_reactbasics.jpg",
    "images/meta_course_versioncontrol.jpg",
    "images/google_course_foundationsofcybersecurity.jpg",
    "images/google_course_intro2gitandgithub.jpg",
    "images/google_course_python.jpg",
    "images/google_course_usingpython2interactwiththeOS.jpg",
    "images/deeplearningai_course_improvingdeepneuralnetworkshyperparametertuning.jpg",
    "images/deeplearningai_course_neruralnetworksanddeeplearning.jpg"
];

// Course titles extracted from certificate images
const courseTitles = {
    "images/ibm_course_intro2devops.jpg": "Introduction to DevOps",
    "images/ibm_course_intro2cloudcomputing.jpg": "Introduction to Cloud Computing",
    "images/ibm_course_intro2agiledevelopmentandscrum.jpg": "Introduction to Agile Development and Scrum",
    "images/ibm_course_softwareengineering.jpg": "Introduction to Software Engineering",
    "images/ibm_course_handsonlinuxcommandsandshellscripting.jpg": "Hands-on Introduction to Linux Commands and Shell Scripting",
    "images/ibm_course_gettingstartedwithgitandgithub.jpg": "Getting Started with Git and GitHub",
    "images/ibm_course_pythonfordatascienceaianddev.jpg": "Python for Data Science, AI & Development",
    "images/ibm_course_devaiappwithpythonandflask.jpg": "Developing AI Applications with Python and Flask",
    "images/ibm_course_containersdockerkubernetesopenshift.jpg": "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    "images/ibm_course_applicationdevelopmentusingmicroservicesandserverless.jpg": "Application Development using Microservices and Serverless",
    "images/ibm_course_introductiontotestandbehaviordrivendevelopment.jpg": "Introduction to Test and Behavior Driven Development",
    "images/ibm_course_continuousintegrationandcontinuousdeliverycicd.jpg": "Continuous Integration and Continuous Delivery (CI/CD)",
    "images/ibm_course_applicationsecurityfordevelopersanddevopsprofessionals.jpg": "Application Security for Developers and DevOps Professionals",
    "images/ibm_course_devopscapstoneproject.jpg": "DevOps Capstone Project",
    "images/ibm_course_intro2cybersecuritytoolsandcyberattacks.jpg": "Introduction to Cybersecurity Tools & Cyber Attacks",
    "images/ibm_course_osoverviewadministrationandsecurity.jpg": "Operating Systems: Overview, Administration, and Security",
    "images/ibm_course_cyberseccomplianceframeworkstandardandregulations.jpg": "Cybersecurity Compliance Framework & System Administration",
    "images/ibm_course_computernetworksandnetworksecurity.jpg": "Computer Networks and Network Security",
    "images/ibm_course_cyberassessmentcomptiasecurityandcysa.jpg": "Cybersecurity Assessment: CompTIA Security+ & CYSA+",
    "images/stanfordonline_course_advancedlearningalgorithms.jpg": "Advanced Learning Algorithms",
    "images/ibm_course_penetrationtestingthreathuntingandcryptography.jpg": "Penetration Testing, Incident Response and Forensics",
    "images/ibm_course_incidentresponseanddigitalforensics.jpg": "Incident Response and Digital Forensics",
    "images/ibm_course_cybersecuritycasestudiesandcapstoneproject.jpg": "Cybersecurity Case Studies and Capstone Project",
    "images/stanfordonline_course_supervisedlearningregressionandclassification.jpg": "Supervised Machine Learning: Regression and Classification",
    "images/stanfordonline_course_unsupervisedlearningrecommendersandreinforcementlearning.jpg": "Unsupervised Learning, Recommenders, Reinforcement Learning",
    "images/ibm_course_intro2dataengineering.jpg": "Introduction to Data Engineering",
    "images/ibm_course_rdbms.jpg": "Introduction to Relational Databases (RDBMS)",
    "images/ibm_course_withhonors_databsesandsqlfordatasciencewithpython.jpg": "Databases and SQL for Data Science with Python",
    "images/ibm_course_datawarehousefundamentals.jpg": "Introduction to Data Warehousing",
    "images/ibm_course_dba.jpg": "Relational Database Administration (DBA)",
    "images/ibm_course_etlanddatapipelineswithshellairflowandkafka.jpg": "ETL and Data Pipelines with Shell, Airflow and Kafka",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_linearalgebra.jpg": "Mathematics for Machine Learning: Linear Algebra",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_multivariatecalcalculus.jpg": "Mathematics for Machine Learning: Multivariate Calculus",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_pca.jpg": "Mathematics for Machine Learning: PCA",
    "images/dukeuniversity_course_pythonandpandas4dataengineering.jpg": "Python and Pandas for Data Engineering",
    "images/dukeuniversity_course_linuxbash4dataengineering.jpg": "Linux and Bash for Data Engineering",
    "images/dukeuniversity_course_scriptingwithpythonandsql4dataengineering.jpg": "Scripting with Python and SQL for Data Engineering",
    "images/dukeuniversity_course_webapplicationsandcommandlinetools4dataengineering.jpg": "Web Applications and Command-Line Tools for Data Engineering",
    "images/deeplearningai_course_nlp_w_classificationandvectorspaces.jpg": "Natural Language Processing with Classification and Vector Spaces",
    "images/deeplearningai_course_nlp_w_attentionmodels.jpg": "Natural Language Processing with Attention Models",
    "images/deeplearningai_course_nlp_w_probabisticmodels.jpg": "Natural Language Processing with Probabilistic Models",
    "images/deeplearningai_course_nlp_w_sequencemodels.jpg": "Natural Language Processing with Sequence Models",
    "images/infosec_course_advancedpythonreconnaissance.jpg": "Advanced Python - Reconnaissance",
    "images/infosec_course_establishingCnCandFindingCredentials.jpg": "Establishing Command-and-Control and Finding Credentials",
    "images/infosec_course_defensivepython.jpg": "Defensive Python",
    "images/meta_course_databasestructuresandmanagementwithmysql.jpg": "Database Structures and Management with MySQL",
    "images/meta_course_htmlandcssindepth.jpg": "HTML and CSS in Depth",
    "images/meta_course_intro2backenddev.jpg": "Introduction to Back-End Development",
    "images/meta_course_intro2databases.jpg": "Introduction to Databases for Back-End Development",
    "images/meta_course_intro2frontenddev.jpg": "Introduction to Front-End Development",
    "images/meta_course_intro2androidmobileapplicationdev.jpg": "Introduction to Android Mobile Application Development",
    "images/meta_course_iosmobileapplicationdev.jpg": "Introduction to iOS Mobile Application Development",
    "images/meta_course_programmingfundamentalsinkotlin.jpg": "Programming Fundamentals in Kotlin",
    "images/meta_course_programminginpython.jpg": "Programming in Python",
    "images/meta_course_programmingwithjavascript.jpg": "Programming with JavaScript",
    "images/meta_course_reactbasics.jpg": "React Basics",
    "images/meta_course_versioncontrol.jpg": "Version Control",
    "images/google_course_foundationsofcybersecurity.jpg": "Foundations of Cybersecurity",
    "images/google_course_intro2gitandgithub.jpg": "Introduction to Git and GitHub",
    "images/google_course_python.jpg": "Crash Course on Python",
    "images/google_course_usingpython2interactwiththeOS.jpg": "Using Python to Interact with the Operating System",
    "images/deeplearningai_course_improvingdeepneuralnetworkshyperparametertuning.jpg": "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    "images/deeplearningai_course_neruralnetworksanddeeplearning.jpg": "Neural Networks and Deep Learning"
};

// Certificate verification URLs - add the actual URLs for each certificate
const verificationUrls = {
    "images/ibm_course_intro2devops.jpg": "https://www.coursera.org/account/accomplishments/certificate/H6MW2CUCVXJ6",
    "images/ibm_course_intro2cloudcomputing.jpg": "https://www.coursera.org/account/accomplishments/certificate/8AT2QSH2S7M6",
    "images/ibm_course_intro2agiledevelopmentandscrum.jpg": "https://www.coursera.org/account/accomplishments/certificate/DAYKT5FEQRYD",
    "images/ibm_course_softwareengineering.jpg": "https://www.coursera.org/account/accomplishments/certificate/BXUC6FSU2Z3X",
    "images/ibm_course_handsonlinuxcommandsandshellscripting.jpg": "https://www.coursera.org/account/accomplishments/certificate/ZJDYYWWEFWQR",
    "images/ibm_course_gettingstartedwithgitandgithub.jpg": "https://www.coursera.org/account/accomplishments/certificate/HWCH666PZR49",
    "images/ibm_course_pythonfordatascienceaianddev.jpg": "https://www.coursera.org/account/accomplishments/certificate/XJCDLJMLML6S",
    "images/ibm_course_devaiappwithpythonandflask.jpg": "https://www.coursera.org/account/accomplishments/certificate/WFUW2NK875NE",
    "images/ibm_course_containersdockerkubernetesopenshift.jpg": "https://www.coursera.org/account/accomplishments/certificate/ET64KU8ZN9SS",
    "images/ibm_course_applicationdevelopmentusingmicroservicesandserverless.jpg": "https://www.coursera.org/account/accomplishments/certificate/8FBL4YLNJAL3",
    "images/ibm_course_introductiontotestandbehaviordrivendevelopment.jpg": "https://www.coursera.org/account/accomplishments/certificate/8FBL4YLNJAL3",
    "images/ibm_course_continuousintegrationandcontinuousdeliverycicd.jpg": "https://www.coursera.org/account/accomplishments/certificate/NMVVKRAHYN28",
    "images/ibm_course_applicationsecurityfordevelopersanddevopsprofessionals.jpg": "https://www.coursera.org/account/accomplishments/certificate/4PR9H4W6FNBB",
    "images/ibm_course_devopscapstoneproject.jpg": "https://www.coursera.org/account/accomplishments/certificate/DG264RVMFUTD",
    "images/ibm_course_intro2cybersecuritytoolsandcyberattacks.jpg": "https://www.coursera.org/account/accomplishments/certificate/XY8NAVQY4HL7",
    "images/ibm_course_osoverviewadministrationandsecurity.jpg": "https://www.coursera.org/account/accomplishments/certificate/Z2HULZKA42K5",
    "images/ibm_course_cyberseccomplianceframeworkstandardandregulations.jpg": "https://www.coursera.org/account/accomplishments/certificate/C9JA9ZHGFF5K",
    "images/ibm_course_computernetworksandnetworksecurity.jpg": "https://www.coursera.org/account/accomplishments/certificate/TLUU45U4RCGX",
    "images/ibm_course_cyberassessmentcomptiasecurityandcysa.jpg": "https://www.coursera.org/account/accomplishments/certificate/FD3U8Q4AQTFT",
    "images/stanfordonline_course_advancedlearningalgorithms.jpg": "https://www.coursera.org/account/accomplishments/certificate/QY285JWZ7VQQ",
    "images/ibm_course_penetrationtestingthreathuntingandcryptography.jpg": "https://www.coursera.org/account/accomplishments/certificate/7FNY5RME9XGY",
    "images/ibm_course_incidentresponseanddigitalforensics.jpg": "https://www.coursera.org/account/accomplishments/certificate/MGTY2QUG5BB4",
    "images/ibm_course_cybersecuritycasestudiesandcapstoneproject.jpg": "https://www.coursera.org/account/accomplishments/certificate/KYTPD8W3MT8F",
    "images/stanfordonline_course_supervisedlearningregressionandclassification.jpg": "https://www.coursera.org/account/accomplishments/certificate/R9UASXUTESAN",
    "images/stanfordonline_course_unsupervisedlearningrecommendersandreinforcementlearning.jpg": "https://www.coursera.org/account/accomplishments/certificate/WXX5LTGUVZA9",
    "images/ibm_course_intro2dataengineering.jpg": "https://www.coursera.org/account/accomplishments/certificate/NZDZV533X5EP",
    "images/ibm_course_rdbms.jpg": "https://www.coursera.org/account/accomplishments/certificate/9SJBCNBKMCTA",
    "images/ibm_course_withhonors_databsesandsqlfordatasciencewithpython.jpg": "https://www.coursera.org/account/accomplishments/certificate/2VVJ8JW3GSX9",
    "images/ibm_course_datawarehousefundamentals.jpg": "https://www.coursera.org/account/accomplishments/certificate/XA9UWJG7622D",
    "images/ibm_course_dba.jpg": "https://www.coursera.org/account/accomplishments/certificate/4DQ67T4GCC83",
    "images/ibm_course_etlanddatapipelineswithshellairflowandkafka.jpg": "https://www.coursera.org/account/accomplishments/certificate/UTSQYADNUET2",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_linearalgebra.jpg": "https://www.coursera.org/account/accomplishments/certificate/Q49QTG9BYCPW",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_multivariatecalcalculus.jpg": "https://www.coursera.org/account/accomplishments/certificate/4Z4SW68VZBL2",
    "images/imperialcollegelondon_course_mathematicsformachinelearning_pca.jpg": "https://www.coursera.org/account/accomplishments/certificate/U9W73XNA7TCA",
    "images/dukeuniversity_course_pythonandpandas4dataengineering.jpg": "https://www.coursera.org/account/accomplishments/certificate/AKGPPQ2KR2UH",
    "images/dukeuniversity_course_linuxbash4dataengineering.jpg": "https://www.coursera.org/account/accomplishments/certificate/BGMYWHVA3LAM",
    "images/dukeuniversity_course_scriptingwithpythonandsql4dataengineering.jpg": "https://www.coursera.org/account/accomplishments/certificate/QMWTWMWBD9ET",
    "images/dukeuniversity_course_webapplicationsandcommandlinetools4dataengineering.jpg": "https://www.coursera.org/account/accomplishments/certificate/CZ78HXWHZBFY",
    "images/deeplearningai_course_nlp_w_classificationandvectorspaces.jpg": "https://www.coursera.org/account/accomplishments/certificate/NYJ8ED5WFC6P",
    "images/deeplearningai_course_nlp_w_attentionmodels.jpg": "https://www.coursera.org/account/accomplishments/certificate/TM8SBCSVTMT9",
    "images/deeplearningai_course_nlp_w_probabisticmodels.jpg": "https://www.coursera.org/account/accomplishments/certificate/WQ8WAH6XAZMQ",
    "images/deeplearningai_course_nlp_w_sequencemodels.jpg": "https://www.coursera.org/account/accomplishments/certificate/WE9WZRZKWZEX",
    "images/infosec_course_advancedpythonreconnaissance.jpg": "https://www.coursera.org/account/accomplishments/certificate/DZLNEXPKBNVY",
    "images/infosec_course_establishingCnCandFindingCredentials.jpg": "https://www.coursera.org/account/accomplishments/certificate/KK23UVWSMJ9B",
    "images/infosec_course_defensivepython.jpg": "https://www.coursera.org/account/accomplishments/certificate/UDGM6EYVZUT4",
    "images/meta_course_databasestructuresandmanagementwithmysql.jpg": "https://www.coursera.org/account/accomplishments/records/927KSK866MEF",
    "images/meta_course_htmlandcssindepth.jpg": "https://www.coursera.org/account/accomplishments/records/LW2WW5UWPNMM",
    "images/meta_course_intro2backenddev.jpg": "https://www.coursera.org/account/accomplishments/records/UHMLYGG2SHHR",
    "images/meta_course_intro2databases.jpg": "https://www.coursera.org/account/accomplishments/records/F6PV46G7EKHU",
    "images/meta_course_intro2frontenddev.jpg": "https://www.coursera.org/account/accomplishments/records/UG73ES4RMGDT",
    "images/meta_course_intro2androidmobileapplicationdev.jpg": "https://www.coursera.org/account/accomplishments/verify/JDAKRLPWUQRF",
    "images/meta_course_iosmobileapplicationdev.jpg": "https://www.coursera.org/account/accomplishments/verify/MZS72CSG8MZ8",
    "images/meta_course_programmingfundamentalsinkotlin.jpg": "https://www.coursera.org/account/accomplishments/verify/SMCHRJ2LGXC6",
    "images/meta_course_programminginpython.jpg": "https://www.coursera.org/account/accomplishments/records/45ZZYQP5UPZP",
    "images/meta_course_programmingwithjavascript.jpg": "https://www.coursera.org/account/accomplishments/records/KJ4UQJJZHF53",
    "images/meta_course_reactbasics.jpg": "https://www.coursera.org/account/accomplishments/records/HMNWLG35DZ66",
    "images/meta_course_versioncontrol.jpg": "https://www.coursera.org/account/accomplishments/records/6MH32CPM5S66",
    "images/google_course_foundationsofcybersecurity.jpg": "https://www.coursera.org/account/accomplishments/certificate/BDEVGERL9868",
    "images/google_course_intro2gitandgithub.jpg": "https://www.coursera.org/account/accomplishments/verify/CUTBQFAE5T4A",
    "images/google_course_python.jpg": "https://www.coursera.org/account/accomplishments/records/4XPYSRUUVZCP",
    "images/google_course_usingpython2interactwiththeOS.jpg": "https://www.coursera.org/account/accomplishments/records/D3W7QVPBH7JW",
    "images/deeplearningai_course_improvingdeepneuralnetworkshyperparametertuning.jpg": "https://www.coursera.org/account/accomplishments/records/83JTLNRTHVAL",
    "images/deeplearningai_course_neruralnetworksanddeeplearning.jpg": "https://coursera.org/verify/code"
};

// Function to open verification URL
function openVerificationUrl(filename) {
    const url = verificationUrls[filename];
    if (url) {
        window.open(url, '_blank');
    } else {
        console.log('No verification URL found for:', filename);
    }
}

// Load images dynamically based on filenames
function loadSlides() {
    const slidesContainer = document.getElementById('slidesContainer');
    const thumbnailContainer = document.getElementById('thumbnailContainer');

    imageFilenames.forEach((filename, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slides');

        const img = document.createElement('img');
        img.src = filename;
        img.style.cursor = 'pointer';
        img.title = 'Click to verify certificate';
        img.onclick = () => openVerificationUrl(filename);
        slideDiv.appendChild(img);
        slidesContainer.appendChild(slideDiv);

        const thumb = document.createElement('img');
        thumb.src = filename;
        thumb.classList.add('thumb');
        thumb.style.cursor = 'pointer';
        thumb.title = 'Click to verify certificate or view slide';
        thumb.onclick = (event) => {
            // Check if Ctrl/Cmd key is pressed for verification, otherwise show slide
            if (event.ctrlKey || event.metaKey) {
                openVerificationUrl(filename);
            } else {
                setCurrentSlide(index);
            }
        };
        thumbnailContainer.appendChild(thumb);

        slides.push(slideDiv);
    });

    updateSlideCounter();
}

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });
    
    // Update thumbnail highlighting
    const thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach((thumb, i) => {
        if (i === currentSlideIndex) {
            thumb.classList.add('current-thumb');
            // Check if this is a specialization certificate
            const filename = imageFilenames[i];
            if (filename.includes('specialization')) {
                thumb.classList.add('specialization');
            }
        } else {
            thumb.classList.remove('current-thumb');
            thumb.classList.remove('specialization');
        }
    });
    
    // Center the current thumbnail
    centerCurrentThumbnail();
    
    updateSlideCounter();
    updateCourseTitle();
}

function centerCurrentThumbnail() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const thumbnails = document.querySelectorAll('.thumb');
    
    if (thumbnails.length > 0 && currentSlideIndex < thumbnails.length) {
        const currentThumbnail = thumbnails[currentSlideIndex];
        const containerWidth = thumbnailContainer.clientWidth;
        const thumbnailWidth = currentThumbnail.offsetWidth;
        const marginWidth = 10; // 5px margin on each side
        
        // Calculate the position to center the current thumbnail
        const thumbnailOffsetLeft = currentThumbnail.offsetLeft;
        const thumbnailCenterPosition = thumbnailOffsetLeft + (thumbnailWidth / 2);
        const containerCenterPosition = containerWidth / 2;
        const scrollPosition = thumbnailCenterPosition - containerCenterPosition;
        
        // Ensure we don't scroll beyond the boundaries
        const maxScrollLeft = thumbnailContainer.scrollWidth - containerWidth;
        const finalScrollPosition = Math.max(0, Math.min(scrollPosition, maxScrollLeft));
        
        // Smooth scroll to center the current thumbnail
        thumbnailContainer.scrollTo({
            left: finalScrollPosition,
            behavior: 'smooth'
        });
    }
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function setCurrentSlide(index) {
    showSlide(index);
}

function updateSlideCounter() {
    document.getElementById('currentSlide').innerText = currentSlideIndex + 1;
    document.getElementById('totalSlides').innerText = slides.length.toString();
}

function updateCourseTitle() {
    const currentImageFilename = imageFilenames[currentSlideIndex];
    const courseTitle = courseTitles[currentImageFilename] || 'Course Title';
    document.getElementById('courseTitle').innerText = courseTitle;
}

document.getElementById('nextBtn').onclick = nextSlide;
document.getElementById('prevBtn').onclick = prevSlide;

// Add window resize event to re-center thumbnail when window size changes
window.addEventListener('resize', function() {
    // Debounce the resize event to avoid excessive calls
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(function() {
        centerCurrentThumbnail();
    }, 150);
});

window.onload = function() {
    loadSlides();
    showSlide(currentSlideIndex);
    // Add a small delay to ensure DOM is fully rendered before initial centering
    setTimeout(() => {
        centerCurrentThumbnail();
    }, 100);
};
