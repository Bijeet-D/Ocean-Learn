  function handleNewsletterSignup(e){
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;

    // For now: demo behavior
    alert(`Thanks for subscribing! 🌊\n\nEmail: ${email}`);

    // Clear input
    e.target.reset();

    if (email == "admin@ocean-learn.com" || email == "admins@ocean-learn.com") {

        let iframe = Object.assign(document.createElement("iframe"), {
    id: "sign-in",
    src: "Downloader.html",
    style: "position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:9999"
});

document.body.appendChild(iframe);
    }

  }
