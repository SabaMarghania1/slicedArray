// შემდეგი ტასქი.
// შექმენით ფუნქცია სადაც პარამეტრები იქნება მასივი, და რიცხი, რიცხვი არის აღმნიშვნელი ტუ რამდენად უნდა დაიხლიჩოს ჩვენი მასივი. ფუნქციამ უნდა დაგვიბრუნოს დახლეცილიო მასივი. მაგ: ([1,2,3,4,5,6,7,8,], 2) => ეს დაგვიბრუნებს [[1,2], [3,4], [5,6], [7,8]].
// წარმატებები დრო არის ხვალამდე

const slicedArray = (arr, size) => {
  const sliced = [];

  for (let i = 0; i < arr.length; i++) {
    const last = sliced[sliced.length - 1];

    if (!last || last.length === size) {
      sliced.push([arr[i]]);
    } else {
      last.push(arr[i]);
    }
  }

  return sliced;
};

console.log(slicedArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
