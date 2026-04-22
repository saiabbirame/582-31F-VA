# in here, I want you to create a new class for a friend.

# i want you to take in 4-5 arguments and initialize it.
class Friend:
    def __init__(self, name, age, city, hobby, favorite_food):
        self.name = name
        self.age = age
        self.city = city
        self.hobby = hobby
        self.favorite_food = favorite_food

    # create a function that shows their full information
    def print_info(self):
        print(self.name, self.age, self.city, self.hobby, self.favorite_food)

    # create a function that greets them! (with print)
    def greet(self):
        # inside print use the name variable
        print("Hey", self.name, "!")

# create 3 instances
friend1 = Friend("Alice", 23, "Montreal", "Reading", "Pasta")
friend2 = Friend("Ken", 25, "Toronto", "Gaming", "Pizza")
friend3 = Friend("Lao", 22, "Vancouver", "Dancing", "Burger")

# tests
friend1.print_info()
friend1.greet()

friend2.print_info()
friend2.greet()

friend3.print_info()
friend3.greet()