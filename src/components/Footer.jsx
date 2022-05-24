import React from "react";

const Footer = () => {
    return (
        <footer class="page-footer light-blue darken-4">
            <div class="footer-copyright">
                <div class="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a class="grey-text text-lighten-4 right" href="#!">Repository</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer };