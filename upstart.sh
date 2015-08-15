# Set upstart to execute this script.  Remember to npm install first.
cd $(dirname $(readlink -f $0))
npm start
