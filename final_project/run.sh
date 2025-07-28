#!/usr/bin/bash
./manage.py runserver_plus \
	--cert-file ./https_certificates/192.168.19.220.pem\
	--key-file ./https_certificates/192.168.19.220-key.pem\
	0.0.0.0:8000
