export default function verifyBio(user, htmlP, htmlDiv) {
    if (user.bio !== null) {
        htmlP.textContent = user.bio;
    }
    else {
        htmlDiv.remove();
    }
}
