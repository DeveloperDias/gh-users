import GithubUser from "./classes/User";

export default function verifyBio(
  user: GithubUser,
  htmlP: HTMLParagraphElement,
  htmlDiv: HTMLDivElement
) {
  if (user.bio !== null) {
    htmlP.textContent = user.bio;
  } else {
    htmlDiv.remove();
  }
}
