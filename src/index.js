/**
 * Create a function that:
 *    1. Receives a valid email as input.
 *      1.1 Checking email validity is no necessary, as it
 *          is already guaranteed to be valid.
 *      1.2 There are no constaints on the length of the
 *          email parts. Both username and domain can have 1 or
 *          more letters.
 *      1.3 The domain can be anything. (Ex: .travel, .x, .yy)
 *      1.4 There can be multiple subdomains. (Ex: something@my.domain.com)
 *
 *    2. Returns the masked email.
 *      2.1 Email parts (username and domain) that have length 2 or less
 *          must not be masked.
 *      2.2 Email parts with length 3 or more must be masked.
 *      2.3 The top level domain must not be masked (regardless of length).
 *      2.4 The masking of an email part is done by showing the first
 *          and last charater of that email part with two asterisks in
 *          between. ("john" => "j**n")
 *
 *
 * Terminology:
 *      For the email "mark.watney@nasa.gov.us"
 *
 *      The parts are:
 *          username:           "mark.watney"
 *          domain:             "nasa.gov.us"
 *          subdomains:         "nasa" and "gov"
 *          top level domain:   "us"
 *
 *
 *
 * Examples:
 *
 * Ex1:
 * Input: "theodor@cultofcoders.ro"
 * Output: "t**r@c**s.ro"
 *
 * Ex2:
 * Input: "x@x.x"
 * Output: "x@x.x"
 *
 * Ex3:
 * Input: "asdf@x.x"
 * Output: "a**f@x.x"
 *
 * Ex4:
 * Input: "mark.watney@nasa.gov.us"
 * Output: "m**y@n**v.us"
 */

// IMPLEMENT THE FOLLOWING FUNCTION
function maskEmail(email) {
  let [username, domain] = email.split("@");
  const mask = (str) => {
    if (str.length > 2) {
      return str[0] + "**" + str[str.length - 1];
    }
    return str;
  };

  return (
    mask(username) +
    "@" +
    domain.split(".").reduce((acc, item, index, array) => {
      if (index !== array.length - 1) {
        return acc + item;
      } else {
        return mask(acc) + "." + item;
      }
    }, "")
  );
}

export { maskEmail };
