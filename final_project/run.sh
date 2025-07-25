#!/usr/bin/bash
./manage.py runserver_plus \
	--cert-file ./https_certificates/192.168.8.104.pem\
	--key-file ./https_certificates/192.168.8.104-key.pem\
	0.0.0.0:8000
