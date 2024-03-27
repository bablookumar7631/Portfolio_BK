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

const cert_src=['./certificate_1.jpg','./certificate_2.png','./certificate_3.webp','./certificate_4.jpg','./certificate_5.jpg','./certificate_6.jpg','./certificate_7.jpg']
const cert_h2=['Full Stack Developer', 'Data Science Masters','Participation Cerificate', 'National Ip Awareness Mission', 'CISCO-Cybersecurity Essentials', 'Prutor@IITK','Robustresults Pvt Ltd']
const cert_p=[
    'This certificate from Prutor@IIT Kanpur recognizes my completion of their Full Stack Developer certification course. The program equipped me with the skills to build responsive websites using HTML5, CSS3, JavaScript, Bootstrap, and PHP with MySQL.', 
    'Successfully completed Physics Wallahs Data Science Masters program, gaining strong foundational knowledge in statistics, machine learning, pandas, numpy, visualization, and programming languages like Python and more.',
    'I expanded my skillset in Python programming through participation in a workshop/seminar offered by Teknavigators on January 22nd, 2022. The session covered Python with Django.',
    'I broadened my knowledge of intellectual property through participation in a program offered by the National Intellectual Property Awareness Mission (NIPAM) on February 12, 2022.',
    'For completing the Cisco Networking AcademyCybersecurity Essentials course, and demonstrating.',
    'Earned a certificate from Prutor.ai for successfully finishing a 6-week custom project that required the application of full-stack development skills across HTML5, CSS3, JavaScript, Bootstrap, PHP with MySQL.',
    'Successfully completed a 6-week internship at Robust Results Pvt. Ltd., an IITK incubated company, working on several projects related to web development.'
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