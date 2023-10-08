// drop menu : .....................
function toggleNav() {
    const navLinks = document.getElementById('dropnav');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}

// resume sction : ...................

document.getElementById('btn6').addEventListener('click', function() {
    // Replace 'your_resume.pdf' with the actual filename and path of your resume PDF.
    const resumeUrl = 'bk_resume.pdf';
  
    // Create a hidden anchor element to trigger the download.
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank'; // Open the link in a new tab.
    link.download = 'bk_resume.pdf'; // Change the filename for download if needed.
    link.click();
  });
  
  document.getElementById('btn5').addEventListener('click', function() {
    // Replace 'your_resume.pdf' with the actual filename and path of your resume PDF.
    const resumeUrl = 'bk_resume.pdf';
  
    // Open the resume in a new tab/window for viewing.
    window.open(resumeUrl, '_blank');
  });
  


//   certificate section 

const cert_src=['./certificate_1.jpg','./certificate_2.jpg','./certificate_3.webp','./certificate_4.jpg','./certificate_5.jpg','./certificate_6.jpg','./certificate_7.jpg']
const cert_h2=['Prutor@IITK', 'SHAPEMYSKILLS PRIVATE LIMITED','TEKNAVIGATORS', 'National Ip Awareness Mission', 'CISCO-Cybersecurity Essentials', 'Prutor@IITK','Robustresults Pvt Ltd']
const cert_p=[
    'This is to certify that Mr. Babloo Kumar of IIMT ENGINEERING COLLEGE, MEERUT has successfully completed certification course on Full Stack Development.', 
    'Mr. Babloo Kumar has successfully Participated in One Day Workshop on Innovating Self-Screen & Opportunities held on 15 Feb 2023  at IIMT GREATOR NOIDA.',
    'This is to certify that Mr. Babloo Kumar has  actively participated in Workshop/Seminar on the topic Python with Django which was held on 22-january-2022.',
    'This is to certify, Mr. Babloo Kumar of IIMT ENGINEERING COLLEGE has successfully participated in Ip Awareness/Training program under NATIONAL INTELLECTUAL PROPERTY AWARENESS MISSION on February 02,2022',
    'For completing the Cisco Networking AcademyCybersecurity Essentials course, and demonstrating.',
    'This is to certify that the project entitled Custom Project Covering All The Stacks(PHP,MYSQL,JS,Bootstrap,HTML,CSS) , designed on Full Stack Developer - HTML5, CSS3, JavaScript, Bootstrap, PHP with MySQL is an original work carried out by BABLOO KUMAR, Enrollment ID Prutor-147190, of I.I.M.T. ENGINEERING COLLEGE, MEERUT for 6 weeks duration from October-November 2021.',
    'This is to certify that Mr./Ms. BABLOO KUMAR has done his/her internship with Robustresults Pvt ltd. an IITK incubated company, for  6 weeks duration from October- November 2021.'
]
var certX=0

window.onload= function (){
    document.getElementById('certImg').src=cert_src[certX]
    document.getElementById('certH2').innerHTML=cert_h2[certX]
    document.getElementById('certP').innerHTML=cert_p[certX]

}
document.getElementById('caro_next').onclick = function() {
    if(certX==cert_src.length-1){
        certX=0
    }
    else{
        certX=certX+1
    }
    document.getElementById('certImg').src=cert_src[certX]
    document.getElementById('certH2').innerHTML=cert_h2[certX]
    document.getElementById('certP').innerHTML=cert_p[certX]
}
document.getElementById('caro_prev').onclick = function() {
    if(certX==0){
        certX=cert_src.length-1
    }
    else{
        certX=certX-1
    }
    document.getElementById('certImg').src=cert_src[certX]
    document.getElementById('certH2').innerHTML=cert_h2[certX]
    document.getElementById('certP').innerHTML=cert_p[certX]
}


// Create a set to store the unique IP addresses of visitors
var uniqueVisitorSet = new Set();

// Get the IP address of the current visitor
function getIpAddress() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://icanhazip.com/', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var ip = xhr.responseText;

            // Check if the IP address is already in the set
            if (!uniqueVisitorSet.has(ip)) {
                // Add the IP address to the set and increment the unique visitor count
                uniqueVisitorSet.add(ip);

                // Update the unique visitor count element
                document.getElementById('unique-visitor-count').innerHTML = uniqueVisitorSet.size;
            }
        } else {
            console.log('Error getting IP address: ' + xhr.statusText);
        }
    };
    xhr.send();
}

// Initialize the IP address of the current visitor
getIpAddress();