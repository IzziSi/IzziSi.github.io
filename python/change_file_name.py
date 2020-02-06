import os
import time
import getpass
import os.path
from os import path

username = getpass.getuser()
directory = r'C:\Users' + r'\ ' + username + r'\Desktop'
directory = directory.replace(" ", "")

fileDash =  r'\ '
fileDash = fileDash.replace(" ", "") 

print('Input file to find.')
findFile = r'\ '
findFile = findFile.replace(" ", "") + input()

        
print('Default directory is Desktop. Change location? (y/n)')
changeDirectory = input()

if changeDirectory.lower() == 'yes':
    print('Input file directory.')
    directory = input()
    print('Directory is now ' + directory)
elif changeDirectory.lower() == 'y':
    print('Input file directory.')
    directory = input()
    print('Directory is now ' + directory)
else:
    print('Directory is ' + directory)

print('Finding files with the name ')
fileToRename = directory + fileDash + findFile

while not path.exists(fileToRename):
    print('File not found. Enter a file name:')
    findFile = r'\ '
    findFile = findFile.replace(" ", "") + input()
    fileToRename = directory + fileDash + findFile
    
if path.exists(fileToRename):


    print('Enter new file name')
    fileNewName = input()

    print('File will be renamed: ' + fileNewName + ' is this correct? (y/n)')
    renameApproved = input()




    if renameApproved.lower() == 'yes':
        fileRenamed = directory + fileDash + fileNewName
        os.rename(fileToRename, fileRenamed)
    elif renameApproved.lower() == 'y':
        fileRenamed = directory + fileDash + fileNewName
        os.rename(fileToRename, fileRenamed)
    else:
            print('File rename cancelled.')
        
    
