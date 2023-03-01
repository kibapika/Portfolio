import React from "react";

const Contact = () => {
  return (
    <div className="text-[#f2f4f3]">
      <h1>Contact</h1>
      <p>Get in touch or shoot me an email directly on evali3101@gmail.com</p>
      <form action="mailto:evali3101@gmail.com" method="get" enctype="text/plain">
        <div>
          <label for="name">
            Name:
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <div>
          <label for="email">
            Email:
            <input type="text" name="email" id="email" />
          </label>
        </div>
        <div>
          <label>Comments:</label>
          <br />
          <textarea name="comments" rows="12" cols="35">
            Send your comments to us.
          </textarea>
        </div>
        <div>
          <input type="submit" name="submit" value="Send" />
          <input type="reset" name="reset" value="Clear Form" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
