# Create and write to file
file = open("students.txt", "w")
file.write("Name: Joshua\nAge: 18\n")
file.close()

# Append more data
file = open("students.txt", "a")
file.write("Course: Computer Science\n")
file.close()

print("Data written successfully")
