// @ts-ignore
type userType = {
    name: string
    age: number
    city: {title: string}
}

function increaseAge(u: userType) {
    u.age++;
}

test('big test', () => {
    var user = {
        name: 'Mr.Twister',
        age: 32,
        city: {
            title: 'Tallinn'
        }
    }

    let addr = user.city

    var user2 = {
        name: 'Mr.Twister',
        age: 32,
        city: addr
    }
    user2.city.title = 'Stanbul'
    expect(user.city.title).toEqual('Stanbul')
})

test('array reference test', () => {
    var users = [
        {
            name: 'Mr.Twister',
            age: 32
        }, {
            name: 'Mr.Twister',
            age: 32
        }
    ]
    var admins = users

    admins.push({name: 'Gangsta', age: 15})
    expect(users.length).toEqual(3)

})

test('array reference test', () => {
    var usersCount = 100;
    var admindCount = usersCount;

    admindCount+=1

    expect(usersCount).toEqual(100)
    expect(admindCount).toEqual(101)

})


test('array reference type test', () => {
    const address = {
        title: 'Minsk'
    }

    var user = {
        name: 'Mr.Twister',
        age: 32,
        city: {
            title: 'Tallinn'
        }
    }

    var user2 = {
        name: 'Mr.Twister',
        age: 32,
        city: user.city
    }

    const users = [user, user2,{name: 'Misha', age: 4, address: address}]
    const admins = [user, user2,{name: 'Misha', age: 4, address: address}]

    admins[0].name = 'Dmiry'

})