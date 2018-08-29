/**
 * This module is used to retrieve a piece of metadata for a running AWS EC2
 * instance.
 */

const got = require('got');

/**
 * fetch fetches the given metadata field for the currently running instance
 * and returns a Promise that will resolve to that data.
 *
 * @param  {String}   field The metadata field to retrieve.
 * @param  {Promise<String>} A Promise that resolves to the field data.
 */
function fetch(field) {
  // We use the IP address  as it is referenced from the AWS docs:
  // https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html
  return got(`http://169.254.169.254/latest/meta-data/${field}`).then((res) => res.body);
}

module.exports = {
  fetch
};
