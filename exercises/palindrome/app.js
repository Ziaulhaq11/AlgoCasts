
result = reverse('abbas')

function reverse(str) {
    arr = str.split('');
    return arr.every((x,i,a) => x == a[a.length - i - 1] )
}

console.log(result)


// arr = ['a','a','a']

// console.log(arr.every(x => x == 'a'));

/**function reverse(str) {
    arr = str.split('');
    for (let i = 0; i < (arr.length)/2; i++) {
        return arr[i] == arr[arr.length - 1]
    }
} */