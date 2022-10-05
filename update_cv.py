# importing os module 
import os

messageCommit = input("Enter your commit message: \n")

# Using os.system() method
os.system("git add .")

os.system(f"git commit  -m '{messageCommit}'")

os.system('git push origin main')

os.system('firebase deploy')
