# '../London_postcodes.csv'

#print(open('./test_postcodes.csv'))
fileName = '../London_postcodes.csv'
with open(fileName, 'r') as infile:
    data = infile.read()

# Return a list of the lines, breaking at line boundaries.
print('<div class="row">')
index = 0
for line in data.splitlines()[1:]:


    fields = line.split(",")
    postcode = fields[0]
    postcodeBits = postcode.split()
    postcodeValue = postcodeBits[0] + '_' + postcodeBits[1]
    print( '<div class="col-sm-6 col-xs-12 col-lg-3 col-xl-3"><input type="checkbox" name="postcode" value="' + postcodeValue + '">' + fields[0] + '</input></div>')

    index += 1
    if (index % 4 == 0):
        print('</div>')
        print('<div class="row">')

    if (index == 200):
        break

print('</div>')
