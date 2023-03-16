import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-muted py-5">
        <div class="container">
          <p class="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p class="mb-1">
            By PicantApp &copy; Bootstrap, but please download and customize it
            for yourself!
          </p>
          <p class="mb-0">
            New to Bootstrap?{" "}
            <a href="https://github.com/Snakesp3">Visit the homepage</a> or read
            our{" "}
            <a href="/docs/5.0/getting-started/introduction/">
              getting started guide
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
