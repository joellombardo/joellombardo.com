// -----------------------
//    Webdev Animations
// -----------------------

document.getElementById('developer-toggle').addEventListener('mouseover', function() {
    document.getElementById('signature').classList.add('dev-logo-animation');
    document.getElementById('developer').classList.add('dev-animation');
});

document.getElementById('developer-toggle').addEventListener('mouseleave', function() {
    document.getElementById('signature').classList.remove('dev-logo-animation');
    document.getElementById('developer').classList.remove('dev-animation');
});

// -------------------------
//    Designer Animations
// -------------------------

document.getElementById('designer-toggle').addEventListener('mouseover', function() {
    document.getElementById('designer').classList.add('ruler-animation');
    document.getElementById('ruler-line').classList.add('ruler-line-animation');
    document.getElementById('vertical-cursor').classList.add('hard-fade-out');
    document.getElementById('pixel-counter').classList.add('pixel-counter-animation');
    document.getElementById('bounding-box').classList.add('bounding-box-animation');
});

document.getElementById('designer-toggle').addEventListener('mouseleave', function() {
    document.getElementById('designer').classList.remove('ruler-animation');
    document.getElementById('ruler-line').classList.remove('ruler-line-animation');
    document.getElementById('vertical-cursor').classList.remove('hard-fade-out');
    document.getElementById('pixel-counter').classList.remove('pixel-counter-animation');
    document.getElementById('bounding-box').classList.remove('bounding-box-animation');
});

// -------------------------
//    Sysadmin Animations
// -------------------------
var txt = '';

document.getElementById('sysadmin-toggle').addEventListener('mouseover', function() {
    document.getElementById('sysadmin').classList.add('sysadmin-animation');
    document.getElementById('sysadmin').classList.remove('hidden');
    document.getElementById('close').classList.add('close-button-animation');
    var i = 0;
    txt = 'Add-ADGroupMember -Identity "IT" -Member jlombardo';

    typeWriter();

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('typing').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }
});

document.getElementById('sysadmin-toggle').addEventListener('mouseleave', function() {
    document.getElementById('typing').innerHTML = '';
    document.getElementById('sysadmin').classList.add('hidden');
    document.getElementById('close').classList.remove('close-button-animation');
    txt = '';
});
