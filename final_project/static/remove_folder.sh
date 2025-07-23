#!/usr/bin/bash
set -e # Exit immediately if a command exits with a non-zero status

obj=$1
echo $obj
rm -r "${obj}"
rm "../templates/${obj}.html" # Corrected syntax
sed -i "/${obj}/d" ../templates/index.html
sed -i "/${obj}/d" ../app/urls.py
sed -i "/${obj}/,+5d" ../app/views.py
sed -i "/${obj}/d" ../package.json
sed -i "/${obj}/d" ../tailwind.config.js
