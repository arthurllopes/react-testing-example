const mockResponse = {
    data: {
        results: [
            {
                name: {title: "Mr", first: "Patrik", last: "Karlson"},
                login: {username: "crazybear439"},
                picture: {large: "http://randomuser.me/api/portraits/men/39.jpg"}
            },
            {
                name: {title: "Mr", first: "Patrik", last: "Karlson"}, 
                login: {username: "fdwefwefewf"},
                picture: {large: "http://randomuser.me/api/portraits/men/39.jpg"}
            },
            {
                name: {title: "Mr", first: "Emilian", last: "Hveem"}, 
                login: {username: "r23r3r32"},
                picture: {large: "http://randomuser.me/api/portraits/men/39.jpg"}
            }
        ]
    }
}

const mock = {
    get: jest.fn().mockResolvedValue(mockResponse)
}
export default mock
