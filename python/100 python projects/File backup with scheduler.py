#Goal: set date, choose directory where to copy from,
#set directory where to copy to
#choose how many days to wait to update files again

from datetime import date
import os
import platform
import getpass

username = getpass.getuser()
today = date.today()

fileDash =  r'\ '
fileDash = fileDash.replace(" ", "")
originalPath = r'C:\Users' + fileDash + username + fileDash + 'Desktop'
print("Current directory to back up is: " + originalPath + ". Change directory?")
changeDirectory = input()
if changeDirectory.lower() == "yes":
    originalPath = input()
    print("Directory to back up is: " + originalPath + ". Change directory?")


def creation_date(path_to_file):
    if platform.system() == "Windows":
        return os.path.getctime(path_to_file)
    else:
        stat = os.stat(path_to_file)
        try:
            return stat.st_birthtime
        except AttributeError:
            return stat.st_mtime
