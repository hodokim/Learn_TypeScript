let arr = [
    {gender: 'male', name: 'john'},
    {gender: 'female', name: 'kim'},
    {gender: 'male', name: 'park'}
]

const filtered = arr.filter(function (item) {
    if(item.gender === 'female') {
        return item;
    }
});

console.log(filtered);