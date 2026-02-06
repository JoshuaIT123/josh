import os
import shutil

try:
    os.remove("students.txt")      # delete file
    shutil.rmtree("myfolder")      # delete folder
    print("File and folder deleted")
except FileNotFoundError:
    print("File or folder not found")
