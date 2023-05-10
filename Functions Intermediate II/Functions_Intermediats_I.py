x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]
x[1][0] = 15
print(x)

print("*"*50)

students[0]["last_name"] = "Bryant"
print(students)
print("*"*50)
sports_directory["soccer"][0] = "Andres"
print(sports_directory)

z[0]['y'] = 30
print(z)

# Iterate Through a List of Dictionaries

students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]


def iterateDictionary(some_list):
    for i in range(len(some_list)):
        print(some_list[i]['first_name'] + some_list[i]['last_name'])


print(iterateDictionary(students))

print("*"*50)
# Get Values From a List of Dictionaries


def iterateDictionary2(name, some_list):
    for i in range(len(some_list)):
        print(students[i][name])


print(iterateDictionary2('last_name', students))

# Iterate Through a Dictionary with List Values

dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
lengthLocations = len(dojo['locations'])
lengthInstructors = len(dojo['instructors'])

print(f"{lengthLocations} Locations")
for i in dojo['locations']:
    print(i)

print(f"{lengthInstructors} instructors")
for i in dojo['instructors']:
    print(i)
