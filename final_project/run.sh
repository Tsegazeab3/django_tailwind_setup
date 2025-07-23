#!/usr/bin/bash
./manage.py runserver_plus \
	--cert-file ./https_certificates/172.16.106.190.pem\
	--key-file ./https_certificates/172.16.106.190-key.pem\
	0.0.0.0:8000
