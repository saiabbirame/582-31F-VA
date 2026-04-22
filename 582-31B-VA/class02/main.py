# let's create an object

# your program for example takes the information of a student

# name = "Alice"
# program = "Web Development"
# gpa = 3.7

# print(name, program, gpa)

# name2 = "Karim"
# program2 = "Web Development"
# gpa2 = 4.2

# what if we have 50 ppl?

# we want to avoid repetitive naming, we want to make things reusable!

# let's model our structured object
# class Student:
#     pass

# we make an object!
# student1 = Student()
# student1.name = "Alice"
# student1.program = "Web Development"
# student1.favourite_food = "burger"

# let's model our class for real!
class Student:
    # let's say what data student needs
    def __init__(self, name, program, gpa): # this is the first that gets executed when you create an object.
        # properties of our class!
        self.name = name
        self.program = program
        self.gpa = gpa
    
    # we can also make functions
    def print_info(self): # in object oriented programming, we call this a method!
        print(self.name, self.program, self.gpa)

student1 = Student("Jane", "Web Development", 3.7)
print(student1.program)
student1.print_info()

