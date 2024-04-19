// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        footer.classList.add('show-animate');
    }
    else {
        footer.classList.remove('show-animate');
    }
}

//     <?php
//     if(isset($_POST['email'])) {

//     // EDIT THE 2 LINES BELOW AS REQUIRED
//     $email_to = "rohanvmhetar@gmail.com";
//     $email_subject = "Job Selection";

//     function died($error) {
//         // your error code can go here
//         echo "We are very sorry, but there were error(s) found with the form you submitted. ";
//         echo "These errors appear below.<br /><br />";
//         echo $error."<br /><br />";
//         echo "Please go back and fix these errors.<br /><br />";
//         die();
//     }

//    // validation expected data exists
//     if(!isset($_POST['first_name']) ||
//         !isset($_POST['email']) ||
//         !isset($_POST['telephone']) || {
//         died('We are sorry, but there appears to be a problem with the form you submitted.');      
//     }

//     $first_name = $_POST['first_name']; // required
//     $email_from = $_POST['email']; // required
//     $telephone = $_POST['telephone']; // required

//     $error_message = "";
//     $string_exp = "/^[A-Za-z0-9 .'-]+$/";
//   if(!preg_match($string_exp,$first_name)) {
//     $error_message .= 'The First Name you entered does not appear to be valid.<br />';
//   }
//   if(!preg_match($string_exp,$last_name)) {
//     $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
//   }  
//     $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
//   if(!preg_match($email_exp,$email_from)) {
//     $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
//   }
//   if(strlen($error_message) > 0) {
//     died($error_message);
//   }
//     $email_message = "Response from Mailing List Page.  Please enter in database.\n\n";

//     function clean_string($string) {
//       $bad = array("content-type","bcc:","to:","cc:","href");
//       return str_replace($bad,"",$string);
//     }

//     $email_message .= "First Name: ".clean_string($first_name)."\n";
//     $email_message .= "Email: ".clean_string($email_from)."\n";
//     $email_message .= "Telephone: ".clean_string($telephone)."\n";


// // create email headers
// $headers = 'From: '.$email_from."\r\n".
// 'Reply-To: '.$email_from."\r\n" .
// 'X-Mailer: PHP/' . phpversion();
// @mail($email_to, $email_subject, $email_message, $headers);

// ?>

// <!-- include your own success html here -->

// Thanks for contacting me



// <?php
// }
// ?>